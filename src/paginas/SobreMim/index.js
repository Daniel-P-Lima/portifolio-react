import PostModelo from "componentes/PostModelo"
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from "./SobreMim.module.css"
export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa}>
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Daniel!
            </h3>

            
        </PostModelo>
        
    )
}