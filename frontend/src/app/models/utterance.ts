import { LabelClassification } from "./label-classification";

/**
 * Represents the utterance of a training dataset.
 */
export class Utterance {
    /**
     * Property identifier of the utterance.
     */
    code : string;

    /**
     * Question of the utterance.
     */
    utterance : string;

    /**
     *  Label classification for a utterance.
     */
    labelClassification : LabelClassification;

    /**
     * Constructor.
     *
     * @param code the property identifier of the utterance
     * @param utterance the utterance of the utterance
     * @param labelClassification the label classification for a utterance
     */
    constructor(code : string = "", utterance : string = "", labelClassification : LabelClassification = new LabelClassification()) {
        this.code = code;
        this.utterance = utterance;
        this.labelClassification = labelClassification;
    }

    /**
     * Returns a new {@link Utterance} object.
     *
     * @param Conversation a Conversation
     * @returns a new Conversation
     */
    public static getConversation(utterance: Utterance): Utterance {
        return new Utterance(
            utterance.code,
            utterance.utterance,
            utterance.labelClassification,
        );
    }
}
