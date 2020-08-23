import json
import time
from random import randrange

with open('demo.json') as json_file:
    data = json.load(json_file)

print(data)

for module in data:
    module['state'] = "inactive"

for module in data:
    module['state'] = "active"
    with open('demo.json', 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=4, ensure_ascii=False)

    time.sleep(5)
    
    module['state'] = "inactive"
    with open('demo.json', 'w') as json_file:
        json.dump(data, json_file, indent=4, ensure_ascii=False)
