// Sample data baki repolace karna hoga manually
const teamData = [
    { ranking: 1, teamName: 'Team A', points: 20 },
    { ranking: 2, teamName: 'Team B', points: 18 },
    { ranking: 3, teamName: 'Team C', points: 16 },
    // Add more teams as needed
];

// yeh bsdka function hai yeh hata to fantasy ki gaand phati
function displayTeams() {
    const resultTable = document.getElementById('resultTable');

    teamData.forEach((team) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${team.ranking}</td>
            <td>${team.teamName}</td>
            <td>${team.points}</td>
        `;
        resultTable.appendChild(row);
    });
}

// yahan se function ko call karlena baat karli hai display karlega yeh
window.onload = displayTeams;

document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    body.classList.add("animate");
});