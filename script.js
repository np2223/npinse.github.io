alert("Hello weclome to mycv");


// กด Soft skills แล้วจะเลื่อยลงมาว่ามีอะไรบ้าง
// กด Hard skills แล้วจะเลื่อยลงมาว่ามีอะไรบ้าง
// document.getElementById("slip").onclick = function() {slip()};
function softskills() {
    if (document.getElementById("softskills").innerHTML === "Soft skills") {
        document.getElementById("softskills").innerHTML = "Soft skills<br>-dfdfdfd<br>-fghghghg";
    }
    else {
        document.getElementById("softskills").innerHTML = "Soft skills";
    }
}


function hardskills() {
    if (document.getElementById("hardskills").innerHTML === "Hard skills") {
        document.getElementById("hardskills").innerHTML = "Hard skills<br>-dfdfdfd<br>-fghghghg";
    }
    else {
        document.getElementById("hardskills").innerHTML = "Hard skills";
    }
}