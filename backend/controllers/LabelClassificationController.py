from flask import jsonify
from services.LabelClassificationService import LabelClassificationService

class LabelClassificationController:
    def __init__(self):
        self.service = LabelClassificationService()
        
    def get_labels_classifications(self):
        return jsonify(self.service.run())