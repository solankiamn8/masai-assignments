import React, { useEffect, useState } from 'react';

function QuoteGenerator() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error("Failed to fetch quote", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 30000); // Auto-refresh every 30s
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div style={styles.container}>
      <h2>Daily Quote Generator</h2>

      {loading ? (
        <div style={styles.spinner}>Loading...</div>
      ) : (
        quote && (
          <div style={styles.quoteBox}>
            <p style={styles.content}>“{quote.content}”</p>
            <p style={styles.author}>— {quote.author}</p>
          </div>
        )
      )}

      <button onClick={fetchQuote} style={styles.button}>
        Get New Quote
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
  },
  quoteBox: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    background: '#f9f9f9',
    maxWidth: '600px',
    margin: 'auto',
  },
  content: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
  },
  author: {
    marginTop: '10px',
    fontWeight: 'bold',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  spinner: {
    fontStyle: 'italic',
    color: 'gray',
  },
};

export default QuoteGenerator;
