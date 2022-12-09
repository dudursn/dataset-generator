'''
Represents the label classification of the utterance.

@author Eduardo Nascimento
'''
class LabelClassification:
    
    def __init__(self, name, initials):
        self.name = name
        self.initials = initials  
    
    
    def __repr__(self):
        return '<LabelClassification - initials: %r, name: %r>' % (self.initials, self.name)
    
    def __str__(self):
        return '<LabelClassification - initials: %r, name: %r>' % (self.initials, self.name)
    
    def __dict__(self):
        return {'name': self.name, 'initials': self.initials}
    
    def __eq__(self, other):
        return self.name  == other.name and self.initials == other.initials