// Extracted JavaScript from index.html
const adNetworks = [
    {
        name: "Adsterra",
        code: "ADST",
        description: "Premium ad network with high-paying ads",
        frequency: 2 // Show every 2nd ad
    },
    {
        name: "Monetag",
        code: "MNTG",
        description: "High-converting video ads",
        frequency: 3 // Show every 3rd ad
    },
    {
        name: "Cointzilla",
        code: "CNTZ",
        description: "Crypto-focused ad network",
        frequency: 1 // Show every ad
    }
];

let currentAdNetworkIndex = 0;
let adPlayCount = 0;
let adTimerInterval;
let currentGame = '';

console.log('JavaScript file loaded');