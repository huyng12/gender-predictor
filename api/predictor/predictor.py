from predictor.gender import Gender


class Predictor:
    def __init__(self, vectorizer, model, model_name):
        self.vectorizer = vectorizer
        self.model = model
        self.model_name = model_name

    def predict(self, names):
        X = self.vectorizer.transform(names)

        # Predict genders and probabilities
        genders = self.model.predict(X)
        probas = self.model.predict_proba(X)

        # Transform result
        result = []
        for index, name in enumerate(names):
            gender, proba = genders[index], probas[index]
            result.append({
                'name': name,
                'gender': 'male' if gender == Gender.MALE.value else 'female',
                'accuracy': proba[gender],
                'model_name': self.model_name
            })

        return result
