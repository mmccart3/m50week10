import { useState, useEffect } from "react"
import {readCookie} from "../utils/utilities"

function Listusers(parameter) {
    const [localList, setLocalList] = useState();
    useEffect(() => {
        listUsers(parameter.setUserList, parameter.userList);
        },[parameter.userList]);
    async function listUsers(setUserList, userList) {
        try {
            const jwt_token = await readCookie('jwt_token')
            const response = await fetch(`${process.env.REACT_APP_API_URL}/users/listAllUsers`, {
                method: "GET",
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${jwt_token}`
                        }
            })
            const data = await response.json()

            console.log(data)
            await setUserList(data.userlist)
            setLocalList(userList)
        } catch (error) {
            console.log(error)
        }
    }
    function handleSubmit(event) {
        event.preventDefault();
        listUsers(parameter.setUserList, parameter.userList);
    }
    return (
        <div>
                        <hr></hr>
        <h2>List Users</h2>
            <button onClick={handleSubmit}>List all users</button>
            {localList && <h1>User list is :{localList.map((item,index) => {return (
                <div>
                    <h3>{item.username}</h3>
                </div>
            )})}</h1>}

        <hr></hr>


    </div>
    )
};

export default Listusers;