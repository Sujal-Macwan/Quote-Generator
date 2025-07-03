import React, {useState} from 'react'

function QuoteGenerator(){
    const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { text: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" }
];

    const [currentQuote, setCurrentQuote] = useState("Click Generate!");
    let [prevIndex, setPrevIndex] = useState(null);

    function generateQuote(){
        let quoteIndex;
       do{
            quoteIndex = Math.floor(Math.random() * quotes.length);
        }while(quoteIndex === prevIndex && quotes.length > 1);
        setPrevIndex(p => p = quoteIndex);
        setCurrentQuote(c => c = quotes[quoteIndex]);
    }

    return(
        <div className="quote-box">
            <div className = "quote-container">
                <p className = "quote-text">{currentQuote == "Click Generate!" ? "Click Generate!" : currentQuote.text}</p>
                <p className="quote-author">{currentQuote == "Click Generate!" ? "" :"-"}{currentQuote.author}</p>
            </div> <br />
            <button onClick = {generateQuote} className="button">Generate</button>
        </div>
    );

}
export default QuoteGenerator