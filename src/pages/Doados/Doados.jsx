import S from './doados.module.scss'
import livro from '../../assets/livro.png'
import livrosegundo from '../../assets/livrosegundo.png'


export default function Doados(){
    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxcard}>
                <article>
                    <img src={livro} alt="imagem de um livro que se chama o protagonista" />
                    <h3>O protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
                <article>
                    <img src={livrosegundo} alt="imagem de um livro que se chama o protagonista" />
                    <h3>Como eu era antes de você</h3>
                    <p>Jojo Moyes</p>
                    <p>Romance</p>
                </article>
               
            </section>
        </section>
    )
}