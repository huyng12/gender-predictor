from flask import request


def handle_predict(predictors):
    def handler():
        body = request.get_json(force=True)
        names = body['names']
        result = []
        for predictor in predictors:
            result = result + predictor.predict(names)
        return {"data": result}, 200
    return handler
