function disp_prompt()
{
    var name=prompt("输入您的大名","大帅比")
    if (name!=null && name!="")
        {
            document.write("您好!" + name + "你今天真帅")
        }
}