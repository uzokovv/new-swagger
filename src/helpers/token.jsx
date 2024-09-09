function getToken() {
    let token = localStorage.getItem('token');
    console.log(token);
    
    return token
}

export const config = {
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
}
export const configImg = {
    headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'multipart/form-data'
    }
}