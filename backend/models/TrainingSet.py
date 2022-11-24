

class TrainingSet:
    
    def __init__(self, number_of_samples):
        self.conversations = []
        self.number_of_samples = number_of_samples
    
    
    def add(self, conversation):
        self.conversations.append(conversation)
        
    def get_result(self):
        return self.__dict__()
    
    def __dict__(self):
        return {'data': [t.__dict__() for t in self.conversations], 'total': self.number_of_samples}
    