import requests
import json


def ocr_space_file(filename, overlay=False, api_key='K81942313988957', language='eng'):
    payload = {'isOverlayRequired': overlay,'apikey': api_key,'language': language, 'OCREngine' : 2}
    print('here')
    with open(filename, 'rb') as f:
        r = requests.post('https://api.ocr.space/parse/image',
                          files={filename: f},
                          data=payload,
                          )
    print('here more')

    return r.content


def findrx(text):
    x = text.lower().find('rx')

    rxval = ''
    incomplete = True
    loc = 0

    while incomplete:
        if '0123456789-'.find(text[x + loc + 2]) >= 0:
            rxval = rxval + text[x+loc+2]
        elif ' '.find(text[x+loc+2]) >= 0:
            rxval = rxval + '-'
        else:
            incomplete = False
        loc += 1
    if rxval[0] == '-':
        rxval = rxval[1:]
    if rxval[len(rxval)-1] == '-':
        rxval = rxval[:-1]
    return rxval

y = json.loads(ocr_space_file(filename='ra_comm_prescription_label-500.png'))
print(findrx(str(y)))