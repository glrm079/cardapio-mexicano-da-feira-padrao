

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-center">
        <img src="/cardapio.png" alt="Cardápio" />
      </div>
      <div className="itemImpar h- w-full relative">
        <img className="absolute bottom-0 w-full h-2/4 z-10 " src="/Fundo verde.png" alt="" />
      </div>
      <div className="itemImpar h- w-full relative">
        <img className="absolute top-0 w-full h-2/4 z-10 " src="/Fundo-verde-imp.png" alt="" />
      </div>
    </div>
  );
}
