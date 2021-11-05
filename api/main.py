from flask import Flask

from app import setup_app
from predictors import load_predictors

# Load predictors from models
predictors = load_predictors()

# Setup API server
app = Flask(__name__)
setup_app(app, predictors)
