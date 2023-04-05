
import throttle from 'lodash.throttle';
import Player  from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
const onPlay = function(time) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(time)).then(function(seconds){
    localStorage.getItem("videoplayer-current-time")}).catch(function(error) {
        console.log('mistake')
    });

};
    player.on('timeupdate', throttle((onPlay), 1000));