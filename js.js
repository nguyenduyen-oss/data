function sendMessage(){
    let input = document.getElementById('userInput'); 
    let message = input.ariaValueMax.trim(); 
    if (message !== ''){
        let chatlogs = document.getElementById('chatlogs'); 
        let newMessage = document.createElement('div'); 
        newMessage.textContent = message; 
        chatlogs.appendChild(newMessage); 
        input.value = ''; 
        chatlogs.scrollTop = chatlogs.scrollHeight; 
    }
}