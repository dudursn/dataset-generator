from flask import Flask, jsonify
from controllers.DatasetGenerateController import DatasetGenerateController
from controllers.LabelClassificationController import LabelClassificationController
import flask
from flask_cors import CORS

app = Flask('dataset_generator')
CORS(app)

@app.route("/")
def hello():
    return f'Hello, World! - This is application is running with <b>Flask Version: %s</b>' % flask.__version__

@app.route("/generate")
@app.route("/generate/<int:number_of_samples>")
def generate_dataset(number_of_samples=5):
    # generate a dataset with number of samples
    if number_of_samples > 1000:
        number_of_samples = 1000
    controller = DatasetGenerateController(number_of_samples)
    result = controller.generate()
    return jsonify(result)

@app.route("/labels")
def get_labels_classifications():
    #get all labels
    controller = LabelClassificationController()
    result = controller.get_labels_classifications()
    return jsonify(result)