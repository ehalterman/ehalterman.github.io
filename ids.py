import gzip
import json
with gzip.open("city.list.json.gz", "r") as f:

    data = f.read()
    j = json.loads(data.decode('utf-8'))
    print(j)