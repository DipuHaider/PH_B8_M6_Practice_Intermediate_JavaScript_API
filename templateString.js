const myName = "Mehedi";
const age = 26;
const address = "Dhaka";

const sentence = "Naam " + myName + ". boyos " + age + "\n Bari " + address;
console.log(sentence);

const subject = ["bangla", "English", "math"];
const sentence1 = `Naam ${myName} boyos ${age}
 Bari ${address}
Subjects are with comma ${subject.map((subject) => subject)}
 Subjects are without comma ${subject.map((subject) => subject).join(" ")}
 `;
console.log(sentence1);
