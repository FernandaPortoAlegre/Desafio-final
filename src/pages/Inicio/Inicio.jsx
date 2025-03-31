import S from './inicio.module.scss'
import read from '../../assets/reading.png'
import balance from '../../assets/balance.png'
import community from '../../assets/community.png'
import transform from '../../assets/transform.png'


export default function Inicio(){
    return(
        <section>
            <section className={S.post}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
        <section className={S.devoDoar}>
        <div>
            <h2>Por que devo Doar</h2>
        </div>
        <section className={S.boxCard}>
          <article>
            <img src={community} alt="imagem que representa redução a exclusão social" />
            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </article>
          <article>
            <img src={read} alt="imagem de pessoa lendo um livro" />
            <p> Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </article>
          <article>
            <img src={transform} alt="imagem de força" />
            <p> Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </article>
          <article>
            <img src={balance} alt="imagem de uma balança" />
            <p> Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          </article>
        </section>
      </section>
    </section>
    )
}