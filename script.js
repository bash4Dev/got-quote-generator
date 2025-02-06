const quotes = [
    {
        text: "When you play the game of thrones, you win or you die.",
        author: "Cersei Lannister",
        house: "House Lannister",
        image: "cersei.jpg"
    },
    {
        text: "Winter is coming.",
        author: "Eddard Stark",
        house: "House Stark",
        image: "ned.jpg"
    },
    {
        text: "A mind needs books like a sword needs a whetstone.",
        author: "Tyrion Lannister",
        house: "House Lannister",
        image: "tyrion.jpg"
    },
    {
        text: "The night is dark and full of terrors.",
        author: "Melisandre",
        house: "The Red Priestess",
        image: "melisandre.jpg"
    }
];

async function getCharacterData() {
    try {
        // Character data with images
        const charactersResponse = await fetch('https://thronesapi.com/api/v2/Characters/');
        const characters = await charactersResponse.json();

        // Get random quote
        const quoteResponse = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
        const quoteData = await quoteResponse.json();

        // Match the APIs data
        const matchingCharacter = characters.find(char => 
            char.fullName.toLowerCase() === quoteData.character.name.toLowerCase()
        );
        console.log(matchingCharacter);
        let quote = quoteData.sentence;
        console.log(quote)
        const name = quoteData.character.name
        console.log(name)
        const house = quoteData.character.house.name || "Unknown House";
        console.log(house)
        const image = matchingCharacter?.imageUrl || "fallback.jpg"
        console.log(image);

        // Update DOM
        document.getElementById('quote').textContent = quote;
        document.getElementById('authorImage').src = image;
        document.getElementById('authorName').textContent = name;
        document.getElementById('houseName').textContent = house;
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}
getCharacterData();


// function generateNewQuote() {
    // const randomIndex = Math.floor(Math.random() * quotes.length);
    // const quote = quotes[randomIndex];
    
    // document.getElementById('quote').textContent = `"${quote.text}"`;
    // document.getElementById('authorName').textContent = quote.author;
    // document.getElementById('houseName').textContent = quote.house;
    // document.getElementById('authorImage').src = quote.image;
    // document.getElementById('authorImage').alt = `${quote.author} Image`;

    // const colorIndex = Math.floor(Math.random() * colors.length);
    // document.documentElement.style.setProperty(
    //     '--main-color', 
    //     colors[colorIndex]
    // );
    // console.log(colors[colorIndex])

    // const colors = [
    //     '#d4af37', '#8b0000', '#0047ab', '#228B22', '#4B0082',
    //     '#B22222', '#2F4F4F', '#800080', '#D2691E', '#4682B4',
    //     '#008080', '#FFD700'
    // ];
    // const colors = [
    //     '#d4af37', // Original gold - maintains brand consistency
    //     '#8b0000', // Dark red - classic Westerosi color
    //     '#5a7d7a', // Muted teal - good contrast against dark
    //     '#c0aa70', // Aged parchment gold
    //     '#556b2f', // Olive green - earthy tone
    //     '#6f4e37', // Coffee brown - neutral accent
    //     '#b87333', // Copper - warm metallic
    //     '#4b0082', // Indigo - rich jewel tone
    //     '#daa520', // Goldenrod - brighter gold variation
    //     '#708090', // Slate gray - cool contrast
    //     '#800080', // Royal purple - Lannister-esque
    //     '#2f4f4f', // Dark slate gray - muted accent
    //     '#dc143c'  // Crimson - vibrant contrast
    // ];
    // const colors = [
    //     '#d4af37',  // Original Lannister gold
    //     '#e5c56c',  // Light parchment gold
    //     '#b08d2b',  // Aged dragon gold
    //     '#d4b837',  // Sunlit gold
    //     '#d4a637',  // Autumn harvest gold
    //     '#f0e0a8',  // Moonlit silk
    //     '#8a7d4d',  // Dornish sand
    //     '#cd7f32',  // Essosi bronze
    //     '#d4c237',  // Golden crown
    //     '#9c8d4a',  // Mossy vault
    //     '#c5a642',  // Honeyed mead
    //     '#a89858',  // Weirwood ash
    //     '#ffe08c'   // Valyrian steel
    // ];}

// function updateSocialLinks(quote, author, house) {
//     const text = `"${quote}" - ${author} of ${house}`;
//     const encodedText = encodeURIComponent(text);
//     const url = encodeURIComponent(window.location.href);
    
//     // Update Twitter
//     document.getElementById('twitterBtn').href = 
//         `https://twitter.com/intent/tweet?text=${encodedText}&hashtags=GameOfThrones,GoTQuotes&url=${url}`;
    
//     // Update Facebook
//     document.getElementById('facebookBtn').href = 
//         `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodedText}`;
    
//     // Update LinkedIn
//     document.getElementById('linkedinBtn').href = 
//         `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${encodedText}&summary=${encodedText}`;
    
//     // Update WhatsApp
//     document.getElementById('whatsappBtn').href = 
//         `https://api.whatsapp.com/send?text=${encodedText} ${url}`;
// }