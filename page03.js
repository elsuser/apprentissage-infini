function changer1() {
    document.getElementById('reponses-inputs1').style.display = "none";
    document.getElementById('reponses-inputs2').style.display = "block";
}
function reponse1() {
    alert('La reponse juste est : a)');
}
function changer2() {
    document.getElementById('reponses-inputs2').style.display = "none";
    document.getElementById('reponses-inputs3').style.display = "block";
}
function reponse2() {
    alert('La reponse juste est : a)');
}
function changer3() {
   document.getElementById('reponses-inputs3').style.display = "none";
    document.getElementById('reponses-inputs4').style.display = "block";
}
function reponse3() {
    alert('La reponse juste est : a)');
}
function changer4() {
    document.getElementById('reponses-inputs4').style.display = "none";
    document.getElementById('reponses-inputs5').style.display = "block";
}
function reponse4() {
    alert('La reponse juste est : d)');
}
function changer5() {
    document.getElementById('reponses-inputs5').style.display = "none";
    document.getElementById('reponses-inputs6').style.display = "block";
}
function reponse5() {
    alert('La reponse juste est : b)');
}
function changer6() {
    document.getElementById('reponses-inputs6').style.display = "none";
    document.getElementById('reponses-inputs7').style.display = "block";
}
function reponse6() {
    alert('La reponse juste est : d)');
}
function changer7() {
    document.getElementById('reponses-inputs7').style.display = "none";
    document.getElementById('reponses-inputs8').style.display = "block";
}
function reponse7() {
    alert('La reponse juste est : a)');
}
function changer8() {
    document.getElementById('reponses-inputs8').style.display = "none";
    document.getElementById('reponses-inputs9').style.display = "block";
}
function reponse8() {
    alert('La reponse juste est : c)');
}
function changer9() {
    document.getElementById('reponses-inputs9').style.display = "none";
    document.getElementById('reponses-inputs10').style.display = "block";
}
function reponse9() {
    alert('La reponse juste est : a)');
}
function score() {
    var pt=0;
    if(document.getElementById('correct1').checked){
        pt++;
    }
    if(document.getElementById('correct2').checked){
        pt++;
    }
    if(document.getElementById('correct3').checked){
        pt++;
    }
    if(document.getElementById('correct4').checked){
        pt++;
    }
    if(document.getElementById('correct5').checked){
        pt++;
    }
    if(document.getElementById('correct6').checked){
        pt++;
    }
    if(document.getElementById('correct7').checked){
        pt++;
    }
    if(document.getElementById('correct8').checked){
        pt++;
    }
    if(document.getElementById('correct9').checked){
        pt++;
    }
    if(document.getElementById('correct10').checked){
        pt++;
    }
    if(pt<5) {
        window.alert("Vous avez obtenu : " + pt + "/10 faible!");
    }
    else if(pt<6) {
        window.alert("Vous avez obtenu : " + pt + "/10 moyen");
    }
    else if(pt<9) {
        window.alert("Vous avez obtenu : " + pt + "/10 bien");
    }
    else {
        window.alert("Vous avez obtenu : " + pt + "/10 très bien!");
    }
}
function reponse10() {
    alert('La reponse juste est : b)');
}