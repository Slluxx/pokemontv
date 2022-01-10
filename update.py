import os, json, requests

# if folder does not exist, create it
if not os.path.exists('apiData'):
    os.makedirs('apiData')

with open('mappings.json') as json_file:
    mappings = json.load(json_file)
    for lang in mappings:
        r = requests.get(mappings[lang]['apiUrl'])
        with open('apiData/' + lang + '.json', 'wb') as f:
            f.write(r.content)