export const getTimeDate=(date)=>{
    const timeStamp=date.seconds*1000
  
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    const formatDate=new Intl.DateTimeFormat(navigator.language,options).format(timeStamp)
  .replaceAll('.','/')
  
  return formatDate
  }
