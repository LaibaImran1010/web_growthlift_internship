import { useState, useEffect } from "react";

function QuoteBox() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random")
      .then((res) => res.json())
      .then((data) => {
        // ZenQuotes returns an array: [{ q: "quote", a: "author" }]
        if (data && data[0]) {
          setQuote(`${data[0].q} — ${data[0].a}`);
        }
        setLoading(false);
      })
      .catch(() => {
        setQuote("Consistency is the key to success.");
        setLoading(false);
      });
  }, []); // Empty array means this runs only once when the component mounts

  return (
    <div style={{ margin: "20px 0", padding: "15px", border: "1px solid #6366F1", borderRadius: "8px" }}>
      <h3>Quote of the Day</h3>
      {loading ? <p>Loading quote...</p> : <p>"{quote}"</p>}
    </div>
  );
}

export default QuoteBox;