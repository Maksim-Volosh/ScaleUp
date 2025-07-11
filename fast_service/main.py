from fastapi import FastAPI
import requests

app = FastAPI()


@app.get("/get_node_response")
def read_root():
    response = requests.get("http://node_service:3000")
    print(response, flush=True)
    if response.status_code != 200:
        print(response, flush=True)
        return {"error": "Failed to connect to Node service"}
    else:
        res = response.text
    return {"Hello": "World", "Node Service Response": res}


