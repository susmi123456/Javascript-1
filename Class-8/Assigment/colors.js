// function changecolour(){
//     document.querySelector(',bntn1').innerHTML="GM"
//     document.querySelector(',bntn2').innerHTML="GM"
//     console.log('test case 123')
// }

// function changeBackgroundColor(elementId, color) {
//     document.getElementById(elementId).style.backgroundColor = color;
// }


function changeBackgroundColor(elementId, color) {
    document.getElementById(elementId).style.backgroundColor = color;
}
function changeInputBackgroundColor(elementId, color) {
    document.getElementById(elementId).style.backgroundColor = color;
}
function convertToUpperCase(elementId){
    var inputField = document.getElementById(elementId);
    inputField.value = inputField.value.toUpperCase();
}
