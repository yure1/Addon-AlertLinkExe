function changeLinkColor(exelink){
    exelink.style.color = '#ffffff';
    exelink.style.backgroundColor = '#ff0000';
}

function checkExeLink() {
    let aTag = document.getElementsByTagName('a');

    for(let i = 0; aTag.length; i++) {

        if(aTag[i].getAttribute('href').toLowerCase().indexOf(".exe") !== -1) {
        
            changeLinkColor(aTag[i]);
        
        }
    }
}

function ManualCheckExeLink() {

    document.addEventListener("click", function(evt) {
        let shiftClick = evt.shiftKey;
    
        if(shiftClick === true) {
        
            checkExeLink();
        
        }
    })
}

window.addEventListener("DOMContentLoaded", ManualCheckExeLink());
window.addEventListener("DOMContentLoaded", checkExeLink());
