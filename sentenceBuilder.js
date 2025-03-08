let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",

    buildSentence() {
        return this.subject && this.verb && this.object 
            ? `${this.subject} ${this.verb} ${this.object}`
            : "Incomplete sentence";
    },

    updateProperty(property, value) {
        if (Object.keys(this).includes(property)) {
            this[property] = value;
        } else {
            console.log("Invalid property");
        }
    }
};

console.log(sentenceBuilder.buildSentence());

sentenceBuilder.updateProperty("verb", "am learning");
console.log(sentenceBuilder.buildSentence());

sentenceBuilder.updateProperty("subject", "The cat");
console.log(sentenceBuilder.buildSentence());

sentenceBuilder.updateProperty("mood", "happy");

sentenceBuilder.updateProperty("verb", "");
console.log(sentenceBuilder.buildSentence());
