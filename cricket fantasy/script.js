// Sample data baki replace karna hoga manually
const teamData = [
    { ranking: 1, teamName: 'Team A', owner: 'Owner A', points: 20 },
    { ranking: 2, teamName: 'Team B', owner: 'Owner B', points: 18 },
    { ranking: 3, teamName: 'Team C', owner: 'Owner C', points: 16 },
    { ranking: 4, teamName: 'Team D', owner: 'Owner D', points: 14 },
    { ranking: 5, teamName: 'Team E', owner: 'Owner E', points: 12 },
    // Add more teams as needed
];


function displayTeams() {
    const resultTable = document.getElementById('resultTable');

    teamData.forEach((team) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${team.ranking}</td>
            <td>${team.teamName}</td>
            <td>${team.owner}</td> 
            <td>${team.points}</td>
        `;
        resultTable.appendChild(row);
    });
}

window.onload = displayTeams;

document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    body.classList.add("animate");
});

