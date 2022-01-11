import os, json, requests, time

if not os.path.exists('apiData'):
    os.makedirs('apiData')

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36',
    'cache-control': 'private, max-age=0, no-cache, no-store, must-revalidate'
}

with open('mappings.json') as json_file:
    mappings = json.load(json_file)
    for lang in mappings:
        
        r = requests.get(mappings[lang]['apiUrl'] + "?time=" + str(int(time.time()) ), headers=headers)
        rContent = r.content
        try:
            a_json = json.loads(rContent)
            with open('apiData/' + lang + '.json', 'wb') as f:
                f.write(rContent)

            if lang == "us":
                print(a_json[0])

        except:
            print(mappings[lang]['apiUrl'])
            print("Could not be converted to JSON")