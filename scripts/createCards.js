const generatePdf = require("ccg-card-generator").default;
const cards = require("../cards.js");

generatePdf(cards.cards, {
	debug: true,
	style: "./styles/artifice.css",
	destination: "./cards.pdf",
}).catch((err) => {
	console.error(err);
	process.exit(1);
});