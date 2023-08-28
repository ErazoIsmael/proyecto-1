const getRandomElement=(array)=>{
    const indexRamdon=Math.floor(Math.random()*array.length);
    return array[indexRamdon]
}
export default getRandomElement