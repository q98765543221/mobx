import { Promise } from "q";

export function checkUser(email){
    return new Promise((resolve, reject) => {
        console.log('checkUser');
        setTimeout(() => {
            email.length > 8 ? resolve() : reject();
        }, 500);
    });
}

export function enrollUser(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}