
//Arrays

let items=[85,97,44,37,76,60];
let i=0;
for(let val of items)
{
    let offer = val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer=${items[i]}`);
    i++;
}
