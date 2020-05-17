let str1="Uwielbiam JavaScript";
let str2="Jestem świetnym programistą";
function KtoryDluzszy(str1, str2)
{
    if(str1.lenght>str2.length)
    {
        console.log(str1.length);
    }
    else
    {
        console.log(str2.length);
    }
}
KtoryDluzszy(str1, str2);