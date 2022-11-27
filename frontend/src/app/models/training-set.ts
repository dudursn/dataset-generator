import { Conversation } from "./conversation";
import { LabelClassification } from "./label-classification";

/**
 * Represents the training dataset.
 */
export class TrainingSet {

    
    /**
     * Array of conversations in training dataset.
     */
    conversations : Conversation[];

    /**
     * Total number of conversations in training dataset.
     */
    numberOfSamples : number;

    /**
     * Constructor.
     *
     * @param conversations the array of conversations in training dataset
     * @param numberOfSamples total number of conversations in training dataset
     */
    constructor(conversations : Conversation[], numberOfSamples : number) {
        this.conversations = conversations;
        this.numberOfSamples = numberOfSamples;
    }

    /**
     * Returns a new {@link TrainingSet} object.
     *
     * @param TrainingSet a TrainingSet
     * @returns a new TrainingSet
     */
    public static getTrainingSet(trainingSet: TrainingSet): TrainingSet {
        return new TrainingSet(
            trainingSet.conversations,
            trainingSet.numberOfSamples,
        );
    }

    /**
     * Returns an {@link Array} of new {@link TrainingSet} objects.
     *
     * @param TrainingSets an array of TrainingSet
     * @returns an array of new TrainingSet
     */
    public static getTrainingSets(conversations: Conversation[]): TrainingSet {
  
        const conversationArray = new Array<Conversation>();

        conversations.forEach((trainingSet) => {
            if (trainingSet !== null) {
                let label = new LabelClassification(trainingSet['label_classification']['name'], trainingSet['label_classification']['initials']);
                let conversation = new Conversation(trainingSet['code'], trainingSet['conversation'], label);
                conversationArray.push(Conversation.getConversation(conversation));
            }
        });

        return new TrainingSet(conversationArray, conversationArray.length);
    }
}
