const apis ={
    getProjects: ()=>{
        fetch(`http://localhost:5001/api/projects`,{
            method:'GET',

        })
    }
}

export default apis;