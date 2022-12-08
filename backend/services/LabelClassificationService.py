from models.LabelClassification import LabelClassification

'''
Provides the labels classifications of the utterances.

@author Eduardo Nascimento
'''
class LabelClassificationService:
    
    def __init__(self):
        self.SELF_EXPLANATORY = LabelClassification('SELF EXPLANATORY', 'SE')
        self.FIRST_TOPIC = LabelClassification('FIRST TOPIC', 'FT')
        self.PREVIOUS_TOPIC = LabelClassification('PREVIOUS TOPIC', 'PT')
    
    def run(self):
        return {'data': [self.SELF_EXPLANATORY.__dict__(), self.FIRST_TOPIC.__dict__(), self.PREVIOUS_TOPIC.__dict__()]}
        
