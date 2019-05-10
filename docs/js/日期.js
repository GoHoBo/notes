function myFunction()
{
    var x;
    var d=new Date().getDay();
    switch (d)
        {
            case 0:
                x="今天周日";
                break;
            case 1:
                x="今天周一";
                break;
            case 2:
                x="今天周二";
                break;
            case 3:
                x="今天周三";
                break;
            case 4:
                x="今天周四";
                break;
            case 5:
                x="今天周五";
                break;
            case 6:
                x="今天周六";
                break;
        }
    document.getElementById("demo").innerHTML=x
}
