import uuid

from flask import request


def handle_predict(predictors):
    def handler():
        body = request.get_json(force=True)
        names = body['names']

        if len(names) == 0:
            return {"error": "list must contains at least one name"}, 400

        # Add unique ID for preventing name duplication
        names_with_uuid = []
        for name in names:
            names_with_uuid.append({
                'name': name,
                'uuid': str(uuid.uuid4())
            })

        result = []
        for predictor in predictors:
            result = result + predictor.predict(names_with_uuid)
        return {"data": result}, 200
    return handler
