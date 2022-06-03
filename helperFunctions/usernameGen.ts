export function usernameGen(length) {
    let result = '';
    const characters = `'你好喂èíàóえこれúñç@들은서ระกาศถ่ายทอดสดศึกฟุตบอล비스호출에추èящий%用語ăをțどん#ね.[]{}`;
    const charactersLength = characters.length;
    for (let i = 0; i< length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result;
}

export function usernameArr(arrLength, usernameLength) {
    let arr = [];
    for (let i = 0; i < arrLength; i++) {
        arr.push(usernameGen(usernameLength));
    }
    return arr;
}