import { Conversation } from "./conversation";

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
    public static getTrainingSets(TrainingSets: TrainingSet[]): Array<TrainingSet> {
        const trainingSetArray = new Array<TrainingSet>();

        TrainingSets.forEach((trainingSet) => {
        if (trainingSet !== null) {
            trainingSetArray.push(TrainingSet.getTrainingSet(trainingSet));
        }
        });

        return trainingSetArray;
    }
}
