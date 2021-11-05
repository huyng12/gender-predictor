from flask import Flask
from handlers.health_check import handle_health_check
from handlers.predict import handle_predict
from handlers.errors.not_found import handle_not_found
from handlers.errors.method_not_allowed import handle_method_not_allow

app = Flask(__name__)

# Register app routes
app.add_url_rule('/', view_func=handle_health_check, methods=['GET'])
app.add_url_rule('/predict', view_func=handle_predict, methods=['POST'])

# Register error handlers
app.register_error_handler(404, handle_not_found)
app.register_error_handler(405, handle_method_not_allow)
