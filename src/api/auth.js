export function logIn(username,password){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const curUser = {username};
            localStorage.setItem('sessionToken','token from server');
            localStorage.setItem('curUser',JSON.stringify(curUser));
            resolve(curUser);
        },1000);
    });
}
export function logOut(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{ 
            localStorage.removeItem('sessionToken');
            localStorage.removeItem('curUser');
            resolve(null);
        },1000);
    });
}
export function isLoggedIn (){
    return localStorage.getItem('sessionToken');
}