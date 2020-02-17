(function fullScreen(){
        document.addEventListener('click', ()=> {
            if(document.documentElement.requestFullscreen){
                document.querySelector(".container").requestFullscreen();
            }
            screen.orientation.lock('natural');
            .then(...)
            .catch(...)
        });
            
    }());
