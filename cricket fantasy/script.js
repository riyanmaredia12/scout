function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Best eleven xl,Shafeen Aslam,1646\n2,Wizards Of Wickets ,Raheen Ikram shah,1378\n3,Noble Rajans,Muneer Didarali Rajan,1347\n4,Elegant Eleven ,Saima Nadir,1286\n5,Trend Changers,Shahnil Iqbal,1285\n6,444,Shazeen Sherzad,1282\n7, Fierce Fighters,Navroz Vadsaria,1275\n8,Elite Warriors ,Asad,1239\n9,Super xl,Shafeen,1223\n10,The Winning Team,Sarim Ali Meghani,1218\n11,Velocity XI,Sahil Naseer,1217\n12,Meerayy Underdogs,Sameer Vadsariya,1215\n13,Liverpool,Ezaan Sikander,1210\n14,Jetha kay jhabaz,Aadil nasir,1168\n15,Star boys ,shaayaan shmasuddin,1159\n16,World best xl,Shafeen Aslam,1134\n17,KhowajaX11,Alnoor nizar,1125\n18,All around the world 11,Ayaan kashif,1094\n19,Dream 11,Shaheer Ahmed,1093\n20,Royal Rajans,Imaad Amyn Rajan,1072\n21,Wolf XI,Sarfaraz S. Vadsariya,1064\n22,Chilka11 ,Karim Mehboob,1062\n23,UK X1,Nadeem,1057\n24,W-11,Ubaid Ali,1051\n25,Koko x1,Shafeen aslam,1042\n26,ALLIES,Nausher Rahim,1039\n27,Armaan XI,Armaan Punjwani,1033\n28,Azzy 11,Azim Ali,1004\n29,Hayat,Moiz Hayat,998\n30,321 pillay,Aariz Aziz,993\n31,Team Darky,Sharoon Sherzad,992\n32,CA Ke Balley,Noman Vadsariya,983\n33,Balig Xl,Balig Barkat Ali,978\n34,All Stars,Aashir Rahim,972\n34,SMS legends,Salman Mukhtiar,972\n36,The Thundering Titans,Arsh Maknojia,970\n37,xD XI,Naveed Hakim,963\n38,Titans xl,Shafeen Aslam,956\n39,Gaitonde 11,Maisum,936\n40,Pana Tipu,Riyan maredia,919\n41,SVxKaku11,Karim Ismail,891\n42,Prosperous Legends ,Affan Nadir,882\n43,Aahil\'s XI,Aahil Aziz,871\n44,Pinocchios,Sarfaraz S. Vadsariya,860\n45,Hit and Run XI,Shahzad Vadsariya,831\n46,The real OG,Sahra Iqbal,814\n47,Lion xl,Shafeen Aslam,801\n48,hyakkimaru11,Aly Shah Nizar,793\n48,Marco polo culb,Hubb-i-Ali,793\n50,Ali 11,Ali Muhammad Murad,786\n51,Rameez_raja11,Mirsab Malik,783\n52,World 11,Ali Mohammed,781\n53,SAROSH XI,Sarosh Sher Ali,779\n54,4 cut Atmaram,Riyan maredia,777\n55,Amnn Shaheens,Amnn Ajaz,771\n56,Maaz 11,Maaz Khalid,758\n57,CricFlicks XI,Aman Hassan Vadsariya,725\n58,Balig Gladiators ,Balig Barkat Ali,708\n59,AJ XI,Ammad Jamil,698\n59,Ayyan fighters,Ayyan Noushad Solanki,698\n61,Scared Shotless,hassan kirmani,697\n62,Panda Warriors,Shahnil Iqbal,683\n63,Sami falcons ,Sameer Noorddin,676\n64,The Pi - Guys,Moiz Ali,663\n65,The Elites,Navroz Vadsaria,624\n66,Mighty lions,Ali nawaz,605\n67,GOALDIGGERS 11,Ali Shah Kamruddin,570\n68,Dororo11,Aly Shah Nizar,553\n69,Maxi 11,Azim Ali,488\n70,Shaheens X1,Haris Hanif Dinani,478'
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

