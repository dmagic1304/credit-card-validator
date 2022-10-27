Describe: vowelCounter();

Test: "It is not an empty string of numbers."
Code: ;
Expected Output: 0

Test: "Values entered are all numbers."
Code: ;
Expected Output: 0

Test: "Multiply every second number by 2."
Code: vowelCounter("A");
Expected Output: 1

Test: "Check if second number multiplied by two is now a 2 digit number."
Code: vowelCounter("cat");
Expected Output: 1

Test: "If second number multiplied by two is a 2 digit returns true, then add those two digits together."
Code: vowelCounter("cater");
Expected Output: 2

Test: "It recognizes vowels in a multiple-word sentence."
Code: vowelCounter("cats catered the event");
Expected Output: 7

Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Code: vowelCounter("CATS CATERED THE EVENT");
Expected Output: 7

Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Code: vowelCounter("CaTS CATEReD ThE EveNT");
Expected Output: 7