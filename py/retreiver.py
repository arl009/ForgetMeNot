import requests
import json

#Variables to be passed in
ndcNum = "22840-0209"
#ndcNum = "1099-728-0394" <-- fake one ish made
ndcPackageNum = "22840-0209-4"
#if want to do search function with name
genericName = "Ambrosia confertiflora"

#Get API https://open.fda.gov/apis/drug/ndc/how-to-use-the-endpoint/

response_API = requests.get('https://api.fda.gov/drug/ndc.json?search=product_ndc:"' + ndcNum + '"&limit=5')

#Search by name!
#response_API = requests.get('https://api.fda.gov/drug/ndc.json?search=generic_name:"' + genericName + '"&limit=5')


#print(response_API.status_code)
data = response_API.text
parse_data = json.loads(data)

#Name, brand, manufacturer
gName = parse_data['results'][0]['generic_name'].title()
brand = parse_data["results"][0]["brand_name"]
manufact = parse_data["results"][0]["labeler_name"]
print("Name: ", gName)
print("Brand: ", brand)
print("Manufacturer: " + manufact)

#Active Ingredients
print("\nActive Ingredients: ")
for i in parse_data['results'][0]["active_ingredients"]:
  aiName = i['name'].title()
  aiStrength = i['strength']
  print('Name: ' + aiName)
  print('Strength: ' + aiStrength)

#Expiration Date
experationDate = parse_data['results'][0]["listing_expiration_date"]
experationDateFormated = experationDate[5:6] + "/" + experationDate[7:] + "/" + experationDate[:4]

print("\nExpiration Date: ", experationDateFormated)

#Type and Usage
medType = parse_data['results'][0]["dosage_form"].title()
medUse = parse_data['results'][0]["product_type"].title()
print("Type: ", medType)
print("Use: ", medUse)

#Dosage
for i in parse_data['results'][0]["packaging"]:
  if i["package_ndc"] == ndcPackageNum:
    dosage = i['description']
    print('Dosage: ' + dosage)

#Pharmesutical Classes
print("\nPharmesutical Classes: ",)
for i in parse_data['results'][0]["pharm_class"]:
  print('     - ', i.title())


#https://www.youtube.com/watch?v=7LNl2JlZKHA <-- connect python to javascript