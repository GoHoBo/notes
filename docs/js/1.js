
var d=new Date()
var time=d.getHours()

if(time>12)
{
    document.write("<b>午安</b>")
}
else if (time>=9 && time<15)
{
    document.write("早上好大帅比")
}
else
{
    document.write("<b>早啊</b>")
}
