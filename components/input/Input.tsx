import { Search } from 'lucide-react';

export default function Input() {
  return (
    <div className="flex border-1 w-64 sm:w-90 sm:h-10 bg-white/50 rounded-xl backdrop-blur-[4px] border border-white/70"> 
      <input className='flex flex-1 outline-none bg-transparent text-center'></input>
      <button>
        <Search className='h-full flex pr-2'/>
      </button>
      
    </div>
  )
}
