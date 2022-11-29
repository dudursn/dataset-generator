
/**
 * Represents the label classification for a utterance.
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
    constructor(name : string = "", initials : string = "") {
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

     /**
     * Returns a string name formatted for Label classification.
     */
    getLabelClassificationName(): string {
        return this.initials + " - " + this.name;
    }

    /**
     * Returns an {@link Array} of new {@link LabelClassification} objects.
     *
     * @param LabelClassifications an array of LabelClassification
     * @returns an array of new LabelClassification
     */
     public static getLabelClassifications(results: any[]): Array<LabelClassification> {
  
        const labelClassificationArray = new Array<LabelClassification>();

        results['data'].forEach((result) => {
            if (result !== null) {
                let label = new LabelClassification(result['name'], result['initials']);
                labelClassificationArray.push(label);
            }
        });

        return labelClassificationArray;
    }


}
