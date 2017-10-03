function ClozeCard(fullText, partialText) {
	this.fullText = fullText;
	this.partialText = partialText;
	this.clozeQuestion = this.fullText.replace(this.partialText, "...");

}

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

console.log();



module.exports = ClozeCard;

