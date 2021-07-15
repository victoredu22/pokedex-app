const formatId = ( url)=>{
  const urlParts = url.split('/');      
  const id = urlParts[ urlParts.length - 2 ];
  return id;
}

export {formatId}