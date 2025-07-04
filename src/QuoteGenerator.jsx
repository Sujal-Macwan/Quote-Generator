import React, {useState} from 'react'

function QuoteGenerator(){

    const [currentQuote, setCurrentQuote] = useState("Click Generate!");
    const [loading, setLoading] = useState(false);

    async function generateQuote(){
            setLoading(true);
            try{
                const response = await fetch("https://zenquotes.io/api/random");
                const data = await response.json();
                setCurrentQuote({
                    text: data[0].q,
                    author: data[0].a
                });
            }catch(error){
                console.error("Error fetching quote:", error);
                setCurrentQuote({
                    text: "Failed to fetch quote",
                    author:""
                });
            }
            setLoading(false);
        }

    return(
        <div className="quote-box">
            <div className = "quote-container">
                <p className = "quote-text">{currentQuote === "Click Generate!" ? "Click Generate!" : currentQuote.text}</p>
                <p className="quote-author">{currentQuote === "Click Generate!" ? "" :"-"}{currentQuote.author}</p>
            </div> <br />
            <button onClick = {generateQuote} className="button">Generate</button>
            {loading ? "Loading..." : ""}
        </div>
    );

}
export default QuoteGenerator