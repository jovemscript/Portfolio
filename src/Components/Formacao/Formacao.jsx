import style from "./Formacao.module.css"

function Formacao() {
  return (
    <div id="formacao">
      <h1 className={style.Titulos}>Formação</h1>
      <h2>Sistemas para Internet, Tecnologia da Informação.</h2> 
      <p className={style.Org}>Instituto Federal da Paraíba - IFPB</p>

      <h2>Introdução a HTML5, CSS3 e JavaScript. </h2>
      <p className={style.Org}>Plataforma Curso Em Video (Gustavo Guanabara)</p>

      <h2>Curso Básico de Bootstrap.</h2>
      <p className={style.Org}>Hcode Treinamentos</p>

      <h2>Javascript para Iniciantes. </h2>
      <p className={style.Org}>Canal Dev Aprender - Youtube</p>
      
      <h2>Figma, Criando Interfaces.</h2>
      <p className={style.Org}>Canal Gabriel Silvestri - Youtube</p>

      <h2>React.JS Completo.</h2>
      <p className={style.Org}>Matheus Battisti - Hora de Codar</p>

    </div>
  );
}

export default Formacao;
