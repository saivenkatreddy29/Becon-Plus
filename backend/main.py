from langchain_community.document_loaders import CSVLoader
from langchain_openai import OpenAIEmbeddings
from langchain_chroma import Chroma
from langserve import add_routes
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from generate_pdf import parse_markdown


class Data(BaseModel):
    data: dict


loader = CSVLoader(
    "./finsurance.csv",
)
data = loader.load()

vectorstore = Chroma.from_documents(
    documents=data, embedding=OpenAIEmbeddings(), persist_directory="./"
)

retriever = vectorstore.as_retriever(search_type="similarity")


def generate_insurance_summary(patient_info):
    relevant_docs = retriever.invoke(patient_info, k=10)
    context = [doc.page_content for doc in relevant_docs]
    context = list(set(context))

    response = []
    for each_doc in context:
        each_doc = each_doc.split("\n")
        each_doc = [ele.split(":") for ele in each_doc]
        each_doc = {ele[0].strip(): ele[1].strip() for ele in each_doc}
        each_doc["Link"] = "www.google.com"
        response.append(each_doc)

    # sort the response based on the key each_doc['Cost']
    response = sorted(response, key=lambda x: x["Cost"])[:5]

    parse_markdown("John Doe", "2024-09-29", 23, "Male", response)

    return {"patient_info": patient_info, "context": context}


app = FastAPI(
    title="Insurance Plan Recommendor API",
    version="1.0",
    description="API for recommending Insurance Plans to patients.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/home")
async def get_recommendations(body: Data):
    req = {}
    income = int(body.data["income"])
    print(income)
    if 0 <= income <= 9999:
        income = "0-10000"
    elif 10000 <= income <= 25000:
        income = "10000-25000"
    elif 25000 <= income <= 40000:
        income = "25000-40000"
    elif 40000 <= income <= 60000:
        income = "40000-60000"
    else:
        income = "60000+"

    req["Income Range"] = income
    req["County"] = body.data["county"]
    req["Persons Covered"] = body.data["insuranceCoverage"]

    person_info = f"Income Range: {req['Income Range']}\nCounty: {req['County']}\nPersons Covered: {req['Persons Covered']}"

    return generate_insurance_summary(person_info)
