let allRead = false;

let notifications = [
{message: 'Lorem', read: true},
{message: 'Ipsum', read: true},
{message: 'Dolor', read: true},
{message: 'Sit', read: false},
{message: 'Amet', read: true}
];

notifications.map((data)=>{
    return data.read = allRead;
})

console.log(notifications);



