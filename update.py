import json, requests, os

mappings = {}

def getProxies(url):
    try:
        r = requests.get(url)
        a_json = json.loads(r.content)
        return a_json
    except:
        return []

def getAPIData(lang, mapping):
    proxiesArr = getProxies(mapping["proxyApiUrl"])
    url = mapping['apiUrl']

    if len(proxiesArr) > 0:
        for proxy in proxiesArr:
            addr = f"{proxy['Type'][0].lower()}://{proxy['Ip']}:{proxy['Port']}"
            try:
                r = requests.get(url, proxies={"http": addr})
                a_json = json.loads(r.content)
                mappings[lang]['lastProxyFetchSuccess'] = True
                return a_json
            except:
                continue
        print("No proxies available for this country: " + lang)
        print("Trying without proxy...")

    try:
        r = requests.get(url)
        a_json = json.loads(r.content)
        mappings[lang]['lastProxyFetchSuccess'] = False
        return a_json
    except:
        print("Could not fetch data for this country: " + lang)
        return []


if not os.path.exists('./apiData'):
    os.makedirs('./apiData')

with open('./mappings.json') as json_file:
    mappings = json.load(json_file)

for lang in mappings:
    data = getAPIData(lang, mappings[lang])
    if not data == []:
        with open('./apiData/' + lang + '.json', 'w') as f:
            f.write(json.dumps(data, indent=4))

with open('./mappings.json', 'w') as f:
    f.write(json.dumps(mappings, indent=4))