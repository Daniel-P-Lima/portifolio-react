import styles from "./Inicio.module.css";
import posts from "../../assets/json/posts.json";
import Post from "../../componentes/Post";

export default function Inicio() {
  return (
    <main>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post}></Post>
          </li>
        ))}
      </ul>
    </main>
  );
}
