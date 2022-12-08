
'''
Represents a utterance.

@author Eduardo Nascimento
'''
class Utterance():
    
    def __init__(self, code, utterance, label_classification):
        self.code = code  
        self.utterance = utterance
        self.label_classification = label_classification
    
    
    def __repr__(self):
        return '<Utterance - code: %r, utterance: %r, label: %s>' % (self.code, self.utterance, self.label_classification.name)
    
    def __str__(self):
        return '<Utterance - code: %r, utterance: %r, label: %s>' % (self.code, self.utterance, self.label_classification.name)

    def __dict__(self):
        return {'code': self.code, 'utterance': self.utterance, 'label_classification': self.label_classification.__dict__()}