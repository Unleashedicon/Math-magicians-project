import { useEffect, useState } from 'react';

export default function Quotes() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchQuote = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': 'OV7MQKHUfM/RuZREHNJiAA==hUutc7dVKW0lsKO9',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch the quote.');
        }

        const data = await response.json();

        if (isMounted) {
          const { quote } = data[0];
          setQuote(quote);
          setError(false);
        }
      } catch (error) {
        setError(true);
      }

      setIsLoading(false);
    };

    fetchQuote();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="quote">
      {isLoading ? 'Please wait, we are fetching quotes...' : ''}

      {!error ? quote : 'Error occurred while fetching data'}
    </div>
  );
}
