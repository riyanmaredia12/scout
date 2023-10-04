function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'Rankings,TEAMS,Owners,POINTS\n1,Prosperous Legends ,Hello1,10\n2,Elegant Eleven ,Hello2,20\n3,Koko x1,Hello3,30\n4,World 11,Hello4,40\n5,Dream 11,Hello5,50\n6,World best xl,Hello6,60\n7,Sami falcons ,Hello7,70\n8,Mighty lions,Hello8,80\n9,Chilka11 ,Hello9,90\n10,Balig Gladiators ,Hello10,100\n11,Aahil\'s XI,Hello11,110\n12,ALLIES,Hello12,120\n13,Rameez_raja11,Hello13,130\n14,Wizards Of Wickets ,Hello14,140\n15,Ali 11,Hello15,150\n16,The Pi - Guys,Hello16,160\n17,Wolf XI,Hello17,170\n18,GOALDIGGERS 11,Hello18,180\n19,Velocity XI,Hello19,190\n20,xD XI,Hello20,200\n21,Hit and Run XI,Hello21,210\n22,KhowajaX11,Hello22,220\n23,Elite Warriors ,Hello23,230';

const array = csvToArray(csvString);
array.reverse()
array.pop()
array.reverse()
console.log(array);


function displayTeams() {
    const resultTable = document.getElementById('resultTable');

    array.forEach((team) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${team[0]}</td>
            <td>${team[1]}</td>
            <td>${team[2]}</td>
            <td>${team[3]}</td>
        `;
        resultTable.appendChild(row);
    });
}

window.onload = displayTeams;

document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    body.classList.add("animate");
});

