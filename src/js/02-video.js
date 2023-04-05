
    import throttle from 'lodash.throttle';
import Player  from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const onPlay = function(time) {
    localStorage.setItem('videoplayer-current-time', `${time.seconds}`);
};
    player.on('timeupdate', throttle((onPlay), 1000));
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));