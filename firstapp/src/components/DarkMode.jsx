function DarkMode(){

    let darkModeOn = true
    const toggleFunc = ()=>{

        if (darkModeOn){
            console.log('Switched Off')
        }else{
            console.log('Switched On')
        }
        darkModeOn= !darkModeOn
    }

    return(
        <>
        <h1>{darkModeOn? 'Dark Mode is On':'Light Mode is On'}</h1>
        <button onClick={toggleFunc}>Change Mode</button>
        </>
        
    )
    
}
export default DarkMode