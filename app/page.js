import Groups from "./pages/groups/groups";
import styles from "./page.module.css";
import Queue from "./pages/queue/queue";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`col-6 overflow-auto ${styles['scroll-100']}`}>
          <Groups />
        </div>
        <div className="col-6">
          <Queue />
        </div>
      </div>
    </div>
  );
}
