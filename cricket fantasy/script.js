function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Best eleven xl,Shafeen Aslam,922\n2,Liverpool,Ezaan Sikander,895\n3, Fierce Fighters,Navroz Vadsaria,833\n4,Wizards Of Wickets ,Raheen Ikram shah,787\n5,Wolf XI,Sarfaraz S. Vadsariya,777\n6,444,Shazeen Sherzad,744\n7,UK X1,Nadeem,728\n8,Super xl,Shafeen,726\n9,Elite Warriors ,Asad,700\n10,Star boys ,shaayaan shmasuddin,699\n11,Dream 11,Shaheer Ahmed,692\n12,SMS legends,Salman Mukhtiar,687\n13,Trend Changers,Shahnil Iqbal,678\n14,KhowajaX11,Alnoor nizar,656\n15,All Stars,Aashir Rahim,644\n16,Armaan XI,Armaan Punjwani,641\n17,Azzy 11,Azim Ali,635\n18,The Winning Team,Sarim Ali Meghani,633\n19,Hit and Run XI,Shahzad Vadsariya,623\n20,hyakkimaru11,Aly Shah Nizar,619\n21,Maaz 11,Maaz Khalid,616\n22,Elegant Eleven ,Saima Nadir,611\n23,Titans xl,Shafeen Aslam,610\n24,The Thundering Titans,Arsh Maknojia,598\n25,321 pillay,Aariz Aziz,587\n26,Hayat,Moiz Hayat,573\n27,CA Ke Balley,Noman Vadsariya,568\n28,Balig Xl,Balig Barkat Ali,563\n28,W-11,Ubaid Ali,563\n30,Velocity XI,Sahil Naseer,552\n31,Jetha kay jhabaz,Aadil nasir,549\n32,4 cut Atmaram,Riyan maredia,546\n33,CricFlicks XI,Aman Hassan Vadsariya,534\n34,Panda Warriors,Shahnil Iqbal,531\n35,Noble Rajans,Muneer Didarali Rajan,530\n36,Chilka11 ,Karim Mehboob,523\n37,Royal Rajans,Imaad Amyn Rajan,518\n38,Rameez_raja11,Mirsab Malik,514\n39,Meerayy Underdogs,Sameer Vadsariya,509\n40,ALLIES,Nausher Rahim,508\n41,Pana Tipu,Riyan maredia,493\n42,xD XI,Naveed Hakim,486\n43,Aahil\'s XI,Aahil Aziz,468\n44,Lion xl,Shafeen Aslam,467\n45,Gaitonde 11,Maisum,453\n46,SVxKaku11,Karim Ismail,449\n47,Ali 11,Ali Muhammad Murad,439\n48,World best xl,Shafeen Aslam,433\n49,Koko x1,Shafeen aslam,428\n50,Marco polo culb,Hubb-i-Ali,423\n51,Scared Shotless,hassan kirmani,418\n52,Mighty lions,Ali nawaz,409\n53,Ayyan fighters,Ayyan Noushad Solanki,391\n54,Prosperous Legends ,Affan Nadir,384\n55,The real OG,Sahra Iqbal,372\n56,Dororo11,Aly Shah Nizar,371\n57,Pinocchios,Sarfaraz S. Vadsariya,370\n58,AJ XI,Ammad Jamil,349\n59,Balig Gladiators ,Balig Barkat Ali,346\n60,All around the world 11,Ayaan kashif,340\n61,World 11,Ali Mohammed,339\n62,Team Darky,Sharoon Sherzad,330\n63,SAROSH XI,Sarosh Sher Ali,328\n64,Sami falcons ,Sameer Noorddin,319\n65,The Pi - Guys,Moiz Ali,303\n66,Amnn Shaheens,Amnn Ajaz,293\n67,The Elites,Navroz Vadsaria,276\n68,Shaheens X1,Haris Hanif Dinani,243\n69,GOALDIGGERS 11,Ali Shah Kamruddin,241\n70,Maxi 11,Azim Ali,232'

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

