export const getDictionary = async (locale: string) => {
  try {
    const dictionary = await import(`../content/${locale}.json`)
    return dictionary.default
  } catch (error) {
    // ಒಂದು ವೇಳೆ ಫೈಲ್ ಸಿಗದಿದ್ದರೆ ಡೀಫಾಲ್ಟ್ ಆಗಿ ಕನ್ನಡ ತೋರಿಸು
    const fallback = await import(`../content/kn.json`)
    return fallback.default
  }
}