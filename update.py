import os, json, requests

if not os.path.exists('apiData'):
    os.makedirs('apiData')

with open('mappings.json') as json_file:
    mappings = json.load(json_file)
    for lang in mappings:
        r = requests.get(mappings[lang]['apiUrl'])
        rContent = r.content
        try:
            a_json = json.loads(rContent)

            # if file exists, delete it
            if os.path.exists('apiData/' + lang + '.json'):
                os.remove('apiData/' + lang + '.json')

            with open('apiData/' + lang + '.json', 'wb') as f:
                f.write(rContent)
        except:
            print(mappings[lang]['apiUrl'])
            print("Could not be converted to JSON")