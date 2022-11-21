

class Conversation():
    
    def __init__(self, code, conversation, label_classification):
        self.code = code  
        self.conversation = conversation
        self.label_classification = label_classification
    
    
    def __repr__(self):
        return '<Conversation - code: %r, conversation: %r, label: %s>' % (self.code, self.conversation, self.label_classification.name)
    
    def __str__(self):
        return '<Conversation - code: %r, conversation: %r, label: %s>' % (self.code, self.conversation, self.label_classification.name)

    def __dict__(self):
        return {'code': self.code, 'conversation': self.conversation, 'label_classification': self.label_classification.__dict__()}