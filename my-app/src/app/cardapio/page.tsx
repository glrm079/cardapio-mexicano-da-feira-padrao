import items from "/"; // Certifique-se de que o caminho do JSON está correto

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-center">
        <img src="/cardapio.png" alt="Cardápio" />
      </div>

      {/* Renderização da lista de itens */}
      {items.map((element) => {
        // Verifica se o índice é par ou ímpar
        return element.indice % 2 === 0 ? (
          <div key={element.indice} className="itemImpar h- w-full relative">
            <img
              className="absolute bottom-0 w-full h-2/4 z-10"
              src="/Fundo verde.png"
              alt="Fundo verde"
            />
          </div>
        ) : (
          <div key={element.indice} className="itemImpar h- w-full relative">
            <img
              className="absolute top-0 w-full h-2/4 z-10"
              src="/Fundo-verde-imp.png"
              alt="Fundo verde invertido"
            />
          </div>
        );
      })}
    </div>
  );
}