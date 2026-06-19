let button1=document.querySelector("#button1");
button1.onclick=() =>
{
    console.log("button1 was clicked");
    let a = 25;
    a++;
    console.log(a);
};


let div=document.querySelector("div");
div.onmouseover=() =>
{
    console.log("You are inside div");
};
