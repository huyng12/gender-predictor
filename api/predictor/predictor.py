from predictor.gender import Gender


class Predictor:
    def __init__(self, vectorizer, model, model_name):
        self.vectorizer = vectorizer
        self.model = model
        self.model_name = model_name

    def predict(self, names_with_uuid):
        names = [name_with_uuid['name'] for name_with_uuid in names_with_uuid]
        X = self.vectorizer.transform(names)

        # Predict genders and probabilities
        genders = self.model.predict(X)
        probas = self.model.predict_proba(X)

        # Transform result
        result = []
        for index, name_with_uuid in enumerate(names_with_uuid):
            gender, proba = genders[index], probas[index]
            result.append({
                'name': name_with_uuid['name'],
                'uuid': name_with_uuid['uuid'],
                'gender': 'male' if gender == Gender.MALE.value else 'female',
                'accuracy': proba[gender],
                'model_name': self.model_name
            })

        return result
