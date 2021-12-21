var images = [
    "https://images.indianexpress.com/2021/01/chris-hemsworth-thor-4-1200.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg",
    "https://static.wikia.nocookie.net/disney/images/4/4a/Thor_Odinson_TDW_poster_textless.jpg/revision/latest?cb=20130615173905",
    "https://i.pinimg.com/originals/a5/83/a5/a583a52c7b2b37cfadc2876cdffe8fa2.jpg",
    "https://www.filmibeat.com/ph-big/2017/04/thor-ragnarok_1492492704100.jpg"
    
]
var i = 0;
function Next_Image() {
    if (i == 4) {
        i = 0;
    }
    document.getElementById("Thor").src = images[i];
    i++;
}
