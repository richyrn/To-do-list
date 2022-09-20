{
    const person = {
        Fname: 'richard',
        Sname: 'adegorite',
        comb: function (){
            return this.Fname + ' ' + this.Sname ;
        }
    }


    let fullname = person.Sname;
    console.log(person.comb());
    person.age = 23;
    console.log(person.age);

    

}