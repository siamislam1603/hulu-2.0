import requests from "../../utils/requests"
import {useRouter} from 'next/router';

function Nav() {
    const scrollOnXAxis=(e)=>{
        e.currentTarget.scrollBy({
            left: e.deltaY < 0 ? -30 : 30,
        });
    }
    const router=useRouter();
  return (
    <nav className="relative">
        <div className="flex px-10 sm:px-20 whitespace-nowrap
        space-x-10 sm:space-x-20 overflow-x-scroll overflow-y-hidden text-xl sm:text-2xl scrollbar-hide h-auto" onWheel={scrollOnXAxis}>
            {Object.entries(requests).map(([key,{title,url}])=>(
                <h2 key={key} className='cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-100 last:pr-24' onClick={()=>router.push(`/?genre=${key}`)}>{title}</h2>
            ))}
        </div>
        <div className="absolute top-0 right-0 w-1/12 h-10 bg-gradient-to-l from-[#06202a]"></div>
    </nav>
  )
}

export default Nav