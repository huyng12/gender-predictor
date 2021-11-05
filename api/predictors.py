import pandas as pd

from predictor.model import load_model
from predictor.predictor import Predictor
from predictor.vectorizer import init_vectorizer


def load_predictors():
    # Initialize vectorizer
    data = pd.read_csv('datasets/train.csv')
    vectorizer = init_vectorizer(data['Full_Names'])

    # Init Multinomial NB predictor
    multinomial_nb_model = load_model(path='models/multinomial_nb.pkl')
    multinomial_nb = Predictor(vectorizer=vectorizer, model=multinomial_nb_model,
                               model_name='Multinomial NB')

    return [multinomial_nb]
