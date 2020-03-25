
with gzip.open("city.list.json.gz", "rt", encoding="utf-8") as f:
    data = json.load(f)