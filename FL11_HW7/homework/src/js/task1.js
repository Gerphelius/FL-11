let email = prompt('Please, enter your email');
const minEmailLength = 6;
const minPassLength = 5;

let userInfo = {
    'userEmail': 'user@gmail.com',
    'userPassword': 'UserPass'
}
let adminInfo = {
    'adminEmail': 'admin@gmail.com',
    'adminPassword': 'AdminPass'
}

if (email === null || !email) {
    alert('Canceled');
} else if (email.length < minEmailLength) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else if (email === userInfo['userEmail']) {
    let isUserPassword = prompt('Please, enter your password');
    
    if (isUserPassword === null || !isUserPassword) {
        alert('Canceled');
    } else if (isUserPassword !== userInfo['userPassword']) {
        alert('Wrong password');
    } else {
        let isConfirmed = confirm('Do you want to change your password?')

        if (isConfirmed) {
            let currentUserPass = prompt('Enter your current password');

            if (currentUserPass === userInfo['userPassword']) {
                let newUserPass = prompt('Enter your new password');

                if (newUserPass.length < minPassLength) {
                    alert('It\'s too short password. Sorry.')
                } else {
                    let confirmNewUserPass = prompt('Enter your new password again to confirm');

                    if (confirmNewUserPass !== newUserPass) {
                        alert('You wrote the wrong password.');
                    } else {
                        userInfo['userPassword'] = newUserPass;
                        alert('You have successfully changed your password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change.')
        }
    } 
} else if (email === adminInfo['adminEmail']) {
    let isAdminPassword = prompt('Please, enter your password');
    
    if (isAdminPassword === null || !isAdminPassword) {
        alert('Canceled');
    } else if (isAdminPassword !== adminInfo['adminPassword']) {
        alert('Wrong password');
    } else {
        let isConfirmed = confirm('Do you want to change your password?')

        if (isConfirmed) {
            let currentAdminPass = prompt('Enter your current password');

            if (currentAdminPass === adminInfo['adminPassword']) {
                let newAdminPass = prompt('Enter your new password');

                if (newAdminPass.length < minPassLength) {
                    alert('It\'s too short password. Sorry.')
                } else {
                    let confirmNewAdminPass = prompt('Enter your new password again to confirm');

                    if (confirmNewAdminPass !== newAdminPass) {
                        alert('You wrote the wrong password.');
                    } else {
                        adminInfo['adminPassword'] = newAdminPass;
                        alert('You have successfully changed your password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change.')
        }
    } 
} else {
    alert('I don\'t know you');
}