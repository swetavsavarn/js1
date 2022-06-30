class solution
{
    constructor()
    {
        var top=0;
        var result=true;
    }
    constructor()
    {
        this.items=[];
        
    }
    push(element)
{
    top=top+1;
    // push element into the items
    this.items.push(element);
}

pop()
{
    top=top-1;
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    
    return this.items.pop();
}
isEmpty()
{
    return this.items.length==0;
}

    
    ispar(x)
    {
        
        //your code here
        for(var i=0;i<x.length;i++)
        {
            var b=x.charAt(i);
            if(b=='{' || b=='(' || b=='[')
            {
                this.push(b);
            }
            else if(isEmpty()==false && (this.items[top]))
        }
    }


}
