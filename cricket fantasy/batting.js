const battingData = [
    { ranking: 1, batsmanName: 'Batsman A', points: 200 },
    { ranking: 2, batsmanName: 'Batsman B', points: 180 },
    { ranking: 3, batsmanName: 'Batsman C', points: 160 },
    
];

function displayBattingStats() {
    const battingTable = document.getElementById('battingTable');

    battingData.forEach((batsman) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${batsman.ranking}</td>
            <td>${batsman.batsmanName}</td>
            <td>${batsman.points}</td>
        `;
        battingTable.appendChild(row);
    });
}

window.onload = displayBattingStats;
