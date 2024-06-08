


export const sortDate=(array)=>{
   
  const sort = array.slice().sort((a,b)=>{
        const dateA=a.date
        const dateB=b.date
        if(dateA>dateB)return -1
        else return 1
    })
return sort
}
