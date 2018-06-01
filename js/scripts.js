var users = [
    {
        name: 'jose',
        lastname: 'perez',
        age: 21,
        children: ['pedro', 'juan', 'lola'],
        email: 'jp@mail.com',
    },
    {
        name: 'maria',
        lastname: 'dominguez',
        age: 33,
        children: ['ivan', 'martina'],
        email: 'maria.d@mail.com',
    },
    {
        name: 'juan',
        lastname: 'garcia',
        age: 45,
        children: [],
        email: 'jgarcia@mail.com',
    },
    {
        name: 'Carla',
        lastname: 'gimenez',
        age: 35,
        children: ['guillermo'],
        email: 'carlagimenez@mail.com',
    }
]
function filterByAge(age) {
    for (var i = 0; i < users.length; i++) {
        if (age > users[i].age) {
            console.log(assamble(users[i]));
        }
    }
}
/*


     function assamble(user){
        return user.lastaname 
        + ' , ' 
        + user.name 
        + ' tiene ' 
        + user.children.length + ' hijos';
     }*/

var listUsers = {
    users: [],
    assamble: function (user) {
        return '<tr>'
       + '<td>'+ user.name + '</td>'
       + '<td>'+ user.age +'</td>'
        +'<td>'+ user.email +'</td>'
        +'<td>'+ user.profile +'</td>'
        +'<td>'+ user.country +'</td>'
       + '<td>'+ user.salary +' </td>'
      '</tr>"';
        return user.lastaname
            + ' , '
            + user.Name
            + ' tiene '
            + user.children.length + ' hijos';

    },
    iterate: function (userList) {
        for (var i = 0; i < listUsers.users.length; i++) {
            $('#users tbody').append(listUsers.assamble(listUsers.users[i]));
        }
    },
    setUsers: function (users) {
        listUsers.users = users;
    }
}

$('#users tbody').append();

setUsers: function (users) {
    listUsers.users= users;
}

clearTable: function (){
$('#users tbody').html('');
}

$('#clickme').on('click',function(){
    listUsers.setUsers(usersItem);
    listUsers.iterate();
});

$('#clear').on('click', function(){
    listUsers.setUsers(usersItem);
    listUsers.iterate();
});