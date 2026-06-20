import styles from "./Todoitems.module.css";
import Todoitem from "./Todoitem";
const Todoitems = ({ todoitem, ondelete }) => {
  return (
    <>
      <div className={styles['item-container']}>
        {todoitem.map((item) => (
          <Todoitem todoname={item.name} date={item.date} ondelete={ondelete}></Todoitem>
        ))}
      </div>
    </>
  );
};

export default Todoitems;
