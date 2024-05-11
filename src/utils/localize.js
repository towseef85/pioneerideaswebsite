
export const localise=(v1, v2)=>{
    const  dir  = localStorage.getItem('language') || 'en';

    return dir === 'en' ? v1 : v2

}