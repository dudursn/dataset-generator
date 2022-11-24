
/**
 * Represents the label classification for a conversation.
 */
export class LabelClassification {
    /**
     * Represents the label lassification's name.
     */
    name : string;
    /**
     * Represents the label lassification's initials.
     */
    initials : string;

    /**
     * Constructor.
     *
     * @param name the label lassification's name
     * @param initials the label lassification's initials
     */
    constructor(name : string, initials : string) {
        this.name = name;
        this.initials = initials;
    }

    /**
     * Returns a new {@link LabelClassification} object.
     *
     * @param labelClassification a LabelClassification
     * @returns a new LabelClassification
     */
    public static getLabelClassification(labelClassification: LabelClassification): LabelClassification {
        return new LabelClassification(
            labelClassification.name,
            labelClassification.initials,
        );
    }


}
