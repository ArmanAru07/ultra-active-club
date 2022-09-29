// use local storage to manage user data
const addToDb = id =>{
    let gymUser = {};

    const storedUser = localStorage.getItem('gym-user');
    if(storedUser){
        gymUser = JSON.parse(storedUser);
    }

    // add time
    const time = gymUser[id];
    if(time){
        const newTime = time + 1;
        gymUser[id] = newTime;
    }
    else{
        gymUser[id] = 1;
    }
    localStorage.setItem('gym-user', JSON.stringify(gymUser));
}

const removeFromDb = id =>{
    const storedUser = localStorage.getItem('gym-user');
    if(storedUser){
        const gymUser = JSON.parse(storedUser);
        if(id in gymUser){
            delete gymUser[id];
            localStorage.setItem('gym-user', JSON.stringify(gymUser));
        }
    }
}

const deletegymUser = () =>{
    localStorage.removeItem('gym-user');
}

export {
    addToDb, 
    removeFromDb,
    deletegymUser
}