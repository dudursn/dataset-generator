import { LabelClassification } from "./label-classification";

/**
 * Represents the conversation of a training dataset.
 */
export class Conversation {
    /**
     * Property identifier of the conversation.
     */
    code : string;

    /**
     * Question of the conversation.
     */
    conversationStr : string;

    /**
     *  Label classification for a conversation.
     */
    labelClassification : LabelClassification;

    /**
     * Constructor.
     *
     * @param code the property identifier of the conversation
     * @param conversationStr the question of the conversation
     * @param labelClassification the label classification for a conversation
     */
    constructor(code : string, conversationStr : string, labelClassification : LabelClassification) {
        this.code = code;
        this.conversationStr = conversationStr;
        this.labelClassification = labelClassification;
    }

    /**
     * Returns a new {@link Conversation} object.
     *
     * @param Conversation a Conversation
     * @returns a new Conversation
     */
    public static getConversation(conversation: Conversation): Conversation {
        return new Conversation(
            conversation.code,
            conversation.conversationStr,
            conversation.labelClassification,
        );
    }
}
