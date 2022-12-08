
'''
Represents the dataset for trainning.

@author Eduardo Nascimento
'''
class TrainingSet:
    
    def __init__(self, number_of_samples):
        self.utterances = []
        self.number_of_samples = number_of_samples
    
    
    def add(self, utterance):
        self.utterances.append(utterance)
        
    def get_result(self):
        return self.__dict__()
    
    def __dict__(self):
        return {'data': [t.__dict__() for t in self.utterances], 'total': self.number_of_samples}
    