##  Introduction
This application streamlines the workflow at Ligthouse Free Medical Clinic at Buffalo. From initial data collection to data entry to multiple systems to getting recommendations for insurance that is personalized for the patient.

## Setup
The project is built using NextJS for the front end and FastAPI for the backend. To setup the servers and get it running, follow these steps:
### For the Front End server:
 1. You need Node and npm installed on your machine.
 2. Now, in a terminal cd into lighthouse/beacon/beacon and run the following commands:
	 ```
	 npm install
	 npm run dev
	```
3. This would start a server with a link like "http://localhost:3000/" just paste this in your browser to now access the website.

### For the backend:
1. You need python3 installed on your machine.
2. Now, in a terminal cd into lighthouse/backend and run the following commands:
	```
	python3 -m venv .venv
	source .venv/bin/activate
	pip install -r requirements.txt
	export OPENAI_API_KEY=<the api key for accessing chatgpt>
	```
	This could later be updated to use locally hosted model of chatgpt.
	```
	fastapi dev main.py
	```
	This would start a backend server to run on localhost:8000. You don't need to access this directly.

You can now use the application in the browser.

	
	






