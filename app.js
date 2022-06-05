function myFunction(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btn = document.getElementById("b-btn");

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btn.innerHTML = "Read more";
        moreText.style.display = "none";
    }
    else{
        dots.style.display= "none";
        btn.innerHTML = "Read less";
        moreText.style.display = "inline";

    }
}


function check() {
    var email = document.getElementById("email");
    var password = document.getElementById("pasword");
    document.write(`Email : ${email.value}  <br /> Password : ${password.value}`)
   
}

function checkStudInfo(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var rollnum = document.getElementById("rollnum").value;

    document.write(`${firstname} ${lastname} ${email} ${rollnum}` )
}