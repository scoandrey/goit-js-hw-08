!function(){var e=document.querySelector("iframe"),n=new Vimeo.Player(e);n.on("play",(function(){console.log("played the video!")})),n.getVideoTitle().then((function(e){console.log("title:",e)}));n.on("play",(function(e){})),n.on("eventName",(function(e){}));n.off("eventName",(function(){}))}();
//# sourceMappingURL=02-video.fd1bca7f.js.map
