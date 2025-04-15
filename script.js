function analyzeSentence(sentence) {
    let charCount = 0;
    let wordCount = 0;
    let vowelCount = 0;
    const vowels = "aeiouAEIOU";
  
    let inWord = false;
  
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
  
      if (char === '.') {
        break; // stop at the final period
      }
  
      charCount++;
  
      if (vowels.includes(char)) {
        vowelCount++;
      }
  
      if (char !== ' ' && !inWord) {
        inWord = true;
        wordCount++;
      } else if (char === ' ') {
        inWord = false;
      }
    }
  
    console.log("Length of sentence (excluding '.'): " + charCount);
    console.log("Number of words: " + wordCount);
    console.log("Number of vowels: " + vowelCount);
  }
  
  // Example usage:
  const sentence = "This is a test sentence.";
  analyzeSentence(sentence);
  