

export default function Home() {
  return (
    <div className="mainDiv flex items-center  flex-col justify-between h-full">
      {/* logo */}
      <img className="w-36 p-5" src="/logo.png" alt="" />

      {/* imagem em destaque  */}
      <img className="mainImage" src="/main-image.png" alt="" />

      {/* rodapé da pagina */}
      <div className="flex flex-col justify-center items-center pb-4 z-40">
        {/* botão ver mais */}
        <a href="/cardapio">
          <img className="h-14 " src="/down-arrow-group.png" alt="" />
        </a>
      </div>
    <img className="absolute bottom-0 w-full h-24 z-10 bottom-colors-desktop" src="/bottom-colors.png" alt="" />
    <img className="absolute bottom-0 w-full h-44 z-10 bottom-colors-mobal" src="/bottom-colors-mobal.png" alt="" />
    </div>
  );
}
