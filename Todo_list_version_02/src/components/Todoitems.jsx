import styles from "./Todoitem.module.css"
import Todoitem from "../components/Todoitem";
const Todoitems = ({Items}) =>{
  return(
  <div className={styles.container}>
        <Todoitem item="Go to college" date="06/06/2026"></Todoitem>
        <Todoitem item="Buy milk" date="06/06/2026"></Todoitem>
      </div>
  );
};
export default Todoitems;