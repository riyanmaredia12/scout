function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Wolf XI,Sarfaraz S. Vadsariya,659\n2,Elite Warriors ,Asad,526\n3,Wizards Of Wickets ,Raheen Ikram shah,518\n4,Armaan XI,Armaan Punjwani,507\n5,Liverpool,Ezaan Sikander,500\n6,hyakkimaru11,Aly Shah Nizar,482\n7,Titans xl,Shafeen Aslam,479\n8,UK X1,Nadeem,477\n9,Best eleven xl,Shafeen Aslam,468\n10,Hayat,Moiz Hayat,452\n11,All Stars,Aashir Rahim,416\n12,321 pillay,Aariz Aziz,393\n13,Trend Changers,Shahnil Iqbal,379\n14,ALLIES,Nausher Rahim,372\n15,Noble Rajans,Muneer Didarali Rajan,367\n16,Azzy 11,Azim Ali,362\n17,Super xl,Shafeen,355\n18, Fierce Fighters,Navroz Vadsaria,351\n19,444,Shazeen Sherzad,347\n20,W-11,Ubaid Ali,345\n21,CricFlicks XI,Aman Hassan Vadsariya,343\n22,Maaz 11,Maaz Khalid,340\n23,Royal Rajans,Imaad Amyn Rajan,323\n24,KhowajaX11,Alnoor nizar,305\n25,Hit and Run XI,Shahzad Vadsariya,297\n26,Dream 11,Shaheer Ahmed,291\n27,World best xl,Shafeen Aslam,290\n28,Velocity XI,Sahil Naseer,285\n29,Meerayy Underdogs,Sameer Vadsariya,274\n30,Elegant Eleven ,Saima Nadir,264\n31,Aahil\'s XI,Aahil Aziz,247\n32,Mighty lions,Ali nawaz,239\n33,The Elites,Navroz Vadsaria,237\n34,SMS legends,Salman Mukhtiar,234\n35,Balig Xl,Balig Barkat Ali,214\n36,Ayyan fighters,Ayyan Noushad Solanki,213\n37,Ali 11,Ali Muhammad Murad,212\n38,4 cut Atmaram,Riyan maredia,208\n39,Rameez_raja11,Mirsab Malik,198\n39,xD XI,Naveed Hakim,198\n39,Lion xl,Shafeen Aslam,198\n42,The Winning Team,Sarim Ali Meghani,197\n42,Star boys ,shaayaan shmasuddin,197\n42,Marco polo culb,Hubb-i-Ali,197\n45,Gaitonde 11,Maisum,196\n46,Team Darky,Sharoon Sherzad,190\n47,The Thundering Titans,Arsh Maknojia,175\n48,Maredia X1,Noman Vadsariya,167\n49,Amnn Shaheens,Amnn Ajaz,160\n50,Jetha kay jhabaz,Aadil nasir,153\n51,The real OG,Sahra Iqbal,151\n52,Chilka11 ,Karim Mehboob,150\n53,GOALDIGGERS 11,Ali Shah Kamruddin,142\n54,Shaheens X1,Haris Hanif Dinani,135\n55,Pinocchios,Sarfaraz S. Vadsariya,123\n56,Balig Gladiators ,Balig Barkat Ali,109\n57,Koko x1,Shafeen aslam,107\n58,The Pi - Guys,Moiz Ali,104\n59,Panda Warriors,Shahnil Iqbal,103\n60,SAROSH XI,Sarosh Sher Ali,102\n61,Pana Tipu,Riyan maredia,97\n62,SVxKaku11,Karim Ismail,96\n63,Scared Shotless,hassan kirmani,85\n64,Dororo11,Aly Shah Nizar,77\n65,World 11,Ali Mohammed,74\n66,AJ XI,Ammad Jamil,67\n67,Sami falcons ,Sameer Noorddin,62\n68,Prosperous Legends ,Affan Nadir,56\n69,All around the world 11,Ayaan kashif,44\n70,Maxi 11,Azim Ali,32'

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

