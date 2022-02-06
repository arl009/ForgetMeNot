from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import requests
import json
import sys
import base64

from imagetotext import findrx, ocr_space_file

app = Flask(__name__)
CORS(app)

def converter(x):
    x_byte = x.encode("ascii")

    with open("imageToSave.png", "wb") as fh:
        fh.write(base64.decodebytes(x_byte))

    return((x_byte))

def medget(Rxnum):
    response_API = requests.get('https://api.fda.gov/drug/ndc.json?search=product_ndc:"' + Rxnum + '"&limit=5')
    data = response_API.text
    return json.loads(data)

@app.route("/")
@cross_origin()
def index():
    return jsonify({"hi": "there"})

@app.route('/upload', methods = ['POST'])
@cross_origin()
def towhat():
    #print(type(request.json))
    # with open("base64string.txt", 'w') as f:
    #     print((request.json['pt']), file = f)
    # print(converter(request.json['pt'][22:]))
    # y = json.loads(ocr_space_file(filename='imageToSave.png'))
    # y = (findrx(y['ParsedResults'][0]['ParsedText']))
    #z = medget('y')
    #return jsonify({'things': [0, 2, 3], 'Rxval' : 3, 'Med' : medget('22840-0209')})
    response = jsonify(message="Simple server is running")

    # Enable Access-Control-Allow-Origin
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response




