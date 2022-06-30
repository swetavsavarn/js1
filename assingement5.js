function convert(value,toconvert)
{
    let afterconversion;
    if(toconvert==='K')
    {
        afterconversion=273+value;
    }
    else if(toconvert==='C')
    {
        afterconversion=value-273;
    }
    return afterconversion;

}
