

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-center">
        <img src="/cardapio.png" alt="Cardápio" />
      </div><
        div  className="itemImpar h- w-full relative">
            <div className="flex justify-center items-center z-20 flex-col">
              <img className="z-20" src="/img-combo.png" alt="" />
              <img  className="z-20 w-52" src="/combos-titulo.png" alt="" />
            </div>
            <img
              className="absolute bottom-0 w-full h-2/4"
              src="/Fundo verde.png"
              alt="Fundo verde"
            />
          </div>
          <div className="itemImpar h- w-full relative">
            <div className="flex justify-center items-center z-20 flex-col">
              <img className="z-20" src="/img-combo.png" alt="" />
              <img  className="z-20 w-52" src="/combos-titulo.png" alt="" />
            </div>
            <img
              className="absolute top-0 w-full h-2/4"
              src="/Fundo-verde-imp.png"
              alt="Fundo verde invertido"
            />
          </div>
      
    </div>
  );
}