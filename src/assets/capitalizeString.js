export const capitalize=(string)=>{
    const capitalizeString= string.split(' ').map(value=>{
     if(!value)return;
     return value[0].toUpperCase()+value.slice(1)
    }).join(' ')
    return capitalizeString
    }