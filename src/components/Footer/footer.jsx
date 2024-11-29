import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import S from './footer.module.scss'

export default function footer(){
    return(
        <footer>
            <section className={S.boxSocial}>
               <h3>4002-8922</h3>
        <nav>
            <a href=""><img src={facebook} alt="imagem do facebook" /></a>
            <a href=""><img src={twitter} alt="imagem do twitter" /></a>
            <a href=""><img src={youtube} alt="imagem do youtube" /></a>
            <a href=""><img src={linkedin} alt="imagem do linkedin" /></a>
            <a href=""><img src={instagram} alt="imagem do instagram" /></a>
        </nav>

            </section>
            <section className={S.boxTexto}>
               <p>Layout desenvolvido pela Vai na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}