function buttonClick(val){
    document.getElementById("inp").value=document.getElementById("inp").value+val
}
function buttonClear(){
    document.getElementById("inp").value=""
}
function buttonEquals(){
    document.getElementById("inp").value=eval(document.getElementById("inp").value)
}