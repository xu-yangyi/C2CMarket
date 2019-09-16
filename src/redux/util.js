
export function getRedirectPath({type,avatar}) {
    let url=(type==='employee'?'/employee':'/employer');
    if(!avatar){
        url+='Info'
    }
    return url
}
