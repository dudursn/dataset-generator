# save this as app.py
from flask import Flask, jsonify
from services.DatasetGenerateService import DatasetGenerateService
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
    g = DatasetGenerateService(number_of_samples)
    result = g.run()
    return jsonify(result)