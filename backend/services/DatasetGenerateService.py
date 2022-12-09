from core.RDFLibGenerate import RDFLibGenerate

'''
Provides the dataset for trainning.

@author Eduardo Nascimento
'''
class DatasetGenerateService:
    
    def __init__(self, number_of_samples):
        self.number_of_samples = number_of_samples   
        self.rdflibGenerate = RDFLibGenerate()    

    def run(self):
        self.training_set = self.rdflibGenerate.createTrainSet(self.number_of_samples)
        return self.training_set.get_result()
    
        
