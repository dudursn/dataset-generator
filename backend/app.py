# save this as app.py
from flask import Flask, jsonify
from generate import Generate

app = Flask(__name__)

app.debug = True

@app.route("/")
def hello():
    return "Hello, World!"

@app.route("/generate/<int:number_of_samples>")
def generate_dataset(number_of_samples):
    # generate a dataset with number_of_samples
    g = Generate(number_of_samples)
    result = g.run()
    return result