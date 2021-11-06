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

    # Init Logistic Regression predictor
    logistic_regression_model = load_model(
        path='models/logistic_regression.pkl')
    logistic_regression = Predictor(vectorizer=vectorizer, model=logistic_regression_model,
                                    model_name='Logistic Regression')

    # Init Decision Tree predictor
    decision_tree_model = load_model(path='models/decision_tree.pkl')
    decision_tree = Predictor(vectorizer=vectorizer,
                              model=decision_tree_model, model_name='Decision Tree')

    # Init KNN predictor
    knn_model = load_model(path='models/knn.pkl')
    knn = Predictor(vectorizer=vectorizer, model=knn_model, model_name='KNN')

    return [multinomial_nb, logistic_regression, decision_tree, knn]
