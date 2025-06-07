import { jsonNoticiaRepository } from "@/Repositories/json-habilidade.repository";

export default async function Home() {
  const habilidades = await jsonNoticiaRepository.findAll();

  return (
  <div>
        {habilidades.map(habilidade =>(
          <div key={habilidade.titulo}>
            <h1>{habilidade.titulo}</h1>
            <h4>Habilidade número:{habilidade.id}</h4>
            <p>{habilidade.descricao}</p>
            <hr/>
          </div>
        ))}
  </div>
  );
}