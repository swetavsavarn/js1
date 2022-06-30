class user
{
    static count=0;
    
    constructor(username,password,dateofjoining,membership_type)
    {
        this.username=username;
        this.password=password;
        user.count=user.count+1;
        this.dateofjoining=new Date(dateofjoining);
        this.membership_type=membership_type;
        
        
    }
    static registerduser() {
        console.log(`${user.count}`)
        
    }
    //process to add no of days in it
    freetrial()
    {
        let totaldays=this.dateofjoining
        let newdate=new Date();
        newdate.setDate(totaldays.getDate()+30);

        return `${this.username}  your subscription will be valid till  ${newdate}`;
        
    }
    renewmembership()
    {
        let newdate1=new Date();
        let totaldays1=this.dateofjoining

        if(this.membership_type==='standard')
        {
            newdate1.setDate(totaldays1.getDate()+30)

        }
        if(this.membership_type==='yearly')
        {
            newdate1.setDate(totaldays1.getDate()+365)

        }
    }

    
        
    
}
// class registerduserno extends user
// {
//     static noofusers()
//     {
//         return `${user.count}`;
//     }
// }
let bob=new user('hii','12345',(2022, 6 , 15));
//let bob1=new user('abc','12233');
console.log(bob.freetrial());
