var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var bandsLength = bands.length;
var vegLength = vegetables.length;
var loopCount = bandsLength;

console.log ("bandsLength", bandsLength);
console.log ("vegLength", vegLength);
// The number of loops to perform (what if the array changes?)


if (vegLength > bandsLength) {
 loopCount = vegLength;
}

console.log ("loopCount:", loopCount);

var bandElement = document.getElementById("boy-bands");
var vegElement = document.getElementById("vegetables");

for (var i = 0; i < loopCount; i += 1) {
	console.log("i:", i);
	console.log("adding" + bands[i] + " to " + bandElement);
	console.log("adding" + vegetables[i] + " to " + bandElement);

	bandElement.innerHTML += "<div>" + bands[i] + "</div>";
	vegElement.innerHTML += "<div>" + vegetables[i] + "</div>";

}
