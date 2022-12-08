
from models.TrainingSet import TrainingSet
from models.Utterance import Utterance
from models.LabelClassification import LabelClassification
import core.RDFLibGenerate as RDFLibGenerate

'''
Provides the dataset for trainning.

@author Eduardo Nascimento
'''
class DatasetGenerateService:
    
    def __init__(self, number_of_samples):
        self.training_set = TrainingSet(number_of_samples)

    def run(self):
        self.training_set = RDFLibGenerate.createTrainSet(self.training_set.number_of_samples)
        return self.training_set.get_result()
    
    def runTest(self):
        self.generateDataToTest()  
        return self.training_set.get_result()
    
    def generateDataToTest(self):
        
        dictUtterancesTest = {0: Utterance(1.1, 'What animals are on the verge of extinction?', LabelClassification('PREVIOUS TOPIC', 'PT')),
                              1: Utterance(1.2, 'Show me typical animals from Brazil.', LabelClassification('SELF EXPLANATORY', 'SE')),
                              2: Utterance(1.3, 'What is your capital?', LabelClassification('FIRST TOPIC', 'FT')),
                              3: Utterance(1.4, 'Where is Russian?', LabelClassification('SELF EXPLANATORY', 'SE'))
                            }
        for i in range(0, self.training_set.number_of_samples):
            key =  i % 4
            self.training_set.add(dictUtterancesTest[key])
        
