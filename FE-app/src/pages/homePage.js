import ApplyCard from "../components/applyCards";
import FormPropsTextFields from "../components/serachField";
// import { _ } from 'lodash';
// import api from '../api/api'
import { useEffect, useState } from "react";


const HomePage = () =>{

    const cards = (<div style={{display:'flex',justifyContent:'center', flexWrap:'wrap'}}>
        {Array.from({ length: 6 }, (_, i) => <ApplyCard/>)}
    </div>)
    // const fetchProjects = async()=>{
    //     try{
    //     const projectResponse = await api .getProjects()
    //     .then(response=> response.json())
    //     .then(data=>data);

    //     console.log('projectResponse',projectResponse)
    //     }catch(err){
    //     console.log('api err',err)
    //     }
    // }

    const [users, setUsers] = useState([])

    const fetchProjects = () => {
        
      fetch("http://localhost:5001/api/projects")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
        .catch((error) => console.log(error));
    }

    useEffect(()=>{
        fetchProjects();
    },[]);

    console.log('projects:',users)

    return(
        <>
        <FormPropsTextFields/>
        <div >
            {cards}
        </div>

        </>
    )
}

export default HomePage;