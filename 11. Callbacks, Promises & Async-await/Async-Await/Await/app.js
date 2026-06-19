 function api()
{
    return new Promise((resolve, reject) =>
    {
            setTimeout(() =>
            {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}
   
async function getWhetherData()
    {
       await api();
       await api();
}

function getData(dataId)
{
    return new Promise((resolve, reject) =>
    {
            setTimeout(() =>
            {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

