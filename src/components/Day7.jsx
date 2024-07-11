import React, { useEffect, useState } from 'react';

const Day7 = () => {
    //random quotes generator
    const [currentQuote, setCurrentQuote] = useState("The healthiest response to life is joy. - Deepak Chopra");

    const quotes = [
        "Life is a succession of lessons which must be lived to be understood. - Ralph Waldo Emerson",
        "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
        "You only live once, but if you do it right, once is enough. - Mae West",
        "Go confidently in the direction of your dreams! Live the life you've imagined. - Henry David Thoreau",
        "Good friends, good books, and a sleepy conscience: this is the ideal life. - Mark Twain",
        "Life would be tragic if it weren't funny. - Stephen Hawking",
        "Live in the sunshine, swim the sea, drink the wild air. - Ralph Waldo Emerson",
        "The best way to predict your future is to create it. - Abraham Lincoln",
        "You do not find the happy life. You make it. - Camilla Eyring Kimball",
        "The most wasted of days is one without laughter. - E. E. Cummings",
        "Life is what we make it, always has been, always will be. - Grandma Moses",
        "Keep smiling, because life is a beautiful thing and there's so much to smile about. - Marilyn Monroe",
        "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
        "Love the life you live. Live the life you love. - Bob Marley",
        "Life is either a daring adventure or nothing at all. - Helen Keller",
        "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The only impossible journey is the one you never begin. - Tony Robbins",
        "Go confidently in the direction of your dreams! Live the life you've imagined. - Henry David Thoreau",
        "Live in the sunshine, swim the sea, drink the wild air. - Ralph Waldo Emerson",
        "The best way to predict your future is to create it. - Abraham Lincoln",
        "You do not find the happy life. You make it. - Camilla Eyring Kimball",
        "The most wasted of days is one without laughter. - E. E. Cummings",
        "Life is what we make it, always has been, always will be. - Grandma Moses",
        "The healthiest response to life is joy. - Deepak Chopra",
        "Keep smiling, because life is a beautiful thing and there's so much to smile about. - Marilyn Monroe",
        "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
        "Love the life you live. Live the life you love. - Bob Marley",
        "Life is either a daring adventure or nothing at all. - Helen Keller",
        "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The only impossible journey is the one you never begin. - Tony Robbins",
        "Go confidently in the direction of your dreams! Live the life you've imagined. - Henry David Thoreau",
        "Live in the sunshine, swim the sea, drink the wild air. - Ralph Waldo Emerson",
        "The best way to predict your future is to create it. - Abraham Lincoln",
        "You do not find the happy life. You make it. - Camilla Eyring Kimball",
        "The most wasted of days is one without laughter. - E. E. Cummings",
        "Life is what we make it, always has been, always will be. - Grandma Moses",
        "Keep smiling, because life is a beautiful thing and there's so much to smile about. - Marilyn Monroe",
        "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
        "Love the life you live. Live the life you love. - Bob Marley",
        "Life is either a daring adventure or nothing at all. - Helen Keller",
        "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The only impossible journey is the one you never begin. - Tony Robbins",
        "Go confidently in the direction of your dreams! Live the life you've imagined. - Henry David Thoreau",
        "Live in the sunshine, swim the sea, drink the wild air. - Ralph Waldo Emerson",
        "The best way to predict your future is to create it. - Abraham Lincoln",
        "You do not find the happy life. You make it. - Camilla Eyring Kimball",
        "The most wasted of days is one without laughter. - E. E. Cummings",
        "Life is what we make it, always has been, always will be. - Grandma Moses",
    ];
    useEffect(() => {
        const autoQuote = setTimeout(() => {
            setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)])

        },5000)

        return () => {
            clearTimeout(autoQuote)
        }
    }, [currentQuote])
    const handleNextQuote = () => {
        let newQuote = currentQuote;
        while (newQuote === currentQuote) {
            newQuote = quotes[Math.floor(Math.random() * quotes.length)];
        }

        setCurrentQuote(newQuote);
    };



    return (
        <div>
            <h3>{currentQuote}</h3>
            <button onClick={handleNextQuote}>Next Quote</button>
        </div>
    );
};

export default Day7;
