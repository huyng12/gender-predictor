from flask import request


# TODO: Use model to predict
def handle_predict():
    body = request.get_json(force=True)
    return {
        "name": body['name'],
        "predict": "male",
        "accuracy": 96.7791211232
    }
