from markdown_pdf import MarkdownPdf, Section
import markdown_pdf
import webbrowser
import uuid



def parse_markdown(name, date, age, gender, recommendations):
    pdf = MarkdownPdf(toc_level=6)
    markdown_content = f"# Beacon+\n"
    markdown_content += f"<table id='1'> <tr> <td><strong>Name:</strong> {name}</td> <td ><strong>Date:</strong> {date}</td> </tr>\n<tr> <td><strong>Age:</strong> {age}</td> <td ><strong>Gender:</strong> {gender}</td> </tr> </table>\n"
    markdown_content += f"<h2>Recommendations</h2>"
    markdown_content += "<table id='2'><tr><th>S.No</th><th>Insurance</th><th>Type</th><th>Cost</th></tr>"

    for idx, recommendation in enumerate(recommendations):
        # markdown_content += f"<tr><td>{idx+1}</td><td>[{recommendation['Insurance Name']}]({recommendation['Link']})</td><td>{recommendation['Type']}</td><td>{recommendation['Cost']}</td></tr>"
        markdown_content += f"<tr><td>{idx+1}</td><td><a href=\"{recommendation['Link']}\">{recommendation['Insurance Name']}</a></td><td>{recommendation['Coverage']}</td><td>{recommendation['Cost']}</td></tr>"

    markdown_content += "</table>"
    pdf.add_section(
        Section(markdown_content),
        user_css="h1 {text-align:center;} h2 {text-align: center} #1 td, th {text-align: left; vertical-align: middle;} th, td {padding-left: 40px}",
    )
    random_id = uuid.uuid4()
    pdf.save(f"report_{random_id}.pdf")
    webbrowser.open_new(f"report_{random_id}.pdf")
