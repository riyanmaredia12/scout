function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,hyakkimaru11,Aly Shah Nizar,470\n2,Wolf XI,Sarfaraz S. Vadsariya,466\n3,Armaan XI,Armaan Punjwani,432\n4,Titans xl,Shafeen Aslam,404\n5,Liverpool,Ezaan Sikander,360\n6,Wizards Of Wickets ,Raheen Ikram shah,355\n7,Elite Warriors ,Asad,305\n7,321 pillay,Aariz Aziz,305\n9,W-11,Ubaid Ali,270\n10,UK X1,Nadeem,253\n11,Maaz 11,Maaz Khalid,236\n12,Royal Rajans,Imaad Amyn Rajan,232\n13,Trend Changers,Shahnil Iqbal,230\n14,Azzy 11,Azim Ali,216\n15,All Stars,Aashir Rahim,215\n15,Hayat,Moiz Hayat,215\n17,Best eleven xl,Shafeen,213\n18,Hit and Run XI,Shahzad Vadsariya,209\n18,Noble Rajans,Muneer Didarali Rajan,209\n20,Meerayy Underdogs,Sameer,206\n21,CricFlicks XI,Aman Hassan Vadsariya,204\n22,444,Shazeen Sherzad,184\n23,Elegant Eleven ,Saima Nadir,181\n23,Dream 11,Shaheer Ahmed,181\n23,ALLIES,Nausher Rahim,181\n26, Fierce Fighters,Navroz Vadsaria,158\n27,Super xl,Shafeen,137\n28,Aahil\'s XI,Aahil Aziz,124\n28,Ali 11,Ali,124\n30,GOALDIGGERS 11,Ali Shah Kamruddin,107\n31,World best xl,Shaf,97\n32,The Pi - Guys,Moiz Ali,96\n33,Maredia X1,Noman Vadsariya,79\n34,Pana Tipu,Riyan maredia,71\n35,Panda Warriors,Shahnil Iqbal,68\n36,Sami falcons ,Sameer Noorddin,62\n36,Mighty lions,Ali nawaz,62\n36,Chilka11 ,Karim Mehboob,62\n36,4 cut Atmaram,Riyan maredia,62\n40,SMS legends,Salman Mukhtiar,59\n41,Team Darky,Sharoon Sherzad,57\n42,Prosperous Legends ,Affan Nadir,56\n43,Dororo11,Aly Shah Nizar,42\n43,Shaheens X1,Haris Hanif Dinani,42\n43,Scared Shotless,hassan kirmani,42\n46,All around the world 11,Ayaan kashif,36\n46,Amnn Shaheens,Amnn Ajaz,36\n48,The Winning Team,Sarim Ali Meghani,34\n48,Star boys ,shaayaan shmasuddin,34\n48,The Thundering Titans,Arsh Maknojia,34\n48,Ayyan fighters,Ayyan Noushad Solanki,34\n48,Marco polo culb,Hubb-i-Ali,34\n53,Koko x1,Shafeen aslam,24\n53,Maxi 11,Azim Ali,24\n55,Jetha kay jhabaz,Aadil nasir,20\n55,SVxKaku11,Karim Ismail,20\n57,Rameez_raja11,Mirsab,17\n58,xD XI,Naveed Hakim,13\n59,SAROSH XI,Sarosh Sher Ali,11\n60,The Elites,Navroz Vadsaria,8\n60,AJ XI,Ammad Jamil,8\n62,Velocity XI,Sahil Naseer,6\n63,The real OG,Sahra Iqbal,2\n63,Lion xl,Shafeen,2\n65,World 11,Ali Mohammed,0\n65,Balig Gladiators ,Balig Barkat Ali,0\n65,KhowajaX11,Alnoor nizar,0\n65,Balig Xl,Balig Barkat Ali,0\n65,Gaitonde 11,Maisum,0\n70,Pinocchios,Sarfaraz S. Vadsariya,-3'

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

