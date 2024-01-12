const VideoPlayer = document.querySelector("#VideoPlayerScreen");
const PlayButton = document.querySelector("#PlayButton");

let MovieCount = 0;
let ImageToPlay = 0;
let ListImage = [];

PlayButton.onclick = PlayButtonToggle;
setInterval(MovieStreamming, 5000);
setInterval(PlayVideo, 40);

function PlayButtonToggle()
{
    if (PlayButton.classList.contains("Play")) 
    {
        PlayButton.classList.remove('Play');
        PlayButton.classList.add('Stop');
    }
    else
    {
        PlayButton.classList.remove('Stop');
        PlayButton.classList.add('Play');
    }
}

function PlayVideo() 
{
    if (PlayButton.classList.contains("Stop")) 
    {
        VideoPlayer.src = ListImage[ImageToPlay];

        ImageToPlay++;
    }
}

async function MovieStreamming() 
{
    MovieCount += 40;

    let response = await fetch("http://localhost:9000/Movie?name=test&episode=1&duration=" + time_format(new Date(MovieCount)) + "&quality=100");
    let data = await response.text();
    ListImage.push(data);
}

function time_format(d) {
    hours = format_two_digits(d.getHours());
    minutes = format_two_digits(d.getMinutes());
    seconds = format_two_digits(d.getSeconds());
    return hours + ":" + minutes + ":" + seconds;
}

function format_two_digits(n) {
    return n < 10 ? '0' + n : n;
}
