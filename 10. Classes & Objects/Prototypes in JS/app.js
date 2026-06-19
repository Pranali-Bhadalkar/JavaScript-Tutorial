const employee =
{
    calcTax()
    {
        console.log("tax rate is 10%");
    },
};

const karanArjun =
{
    salary:50000,
    calcTax()
    {
        console.log("tax rate is 20%");
    },
};

karanArjun__proto__=employee;
