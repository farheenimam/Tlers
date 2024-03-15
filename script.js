function translateText(text, sourceLang, targetLang) {
  return new Promise((resolve, reject) => {
    setTimeout(() => 
    {
      if (text === "")
      {
        reject(new Error("Please enter text to translate."));
      } 
      else {
        const translatedTextContent = `This is a translated text example from ${sourceLang} to ${targetLang}.`;
        resolve(translatedTextContent);
      }
    }, 1000); // Simulate a 1-second delay (remove for real API calls)
  });
}

translateButton.addEventListener('click', async () => {
  const textToTranslate = textInput.value;
  const sourceLangCode = sourceLanguage.value;
  const targetLangCode = targetLanguage.value;

  try {
    const translatedTextContent = await translateText(textToTranslate, sourceLangCode, targetLangCode);
    translateText.textContent = translatedTextContent;
    errorMessage.textContent = ""; // Clear any previous error message
  } catch (error) {
    errorMessage.textContent = error.message; // Display error message
  }
});

// Parallax scrolling implementation (replace with your desired effect)
window.addEventListener('scroll', () => {
  const header = document.querySelector('.parallax-header');
  const scrollY = window.scrollY; // Get current scroll position

  // Adjust background image position based on scroll (replace with desired effect)
  header.style.transform = `translateY(${scrollY * 0.5}px)`;
});
