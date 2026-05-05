/*let canVote=(i1)=>{
    if(i1 >= 18){
     return "can vote";
        }else {
               
            return "cannot vote";
           
        } 
               
    };
               
    let _canVote=canVote(20);
                     
    console.log(_canVote)*/


    /* 
    make a function name
    prepo
    it takes one input 
    if input male=> return he
    if input female=> return she
    else=> return they
     */
 
    let prepo=(gender)=>{
        if(gender === "male"){
            return "he ";
        }else if(gender === "female"){
            return "she ";
        }else{
            return "they ";
        }
    };
    let _prepo = prepo("other");
    console.log(_prepo);