// ScriptureSearch.tsx
import React, { useState } from "react";
import { getChapter } from "../services/bookOfMormonService"; // Import the service

const ScriptureSearch: React.FC = () => {
  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState<number>(1);
  const [totalVerses, setTotalVerses] = useState<number>(20); // Example: default total verses for chapter 1 of 1 Nephi
  const [scripture, setScripture] = useState<any[]>([]); // Array to hold all verses
  const [error, setError] = useState<string | null>(null);

  // Function to handle fetching scripture
  const handleFetchChapter = async () => {
    try {
      const verses = await getChapter(book, chapter, totalVerses);
      setScripture(verses);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter book (e.g., 1nephi)"
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter chapter number"
        value={chapter}
        onChange={(e) => setChapter(Number(e.target.value))}
      />
      <button onClick={handleFetchChapter}>Get Chapter</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        {scripture.length > 0 && (
          <div>
            {scripture.map((verse, index) => (
              <div key={index}>
                <p>
                  <strong>{verse.reference}</strong>: {verse.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScriptureSearch;
