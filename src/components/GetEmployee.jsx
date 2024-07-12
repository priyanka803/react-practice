const GetEmployee=()=>{
    const id=8;
   const data= axios.get("http://localhost:8080/o/c/employeeprofiles/"+
    
    {}
   ).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    })
}