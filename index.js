var users;

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
        response.json().then(res => {
            users = res;
            console.log(users)
            start()
        })
    })
}

function start() {
    let meuHtml = `
    <table>
            <tr>
                <th>
                    Username
                </th>
                <th>
                    Name
                </th>
                <th>
                    E-mail
                </th>
                <th>
                    City
                </th>
                <th>
                    Ride in group
                </th>
                <th>
                    Day of the week
                </th>
                <th>
                    Posts
                </th>
                <th>
                    Albums
                </th>
                <th>
                    Photos
                </th>
            </tr>
        `;
    for (let i = 0; i < users.length; i++) {

        meuHtml = meuHtml +
            `
                <tr class="item">
                    <td>
                        ${users[i].username}
                    </td>
                    <td> 
                        ${users[i].name}
                    </td>
                    <td class="destaque">
                        ${users[i].email}
                    </td>
                    <td class="destaque">
                       ${users[i].address.city}        
                    </td>
                    <td> </td>
                    <td> </td>
                    <td class="destaque"> </td>
                    <td class="destaque"> </td>
                    <td> </td>
                </tr>
            `
    }
    meuHtml = meuHtml + `</table>`
    document.getElementById('tabela').innerHTML = meuHtml

}