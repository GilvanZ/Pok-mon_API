
interface pokeProps{
  name:string;
  id:string;
  type:string;
  img:string;
  onClick:()=> void;
}

export default function Card({name, id, type, img, onClick}:pokeProps) {
  return (
    <div className='[perspective:1000px] flex flex-1 gap-1 p-2' 
         onClick={onClick}
        >
      <div className="bg-base-100 w-32 h-64 shadow-lg bg-white/50 rounded-xl backdrop-blur-[2px] border border-white/50 flex flex-col pl-1 pr-1 pt-1 hover:scale-105 duration-300 cursor-pointer ">
        <div className=' gap-1'>
          <img src={img} className='h-full w-full object-cover'/>
        </div>
        <div className='flex flex-col flex-1 p-1 text-center text-shadow-2xs '>
          <p id="name" className='flex-1'>{name}</p>
          <p id="id">ID:{id}</p>
          <p id="type">Type: {type}</p>
        </div>
      </div>
    </div>
  )
}
