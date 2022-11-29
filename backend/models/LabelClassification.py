
class LabelClassification:
    
    def __init__(self, name, initials):
        self.name = name
        self.initials = initials  
    
    
    def __repr__(self):
        return '<LabelClassification - initials: %r, name: %r>' % (self.name, self.initials)
    
    def __str__(self):
        return '<LabelClassification - initials: %r, name: %r>' % (self.name, self.initials)
    
    def __dict__(self):
        return {'name': self.name, 'initials': self.initials}
    
    def __eq__(self, other):
        return self.name  == other.name and self.initials == other.initials