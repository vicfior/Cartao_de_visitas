import Link from 'next/link';

export default async function Home() {
  return (
    <div>
      <div id="principal">
        <img src="https://i.pinimg.com/736x/59/d4/65/59d4652b50f8e6239c3c3831a6c2946b.jpg" alt="Stitch"></img>
        <h1>Stitch, o Experimento 626.</h1>
        <h2>Astro do Rock</h2>
        <p>Email: stitch.626@hotmail.com</p>
        <p>LinkedIn: linkedin.com/in/stitch</p>
        <div id="detalhes">
          <p>
            "Ohana quer dizer família. Família quer dizer nunca abandonar ou esquecer"...
            Clique no botão abaixo para mais informações!
          </p>
        </div>
          <Link href="/detalhes">
              <button>
              Ver mais
              </button>
          </Link> 
      </div>
    </div>
  );
}
