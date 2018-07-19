var users = [
{
    name: 'ivan',
    lastname: 'krysiuk',
    age: 24,
    children: ['damian' , 'sol', 'gabriel'],
    email: 'ivankrysiuk@gmail.com'
},
{
    name: 'matias',
    lastname: 'alvarez',
    age: 22,
    children: ['ignacio' , 'fabio'],
    email: 'mati293@gmail.com'
},
{
    name: 'alexis',
    lastname: 'sanchez',
    age: 28,
    children: ['juan', 'nacho'],
    email: 'alexiscentral@gmail.com'
},
{
    name: 'tincho',
    lastname: 'wanger',
    age: 26,
    children: ['fernando', 'sergio'],
    email: 'tinchowanger22@gmail.com'
},                

{
    name: 'lucas',
    lastname: 'aguero',
    age: 19,
    children: ['facundo', 'laura'],
    email: 'lucas681@gmail.com'
}                
]

var listusers = {
    users: [],
    assamble: function(user){

    return '<tr>'
    +'<td>'+ user.name +'</td>'
    +'<td>'+ user.age + '</td>'
    +'<td>'+ user.email + '</td>'
    +'<td>'+ user.profile +'</td>'
    +'<td>'+ user.country +'</td>'
    +'<td>'+ user.salary +'</td>'
  +'</tr>';   },

    
     iterate: function(){
        for (var i=0; i < listusers.users.length; i++){
            $('#usuarios tbody').append( listusers.assamble(listusers.users[i])
                                          ) ;
                                                        }
                        },
    setUsers: function (users){
        listusers.users = users;
                                },
    clearTable: function (user){
        $('#usuarios tbody').html('')
                                }
                    }

$('#clickeame').on('click',function(){
listusers.setUsers(users);
listusers.iterate();
                                        }
)
 $('#clear').on('click', function(){
  listusers.clearTable();  
                                     });