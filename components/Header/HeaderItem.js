const HeaderItem=({title,Icon})=>{
    return <div className="group cursor-pointer flex flex-col items-center w-12 sm:w-20 hover:text-white">
        <Icon className='text-2xl group-hover:animate-bounce'/>
        <p className="opacity-0 tracking-wide group-hover:opacity-100 uppercase">{title}</p>
    </div>
}

export default HeaderItem;