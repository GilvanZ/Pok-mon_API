import Card from "@/components/card/Card"
import Input from "@/components/input/Input";

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-2  bg-[url('/img/bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className=" border borde-1 border-zinc-400 w-full h-16 gap-1 bg-[url('/img/header.jpg')] bg-center">
      
        header
      </div>
      <div className="flex p-1 justify-center ">
        <Input/>
      </div>
      <div id="pokemons" className="flex-1 flex flex-col sm:flex-row  gap-2 p-2 overflow-y-auto ">
        <div className="flex flex-1 justify-center gap-1 flex-wrap overflow-y-auto min-h-0 ">
          {/* fazer um map aqui na api que vai vir com os dados, no map coloca o card e a funcao que vai receber os dados necessarios para mostrar na div do lado */}
          <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
        </div>
        <div className="flex flex-1 bg-white/5 rounded-xl backdrop-blur-[4px] sm:backdrop-blur-[8px] border border-white/30">
        </div>
      </div>
    </div>
  );
}
