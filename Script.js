

function changeBackground() {
    var i=1;
    for(i=1;i<=8;i++){
    document.getElementById("s"+i).style.background = '#'+Math.floor(Math.random()*16777215).toString(16); 
    }
}


  