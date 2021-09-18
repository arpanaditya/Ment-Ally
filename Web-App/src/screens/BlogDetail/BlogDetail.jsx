import styles from "./BlogDetail.module.css";
import { useLocation } from "react-router-dom";
function BlogDetail() {
  const { state } = useLocation();

  const { data } = state;

  return (
    <div className={styles.mainDetailPage}>
      <div className={styles.maindetail}>
        <div>
          {" "}
          <img className={styles.BLOGimg} src={data.url} alt="pic" />
        </div>

        <div className={styles.blogContent}>
          <h1
            style={{
              marginBottom: 20,
            }}
          >
            {data.title}
          </h1>
          {data.description}
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
