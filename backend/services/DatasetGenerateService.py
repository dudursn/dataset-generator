
from models.TrainingSet import TrainingSet
from models.Utterance import Utterance
from models.LabelClassification import LabelClassification

class DatasetGenerateService:
    
    def __init__(self, number_of_samples):
        self.training_set = TrainingSet(number_of_samples)
        self.SELF_EXPLANATORY = LabelClassification('SELF EXPLANATORY', 'SE')
        self.FIRST_TOPIC = LabelClassification('FIRST TOPIC', 'FT')
        self.PREVIOUS_TOPIC = LabelClassification('PREVIOUS TOPIC', 'PT')
    
    def run(self):
        self.generateDataToTest()  
        return self.training_set.get_result()
    
    def generateDataToTest(self):
        
        dictUtterancesTest = {0: Utterance(1.1, 'What animals are on the verge of extinction?', self.PREVIOUS_TOPIC),
                              1: Utterance(1.2, 'Show me typical animals from Brazil.', self.SELF_EXPLANATORY),
                              2: Utterance(1.3, 'What is your capital?', self.FIRST_TOPIC),
                              3: Utterance(1.4, 'Where is Russian?', self.SELF_EXPLANATORY)
                            }
        for i in range(0, self.training_set.number_of_samples):
            key =  i % 4
            self.training_set.add(dictUtterancesTest[key])
        
