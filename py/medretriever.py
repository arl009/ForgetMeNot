import requests
import json

def medget(Rxnum):
    response_API = requests.get('https://api.fda.gov/drug/ndc.json?search=product_ndc:"' + Rxnum + '"&limit=5')
    data = response_API.text
    return json.loads(data)

print(medget('22840-0209'))