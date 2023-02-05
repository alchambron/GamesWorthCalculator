export default async function Fetch(url){
  
  const resp = await fetch(url);
  const data = await resp.json();

  return(
    data
  );
};