const bowlingData = [
    { ranking: 1, bowlerName: 'Bowler A', points: 200 },
    { ranking: 2, bowlerName: 'Bowler B', points: 180 },
    { ranking: 3, bowlerName: 'Bowler C', points: 160 },
    
];

function displayBowlingStats() {
    const bowlingTable = document.getElementById('bowlingTable');

    bowlingData.forEach((bowler) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${bowler.ranking}</td>
            <td>${bowler.bowlerName}</td>
            <td>${bowler.points}</td>
        `;
        bowlingTable.appendChild(row);
    });
}


window.onload = displayBowlingStats;
