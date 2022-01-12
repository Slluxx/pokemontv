import os, json, requests, time

if not os.path.exists('./apiData'):
    os.makedirs('./apiData')


with open('mappings.json') as json_file:
    mappings = json.load(json_file)
    for lang in mappings:
        currTime = str(int(time.time()))


        try:
            r = requests.get(mappings[lang]['apiUrl'])
            rContent = r.content
        except:
            print("Error getting " + mappings[lang]['apiUrl'])
            continue

        try:
            a_json = json.loads(rContent)
            with open('./apiData/' + lang + '.json', 'wb') as f:
                f.write(rContent)
        except:
            print(mappings[lang]['apiUrl'])
            print("Could not be converted to JSON")