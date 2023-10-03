import styles from './GoodsItem.module.css'

function GoodsItem(props){

  const {id, name, price, count, incrementCount, decrementCount, deleteGood} = props

  return(
    <div className={styles.good_item} onDoubleClick={(e) => deleteGood(id)}>
      <h2>{name}</h2>
      <h3>Цена: {price}</h3>
      <div className={styles.counter}>
        <button className={styles.down_button} onClick={(e) => decrementCount(id)} onDoubleClick={(e) => e.stopPropagation()}>-</button>
        <h4>{count}</h4>
        <button className={styles.up_button} onClick={() => incrementCount(id)} onDoubleClick={(e) => e.stopPropagation()}>+</button>
      </div>
    </div>
  )
}

export default GoodsItem