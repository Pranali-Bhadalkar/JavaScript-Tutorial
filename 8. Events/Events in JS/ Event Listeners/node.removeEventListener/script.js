let button1=document.querySelector("#button1");

button1.addEventListener("click",() =>
{
    console.log("button1 was clicked - handler1");
});


button1.addEventListener("click",() =>
{
    console.log("button1 was clicked - handler2");
});

const handler3 = () =>{
     console.log("button1 was clicked - handler3");
};
 button1.addEventListener("click",handler3);

button1.addEventListener("click",() =>
{
    console.log("button1 was clicked - handler4");
});

button1.removeEventListener("click",handler3);


