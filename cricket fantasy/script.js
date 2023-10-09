function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Best eleven xl,Shafeen Aslam,964\n2,Liverpool,Ezaan Sikander,950\n3,Wizards Of Wickets ,Raheen Ikram shah,877\n4,Wolf XI,Sarfaraz S. Vadsariya,861\n5, Fierce Fighters,Navroz Vadsaria,846\n6,444,Shazeen Sherzad,834\n7,SMS legends,Salman Mukhtiar,801\n8,Hit and Run XI,Shahzad Vadsariya,791\n9,Elite Warriors ,Asad,790\n10,Trend Changers,Shahnil Iqbal,788\n11,Dream 11,Shaheer Ahmed,782\n12,Armaan XI,Armaan Punjwani,773\n13,UK X1,Nadeem,770\n14,All Stars,Aashir Rahim,747\n15,Super xl,Shafeen,736\n16,Star boys ,shaayaan shmasuddin,712\n17,hyakkimaru11,Aly Shah Nizar,703\n18,Elegant Eleven ,Saima Nadir,701\n19,Titans xl,Shafeen Aslam,694\n20,Azzy 11,Azim Ali,677\n20,321 pillay,Aariz Aziz,677\n22,Hayat,Moiz Hayat,676\n23,Maaz 11,Maaz Khalid,671\n24,W-11,Ubaid Ali,663\n25,KhowajaX11,Alnoor nizar,656\n26,ALLIES,Nausher Rahim,650\n27,CA Ke Balley,Noman Vadsariya,646\n28,The Winning Team,Sarim Ali Meghani,633\n29,Noble Rajans,Muneer Didarali Rajan,620\n30,The Thundering Titans,Arsh Maknojia,611\n31,Royal Rajans,Imaad Amyn Rajan,608\n32,Velocity XI,Sahil Naseer,607\n33,CricFlicks XI,Aman Hassan Vadsariya,576\n34,Meerayy Underdogs,Sameer Vadsariya,571\n35,Balig Xl,Balig Barkat Ali,568\n36,Jetha kay jhabaz,Aadil nasir,549\n37,4 cut Atmaram,Riyan maredia,546\n38,Panda Warriors,Shahnil Iqbal,544\n39,Chilka11 ,Karim Mehboob,536\n40,Team Darky,Sharoon Sherzad,530\n41,Rameez_raja11,Mirsab Malik,514\n42,Pana Tipu,Riyan maredia,493\n43,xD XI,Naveed Hakim,486\n44,Scared Shotless,hassan kirmani,480\n45,Aahil\'s XI,Aahil Aziz,468\n46,Lion xl,Shafeen Aslam,467\n47,Gaitonde 11,Maisum,453\n48,SVxKaku11,Karim Ismail,449\n49,World best xl,Shafeen Aslam,446\n49,Dororo11,Aly Shah Nizar,446\n51,Ali 11,Ali Muhammad Murad,439\n52,Marco polo culb,Hubb-i-Ali,436\n53,Koko x1,Shafeen aslam,428\n54,AJ XI,Ammad Jamil,411\n55,Mighty lions,Ali nawaz,409\n56,Ayyan fighters,Ayyan Noushad Solanki,404\n57,Prosperous Legends ,Affan Nadir,384\n58,The real OG,Sahra Iqbal,372\n59,Pinocchios,Sarfaraz S. Vadsariya,370\n60,GOALDIGGERS 11,Ali Shah Kamruddin,364\n61,SAROSH XI,Sarosh Sher Ali,355\n62,Balig Gladiators ,Balig Barkat Ali,346\n63,All around the world 11,Ayaan kashif,340\n64,World 11,Ali Mohammed,339\n65,The Elites,Navroz Vadsaria,338\n66,Sami falcons ,Sameer Noorddin,319\n67,The Pi - Guys,Moiz Ali,316\n68,Amnn Shaheens,Amnn Ajaz,306\n69,Shaheens X1,Haris Hanif Dinani,243\n70,Maxi 11,Azim Ali,232'
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

