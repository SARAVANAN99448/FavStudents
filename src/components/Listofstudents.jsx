import { useContext, useState } from "react"
import { Arrcontext } from "./Context"
const Listofstudents = () => {
  const { ArrActivity, favourite, setfavourite } = useContext(Arrcontext);
  const [clicked,setclicked] = useState(true)
  const addfav = (ArrActivity) => {
    if (!favourite.includes(ArrActivity)) {
      setfavourite([...favourite, ArrActivity])
      setclicked(false)
    }
  };
  return (<>

    <div className="pl-10 mt-5 flex flex-col gap-3 ">
      {
        ArrActivity.map(function (item, index) {
          return <><h1>{index + 1}{"."} {item}
          <button className='  ml-44 bg-green-700 text-white p-1 rounded-md  '
              onClick={() => addfav(item)} >Add to favourite</button>
            </h1>
          </>
        })
      }

    </div>

  </>
  )
}
export default Listofstudents;