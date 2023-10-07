function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Liverpool,Ezaan Sikander,828\n2,Best eleven xl,Shafeen Aslam,733\n3,UK X1,Nadeem,713\n4,Wolf XI,Sarfaraz S. Vadsariya,680\n5,Wizards Of Wickets ,Raheen Ikram shah,679\n6,hyakkimaru11,Aly Shah Nizar,603\n7,SMS legends,Salman Mukhtiar,591\n8,Armaan XI,Armaan Punjwani,589\n9, Fierce Fighters,Navroz Vadsaria,587\n10,Titans xl,Shafeen Aslam,554\n11,Elite Warriors ,Asad,547\n12,Super xl,Shafeen,541\n13,All Stars,Aashir Rahim,537\n14,Trend Changers,Shahnil Iqbal,509\n15,W-11,Ubaid Ali,506\n16,Meerayy Underdogs,Sameer Vadsariya,503\n17,Noble Rajans,Muneer Didarali Rajan,480\n18,ALLIES,Nausher Rahim,474\n19,KhowajaX11,Alnoor nizar,470\n20,Azzy 11,Azim Ali,466\n21,444,Shazeen Sherzad,459\n22,Royal Rajans,Imaad Amyn Rajan,453\n23,Hayat,Moiz Hayat,452\n24,Chilka11 ,Karim Mehboob,446\n25,Hit and Run XI,Shahzad Vadsariya,430\n26,Velocity XI,Sahil Naseer,399\n27,321 pillay,Aariz Aziz,393\n28,Dream 11,Shaheer Ahmed,388\n29,CricFlicks XI,Aman Hassan Vadsariya,373\n30,Maaz 11,Maaz Khalid,361\n30,4 cut Atmaram,Riyan maredia,361\n32,AJ XI,Ammad Jamil,349\n33,Balig Xl,Balig Barkat Ali,346\n33,xD XI,Naveed Hakim,346\n35,Lion xl,Shafeen Aslam,330\n36,CA Ke Balley,Noman Vadsariya,320\n37,SVxKaku11,Karim Ismail,307\n38,Mighty lions,Ali nawaz,302\n38,World best xl,Shafeen Aslam,302\n40,Gaitonde 11,Maisum,300\n41,SAROSH XI,Sarosh Sher Ali,281\n42,Star boys ,shaayaan shmasuddin,279\n42,The Thundering Titans,Arsh Maknojia,279\n44,Panda Warriors,Shahnil Iqbal,276\n44,The real OG,Sahra Iqbal,276\n46,Pana Tipu,Riyan maredia,270\n47,Pinocchios,Sarfaraz S. Vadsariya,267\n48,Elegant Eleven ,Saima Nadir,264\n49,Amnn Shaheens,Amnn Ajaz,259\n49,World 11,Ali Mohammed,259\n51,The Elites,Navroz Vadsaria,258\n52,Jetha kay jhabaz,Aadil nasir,257\n52,Dororo11,Aly Shah Nizar,257\n54,Aahil\'s XI,Aahil Aziz,247\n55,Prosperous Legends ,Affan Nadir,225\n56,Rameez_raja11,Mirsab Malik,219\n57,Marco polo culb,Hubb-i-Ali,218\n58,Ayyan fighters,Ayyan Noushad Solanki,213\n59,Ali 11,Ali Muhammad Murad,212\n60,Team Darky,Sharoon Sherzad,211\n61,Scared Shotless,hassan kirmani,210\n62,The Winning Team,Sarim Ali Meghani,197\n63,GOALDIGGERS 11,Ali Shah Kamruddin,191\n64,The Pi - Guys,Moiz Ali,186\n65,Balig Gladiators ,Balig Barkat Ali,149\n66,Shaheens X1,Haris Hanif Dinani,147\n67,Maxi 11,Azim Ali,136\n68,Koko x1,Shafeen aslam,128\n69,Sami falcons ,Sameer Noorddin,83\n70,All around the world 11,Ayaan kashif,65'

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

