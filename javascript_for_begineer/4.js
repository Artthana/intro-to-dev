const age = 25;

if ( age > 18 ) {
    console.log('Age is more than 18');
} else {
    console.log('Age is less than or rqual to 18');
}

let password = '12345678';

if (password === ''){
    console.log('Password is requi');
} else if (password.length >= 8 && password.length <= 12){
    console.log('Password is vaild');
} else {
    console.log('Password is Invaloid');
}