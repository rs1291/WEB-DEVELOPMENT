var day;
switch (new Date().getDay())
{
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "monday";
        break;
    case 2:
        day = "tuesday";
        break;
    case 3:
        day = "wedensday";
        break;
    case 4:
        day = "tuesday";
        break;
    case 5:
        day = "friday";
        break;
    case 6:
        day = "saturday";
}
Document.getElementById("demo").innerHTML = "Today is " + day;        
