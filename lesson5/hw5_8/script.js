let userList = (users)=>{
    for (const user of users) {
        document.write(`<div>${user.name} ${user.id}</div>`)
    }
}
userList([
    {name: 'A', id: 1},
    {name: 'A', id: 1},
    {name: 'A', id: 1},
    {name: 'A', id: 1}

])