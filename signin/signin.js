let input1 = document.getElementsByTagName('input')[0];
let input2 = document.getElementsByTagName('input')[0];
let btn = document.getElementsByTagName('button')[0];


let userme = {
    name: 'evgeny',
    email: 'volovlikov@mail.ru'
};

btn.onclick = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => {
        if (user.name === userme.name) {
            console.log(true);
        } else {
            console.log(false);
        }
    })




    //  .then(response => response.json())
    // .then(user => {
    //     if (user.id) {
    //         this.props.loadUser(user);
    //         this.props.OnRouteChange('home')
    //     }
    // })












