import { Arrcontext } from "./Context"
import { useContext } from "react"
const Favstudents=()=>{
    const {ArrActivity,favourite,setfavourite}=useContext(Arrcontext)
    const removefav=(ArrActivity)=>{
        setfavourite(favourite.filter((fav)=>fav !== ArrActivity))

    }
    return(
          <div className="pl-10 mt-5 flex flex-col gap-3 ">
                
                { 
                
                   favourite.map(function (item, index) {
                        return <><h1>{index + 1}{"."} {item}
                        <button onClick={()=>removefav(item)} className="ml-44 bg-red-600 text-white p-1 rounded-md ">Remove</button></h1>
                        
                        </>
                    })
                }

            </div>
            
    )
    
}

export default Favstudents