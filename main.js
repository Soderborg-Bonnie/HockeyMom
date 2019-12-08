//**************************function to switch between nav menus for mobile and larger
function toggleMenu() {
    document.getElementById('mainNav').classList.toggle('hide');
}

//************************************************************function to reveal gear
function flip() {
    document.getElementById('hockeyBag').style.transitionProperty = 'transform';
    document.getElementById('hockeyBag').style.transform = 'rotate(180deg)';
    document.getElementById('hockeyBag').style.transitionDuration = '1.5s';

    for (var i = 0; i < 11; i++) {
        //        var x = document.getElementsByClassName('layers');
        //        x[i].style.transitionProperty = 'color';
        //        x[i].style.transitionDuration = '5s';
        //        x[i].style.color = 'white';
        var y = document.getElementsByClassName('gearLayers');
        y[i].style.transitionProperty = 'opacity';
        y[i].style.transitionDelay = '1s';
        y[i].style.transitionDuration = '3s';
        y[i].style.opacity = '1.0';
    }
}

//***********************************function to transition gear on player
function transitionGear() {
    //    document. getElementById('guard').style.position = 'relative';
    document.getElementById('guard').style.transitionProperty = 'transform';
    document.getElementById('guard').style.transitionDuration = '2s';
    document.getElementById('guard').style.transitionDelay = '0s';
    document.getElementById('guard').style.transform = 'scale(1.4) rotate(360deg) translateX(-115px) translateY(10px)';

    document.getElementById('leftShin').style.transitionProperty = 'transform';
    document.getElementById('leftShin').style.transitionDuration = '2s';
    document.getElementById('leftShin').style.transitionDelay = '2s';
    document.getElementById('leftShin').style.transform = 'translateX(-270px) translateY(85px)';

    document.getElementById('rightShin').style.transitionProperty = 'transform';
    document.getElementById('rightShin').style.transitionDuration = '2s';
    document.getElementById('rightShin').style.transitionDelay = '3s';
    document.getElementById('rightShin').style.transform = 'translateX(-150px) translateY(-20px)';

    document.getElementById('leftSock').style.transitionProperty = 'transform';
    document.getElementById('leftSock').style.transitionDuration = '2s';
    document.getElementById('leftSock').style.transitionDelay = '4s';
    document.getElementById('leftSock').style.transform = 'scale(1.1) translateX(-250px) translateY(-10px)';


    document.getElementById('rightSock').style.transitionProperty = 'transform';
    document.getElementById('rightSock').style.transitionDuration = '2s';
    document.getElementById('rightSock').style.transitionDelay = '5s';
    document.getElementById('rightSock').style.transform = 'scale(1.1) translateX(-135px) translateY(-105px)';


    document.getElementById('pants').style.transitionProperty = 'transform';
    document.getElementById('pants').style.transitionDuration = '2s';
    document.getElementById('pants').style.transitionDelay = '6s';
    document.getElementById('pants').style.transform = 'scale(1.5) translateX(-180px) translateY(-140px) rotateY(1080deg)';


    document.getElementById('leftSkate').style.transitionProperty = 'transform';
    document.getElementById('leftSkate').style.transitionDuration = '2s';
    document.getElementById('leftSkate').style.transitionDelay = '7s';
    document.getElementById('leftSkate').style.transform = 'scale(1.2) translateX(-142px) translateY(-150px) rotateY(1440deg)';

    document.getElementById('rightSkate').style.transitionProperty = 'transform';
    document.getElementById('rightSkate').style.transitionDuration = '2s';
    document.getElementById('rightSkate').style.transitionDelay = '8s';
    document.getElementById('rightSkate').style.transform = 'scale(1.2) translateX(-173px) translateY(-155px) rotateY(1440deg)';

    document.getElementById('shoulderPads').style.transitionProperty = 'transform';
    document.getElementById('shoulderPads').style.transitionDuration = '2s';
    document.getElementById('shoulderPads').style.transitionDelay = '9s';
    document.getElementById('shoulderPads').style.transform = 'scale(1.7) translateX(-95px) translateY(-305px)';

    document.getElementById('leftElbow').style.transitionProperty = 'transform';
    document.getElementById('leftElbow').style.transitionDuration = '2s';
    document.getElementById('leftElbow').style.transitionDelay = '10s';
    document.getElementById('leftElbow').style.transform = 'translateX(-340px) translateY(-450px)';

    document.getElementById('rightElbow').style.transitionProperty = 'transform';
    document.getElementById('rightElbow').style.transitionDuration = '2s';
    document.getElementById('rightElbow').style.transitionDelay = '11s';
    document.getElementById('rightElbow').style.transform = 'translateX(-80px) translateY(-560px)';

    document.getElementById('jersey').style.transitionProperty = 'transform';
    document.getElementById('jersey').style.transitionDuration = '2s';
    document.getElementById('jersey').style.transitionDelay = '12s';
    document.getElementById('jersey').style.transform = 'scale(1.9) translateX(-139px) translateY(-325px) rotateY(1080deg)';

    document.getElementById('mouthGuard').style.transitionProperty = 'transform';
    document.getElementById('mouthGuard').style.transitionDuration = '2s';
    document.getElementById('mouthGuard').style.transitionDelay = '13s';
    document.getElementById('mouthGuard').style.transform = 'translateX(-183px) translateY(-767px)';

    document.getElementById('helmet').style.transitionProperty = 'transform';
    document.getElementById('helmet').style.transitionDuration = '2s';
    document.getElementById('helmet').style.transitionDelay = '14s';
    document.getElementById('helmet').style.transform = 'scale(.8) translateX(-327px) translateY(-1010px) rotateX(2160deg) rotateY(2160deg)';


    document.getElementById('leftGlove').style.transitionProperty = 'transform';
    document.getElementById('leftGlove').style.transitionDuration = '2s';
    document.getElementById('leftGlove').style.transitionDelay = '15s';
    document.getElementById('leftGlove').style.transform = 'scale(.8) translateX(-260px) translateY(-940px) rotate(1080deg)';

    document.getElementById('rightGlove').style.transitionProperty = 'transform';
    document.getElementById('rightGlove').style.transitionDuration = '2s';
    document.getElementById('rightGlove').style.transitionDelay = '16s';
    document.getElementById('rightGlove').style.transform = 'scale(.8) translateX(-265px) translateY(-940px) rotate(1080deg)';

    document.getElementById('rightWay').style.transitionProperty = 'opacity';
    document.getElementById('rightWay').style.transitionDuration = '4s';
    document.getElementById('rightWay').style.transitionDelay = '15s';
    document.getElementById('rightWay').style.opacity = '1';

}



//*****************************************************function to get NHL standings
function nhlRanking() {
    //creating  XHR object

    var hockeyStuff = new XMLHttpRequest();
    //opening the api door
    hockeyStuff.open('GET', 'https://statsapi.web.nhl.com/api/v1/teams', true);

    //**********************************************function to load info
    hockeyStuff.onload = function () {
        if (this.status == 200) {
            var teams = JSON.parse(hockeyStuff.responseText);
            console.log(teams);
            for (var i = 0; i < 31; i++) {
                var teamName = teams.teams[i].name;
                var website = teams.teams[i].officialSiteUrl;

                var table = document.getElementById('teamsTable');
                var tr = document.createElement('tr');

                tr.innerHTML = '<td>' + "<a href='" + website + "' target='_blank'>" + teamName + '</a>' + '</td>';

                table.appendChild(tr);
            }
        }
    }

    hockeyStuff.send();



    var hockeyInfo = new XMLHttpRequest();
    //opening the api door
    hockeyInfo.open('GET', 'https://statsapi.web.nhl.com/api/v1/standings', true);
    hockeyInfo.onload = function () {
        //check if api status is ok & ready for use
        if (this.status == 200) {
            //parse the api and set variable             
            var hockey = JSON.parse(hockeyInfo.responseText);

            //            console.log(hockey);
            //*********************************************************build table            
            for (var i = 0; i < 4; i++) {
                for (var s = 0; s < hockey.records[i].teamRecords.length; s++) {
                    var teamName = hockey.records[i].teamRecords[s].team.name;
                    var wins = 'W: <b>' + hockey.records[i].teamRecords[s].leagueRecord.wins;
                    var losses = 'L: <b>' + hockey.records[i].teamRecords[s].leagueRecord.losses;
                    var ot = 'OT: <b>' + hockey.records[i].teamRecords[s].leagueRecord.ot;
                    var leagueRank = 'R: <b>' + hockey.records[i].teamRecords[s].leagueRank;

                    var table = document.getElementById('standingsTable');
                    var tr = document.createElement('tr');
                    tr.innerHTML = '<td>' + teamName + '</td>' +
                        '<td>' + wins + '</td>' +
                        '<td>' + losses + '</td>' +
                        '<td>' + ot + '</td>' +
                        '<td>' + leagueRank + '</td>';
                    table.appendChild(tr);
                }
            }
        }
    }
    hockeyInfo.send();
}

function getTeams() {
    //creating  XHR object
    var hockeyStuff = new XMLHttpRequest();
    //opening the api door
    hockeyStuff.open('GET', 'https://statsapi.web.nhl.com/api/v1/teams', true);

    //**********************************************function to load info
    hockeyStuff.onload = function () {
        if (this.status == 200) {
            var teams = JSON.parse(hockeyStuff.responseText);
            console.log(teams);
            for (var i = 0; i < 31; i++) {
                var teamName = teams.teams[i].name;
                var website = teams.teams[i].officialSiteUrl;

                var table = document.getElementById('teamsTable');
                var tr = document.createElement('tr');

                tr.innerHTML = '<td>' + teamName + '</td>';

                table.appendChild(tr);
            }
        }
    }

    hockeyStuff.send();
}

function countTheClicks() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("clicks").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s). And still no magic...";
    } else {
        document.getElementById("clicks").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
