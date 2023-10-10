function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Best eleven xl,Shafeen Aslam,1563\n2,Noble Rajans,Muneer Didarali Rajan,1278\n3,Wizards Of Wickets ,Raheen Ikram shah,1269\n4,Super xl,Shafeen,1228\n5,Trend Changers,Shahnil Iqbal,1226\n6,Elite Warriors ,Asad,1194\n7,Liverpool,Ezaan Sikander,1172\n8, Fierce Fighters,Navroz Vadsaria,1169\n9,444,Shazeen Sherzad,1146\n10,Elegant Eleven ,Saima Nadir,1067\n11,Velocity XI,Sahil Naseer,1065\n12,UK X1,Nadeem,1057\n13,Armaan XI,Armaan Punjwani,1033\n14,Meerayy Underdogs,Sameer Vadsariya,1031\n15,Dream 11,Shaheer Ahmed,1030\n16,Jetha kay jhabaz,Aadil nasir,1027\n17,Wolf XI,Sarfaraz S. Vadsariya,1026\n18,Team Darky,Sharoon Sherzad,992\n19,ALLIES,Nausher Rahim,973\n20,All Stars,Aashir Rahim,972\n21,Royal Rajans,Imaad Amyn Rajan,970\n22,xD XI,Naveed Hakim,961\n23,Hayat,Moiz Hayat,960\n24,Azzy 11,Azim Ali,959\n25,SMS legends,Salman Mukhtiar,958\n26,KhowajaX11,Alnoor nizar,951\n27,W-11,Ubaid Ali,942\n28,Star boys ,shaayaan shmasuddin,940\n29,The Winning Team,Sarim Ali Meghani,928\n30,Titans xl,Shafeen Aslam,911\n31,Balig Xl,Balig Barkat Ali,895\n32,SVxKaku11,Karim Ismail,891\n32,Gaitonde 11,Maisum,891\n34,Koko x1,Shafeen aslam,861\n35,Chilka11 ,Karim Mehboob,858\n36,321 pillay,Aariz Aziz,847\n37,Prosperous Legends ,Affan Nadir,839\n38,The Thundering Titans,Arsh Maknojia,834\n39,CA Ke Balley,Noman Vadsariya,832\n40,Hit and Run XI,Shahzad Vadsariya,829\n41,Pinocchios,Sarfaraz S. Vadsariya,815\n42,Lion xl,Shafeen Aslam,796\n43,hyakkimaru11,Aly Shah Nizar,793\n44,SAROSH XI,Sarosh Sher Ali,779\n45,World best xl,Shafeen Aslam,758\n46,Maaz 11,Maaz Khalid,753\n47,CricFlicks XI,Aman Hassan Vadsariya,720\n48,Rameez_raja11,Mirsab Malik,707\n49,AJ XI,Ammad Jamil,698\n50,4 cut Atmaram,Riyan maredia,694\n51,Amnn Shaheens,Amnn Ajaz,686\n52,Aahil\'s XI,Aahil Aziz,684\n53,Marco polo culb,Hubb-i-Ali,680\n54,Pana Tipu,Riyan maredia,676\n55,Panda Warriors,Shahnil Iqbal,665\n55,All around the world 11,Ayaan kashif,665\n57,Ayyan fighters,Ayyan Noushad Solanki,660\n58,The real OG,Sahra Iqbal,625\n59,Balig Gladiators ,Balig Barkat Ali,624\n59,The Elites,Navroz Vadsaria,624\n61,Scared Shotless,hassan kirmani,614\n62,Ali 11,Ali Muhammad Murad,609\n63,Mighty lions,Ali nawaz,605\n64,World 11,Ali Mohammed,592\n65,The Pi - Guys,Moiz Ali,580\n66,Sami falcons ,Sameer Noorddin,563\n67,GOALDIGGERS 11,Ali Shah Kamruddin,560\n68,Dororo11,Aly Shah Nizar,492\n69,Maxi 11,Azim Ali,450\n70,Shaheens X1,Haris Hanif Dinani,433'

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

