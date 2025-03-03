const colors = [
    '#d4af37',  // Original Lannister gold
    '#e5c56c',  // Light parchment gold
    '#b08d2b',  // Aged dragon gold
    '#d4b837',  // Sunlit gold
    '#d4a637',  // Autumn harvest gold
    '#f0e0a8',  // Moonlit silk
    '#8a7d4d',  // Dornish sand
    '#cd7f32',  // Essosi bronze
    '#d4c237',  // Golden crown
    '#9c8d4a',  // Mossy vault
    '#c5a642',  // Honeyed mead
    '#a89858',  // Weirwood ash
    '#ffe08c'   // Valyrian steel
];

const colorIndex = Math.floor(Math.random() * colors.length);
    document.documentElement.style.setProperty(
        '--main-color', 
        colors[colorIndex]
    );
    console.log(colors[colorIndex])

async function getCharacterData() {
    try {
        // Character data with images
        const charactersResponse = await fetch('https://thronesapi.com/api/v2/Characters/');
        const characters = await charactersResponse.json();
        console.log(characters.fullName);

        // Get random quote
        const quoteResponse = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
        const quoteData = await quoteResponse.json();

        // Match the APIs data
        const matchingCharacter = characters.find(char => 
            char.fullName === quoteData.character.name);
        const quote = quoteData.sentence;
        const name = quoteData.character.name
        const house = quoteData.character.house.name || "Unknown House";
        const image = matchingCharacter?.imageUrl || "fallback.jpg"

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
