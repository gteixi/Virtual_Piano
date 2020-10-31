let musicKey = document.createElement("AUDIO");
musicKey.type = 'audio.mp3'

document.addEventListener("keydown", function(event) {
    switch (event.code) {
        case "KeyA":
            musicKey.src = "audio_files/A.mp3";
            musicKey.play();
            break;
        case "KeyS":
            console.log("The 'S' key is pressed.");
            musicKey.src = "audio_files/S.mp3";
            musicKey.play();
            break;
        case "KeyD":
            console.log("The 'D' key is pressed.");
            musicKey.src = "audio_files/D.mp3";
            musicKey.play();
            break;
        case "KeyF":
            console.log("The 'F' key is pressed.");
            musicKey.src = "audio_files/F.mp3";
            musicKey.play();
            break;
        case "KeyG":
            console.log("The 'G' key is pressed.");
            musicKey.src = "audio_files/G.mp3";
            musicKey.play();
            break;
        case "KeyH":
            console.log("The 'H' key is pressed.");
            musicKey.src = "audio_files/H.mp3";
            musicKey.play();
            break;
        case "KeyJ":
            console.log("The 'J' key is pressed.");
            musicKey.src = "audio_files/J.mp3";
            musicKey.play();
            break;
        default:
            console.log("Invalid key pressed.");
            break;
    }
} )