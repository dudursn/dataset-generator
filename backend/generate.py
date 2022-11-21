
from models.TrainingSet import TrainingSet
from models.Conversation import Conversation
from models.LabelClassification import LabelClassification

class Generate:
    
    def __init__(self, number_of_samples):
        self.training_set = TrainingSet(number_of_samples)
        self.SELF_EXPLANATORY = LabelClassification('SELF_EXPLANATORY', 'SE')
        self.FIRST_TOPIC = LabelClassification('FIRST_TOPIC', 'FT')
        self.PREVIOUS_TOPIC = LabelClassification('PREVIOUS_TOPIC', 'PT')
        
        
        
    
    def run(self):

        for i in range(0, self.training_set.number_of_samples):
            if i% 2 == 0:
                self.training_set.add(Conversation(i, 'Hello, how are you?', self.SELF_EXPLANATORY))
            else:
                self.training_set.add(Conversation(i , 'I am fine, thank you.', self.FIRST_TOPIC))
                
        return self.training_set.get_result()
    
    
