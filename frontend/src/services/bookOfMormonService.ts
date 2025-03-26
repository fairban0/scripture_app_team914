// bookOfMormonService.ts
const API_URL = "https://book-of-mormon-api.vercel.app";

export const getChapter = async (
  book: string,
  chapter: number,
  totalVerses: number
) => {
  try {
    // Fetch all verses in a chapter by making individual requests for each verse
    const versesPromises = [];
    for (let verse = 1; verse <= totalVerses; verse++) {
      versesPromises.push(
        fetch(`${API_URL}/${book.toLowerCase()}/${chapter}/${verse}`)
          .then((response) => response.json())
          .catch((error) => {
            throw new Error(`Failed to fetch verse ${verse}: ${error.message}`);
          })
      );
    }

    // Wait for all promises to resolve
    const verses = await Promise.all(versesPromises);

    return verses; // Return all verses as an array
  } catch (error) {
    throw new Error(`Failed to fetch chapter`);
  }
};
