playAudio();

function playAudio(){
    let currentSong = 0;
    let ListItem = document.getElementsByClassName('current-song');
    let songs = document.getElementsByClassName('song');
    let player = document.querySelector('#audioPlayer');

    player.src = songs[0].childNodes[0].attributes[0].nodeValue;
    player.volume = 0.2;
    player.play();

    document.querySelectorAll('a').forEach(item=>{
        item.addEventListener('click',(e)=>{
            e.preventDefault();
            ListItem[0].classList.remove('current-song');
            player.src = e.target.getAttribute('href');
            player.play();
            currentSong = parseInt(e.target.getAttribute('data-current'));
            songs[currentSong].classList.add('current-song');
        });
    });

    player.addEventListener('ended', ()=>{
        
        currentSong++;
        songsQt = songs.length;
        
        if(currentSong == songsQt){
            currentSong = 0;
        }
        
        ListItem[0].classList.remove('current-song');
        songs[currentSong].classList.add('current-song');
        
        player.src = songs[currentSong].childNodes[0].attributes[0].nodeValue;
        player.play();
        
    });
}