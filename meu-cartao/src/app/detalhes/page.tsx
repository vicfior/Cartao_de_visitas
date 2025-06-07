import { jsonNoticiaRepository } from "@/Repositories/json-habilidade.repository";

export default async function Home() {
  const habilidades = await jsonNoticiaRepository.findAll();

  return (
  <div id="Pagina_detalhes">
        {habilidades.map(habilidade =>(
          <div id = "habilidades" key={habilidade.titulo}>
            <h2>{habilidade.titulo}</h2>
            <hr/>
            <h4>Habilidade número {habilidade.id}</h4>
            <p>{habilidade.descricao}</p>
          </div>
        ))}
  </div>
  );
}