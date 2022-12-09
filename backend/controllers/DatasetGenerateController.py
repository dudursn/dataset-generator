from flask import jsonify
from services.DatasetGenerateService import DatasetGenerateService

class DatasetGenerateController:
    def __init__(self, number_samples):
        self.service = DatasetGenerateService(number_samples)
        
    def generate(self):
        return jsonify(self.service.run())