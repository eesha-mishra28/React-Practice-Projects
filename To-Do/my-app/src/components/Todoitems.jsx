import styles from "./Todoitems.module.css";
import Todoitem from "./Todoitem";
const Todoitems = ({ todoitem }) => {
  return (
    <>
      <div className={styles['item-container']}>
        {todoitem.map((item) => (
          <Todoitem todoname={item.name} date={item.date}></Todoitem>
        ))}
      </div>
    </>
  );
};

export default Todoitems;
