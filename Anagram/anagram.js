const anagrams = [
  "oz bilal tochberer",
  "it's razorbill beachcomber",
  "och robe tilblazer",
  "bib chorizo cellarmaster",
  "thor bble carizole",
  "zll borcht aberoie",
  "brzl orche atobile",
  "dame shelburne characterizing",
  "uber englishman characterized",
  "agnes rhumbline characterized",
  "rehab scrutinized charlemagne",
  "dreams zurich interchangeable",
  "bam hamster technocratic",
  "mechatronic masterbatch",
  "bam ratchet mechatronics",
];

function isAnagramInArray(anagram, arr) {
  // removing white spaces and sorting in alphabetical order, then checking if its equal to the anagram
  let anagramArray = [];
  sortedAnagram = anagram.toLowerCase().split("").sort().join("");
  console.log(sortedAnagram);
  for (let i = 0; i < arr.length; i++) {
    currentWord = arr[i].toLowerCase().split("").sort().join("");
    if (sortedAnagram === currentWord) {
      anagramArray.push(arr[i]);
    }
  }
  console.log(anagramArray);
}

console.log(isAnagramInArray("Bob Ziroll Teacher", anagrams));
