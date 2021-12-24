let countScore=0;
let countWicket=0;
let countOvers=0;

const valueScore=document.querySelector("#valueScore");
const valueWicket=document.querySelector("#valueWicket");
const valueOvers=document.querySelector("#valueOvers");
const valueAlerts=document.querySelector("#valueAlerts");
const buttons=document.querySelectorAll(".btn");

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        const styles=e.currentTarget.classList;
        if (styles.contains("decrease")) {
            countScore--;
        } else if (styles.contains("single")) {
            if (countOvers<18 && countOvers>=12) {
                countScore = countScore + 2;
            } else {
                countScore++;
            }
            countOvers++;
        } else  if(styles.contains("double")) {
            if (countOvers<18 && countOvers>=12) {
                countScore = countScore + 4;
            } else {
                countScore = countScore + 2;
            }
            countOvers++;
        } else  if(styles.contains("triple")) {
            if (countOvers<18 && countOvers>=12) {
                countScore = countScore + 6;
            } else {
                countScore = countScore + 3;
            }
            countOvers++;
        } else if (styles.contains("boundary")) {
            if (countOvers<18 && countOvers>=12) {
                countScore = countScore + 8;
            } else {
                countScore = countScore + 4;
            }
            countOvers++;
        } else if (styles.contains("six")) {
            if (countOvers<18 && countOvers>=12) {
                countScore = countScore + 12;
            } else {
                countScore = countScore + 6;
            }
            countOvers++;
        } else if (styles.contains("wicket")) {
            if (countOvers<18 && countOvers>=12) {
                countScore = countScore - 5;
            }
            countWicket++;
            countOvers++;
        } else if (styles.contains("extra")) {
            if (countOvers<18 && countOvers>=12) {
                countScore = countScore + 2;
            } else {
                countScore++;
            }
        } else if (styles.contains("dot")) {
            countOvers++;
        } else {
            countScore=0;
            countWicket=0;
            countOvers=0;
        } if (countScore>0) {
            valueScore.style.color="green";
        } if (countScore<0) {
            valueScore.style.color="red";
        } if (countScore===0) {
            valueScore.style.color="#222";
        }
        valueScore.textContent=countScore;
        valueWicket.textContent=countWicket;
        function ballsToOvers(balls){
            overs=((balls-(balls%6))/6)
            oversPt2=(balls%6);
            finalResult=overs+"."+oversPt2;
            return finalResult;
        }
        valueOvers.textContent=ballsToOvers(countOvers);
        if(countWicket>=9 || countOvers>=48) {
            valueAlerts.textContent="Innings Over!";
        } else {
            valueAlerts.textContent="";
        }
        if (window.XMLHttpRequest){
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        var UrlToSend = "send.php?" + "scoreValue=" + countScore + "&wicketsValue=" + countWicket + "&oversValue=" + ballsToOvers(countOvers);
        xmlhttp.open("GET", UrlToSend, false);
        xmlhttp.send();
    })
});