import { Utterance } from "./utterance";
import { LabelClassification } from "./label-classification";

/**
 * Represents the training dataset.
 * 
 * @author Eduardo Nascimento
 */
export class TrainingSet {

    
    /**
     * Array of utterances in training dataset.
     */
    utterances : Utterance[];

    /**
     * Total number of utterances in training dataset.
     */
    numberOfSamples : number;

    /**
     * Constructor.
     *
     * @param utterances the array of utterances in training dataset
     * @param numberOfSamples total number of utterances in training dataset
     */
    constructor(utterances : Utterance[], numberOfSamples : number) {
        this.utterances = utterances;
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
            trainingSet.utterances,
            trainingSet.numberOfSamples,
        );
    }

    /**
     * Returns an {@link Array} of new {@link TrainingSet} objects.
     *
     * @param TrainingSets an array of TrainingSet
     * @returns an array of new TrainingSet
     */
    public static getTrainingSets(results: any[]): TrainingSet {
  
        const utteranceArray = new Array<Utterance>();

        results['data'].forEach((result) => {
            if (result !== null) {
                let label = new LabelClassification(result['label_classification']['name'], result['label_classification']['initials']);
                let utterance = new Utterance(result['code'], result['utterance'], label);
                utteranceArray.push(Utterance.getConversation(utterance));
            }
        });

        return new TrainingSet(utteranceArray, results['total']);
    }
}
