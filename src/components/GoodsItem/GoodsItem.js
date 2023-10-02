import styles from './GoodsItem.module.css'

function GoodsItem(props){

  const {id, name, price, count, incrementCount, decrementCount, deleteGood} = props

  function handler(e) {
    e.stopPropagation()
    // console.log(e.currentTarget.id)
    deleteGood(+e.target.id)
  }

  return(
    <div id={id} className={styles.good_item} onDoubleClick={handler}>
      <h2>{name}</h2>
      <h3>Цена: {price}</h3>
      <div className={styles.counter}>
        <button className={styles.down_button} onClick={() => decrementCount(id)}>-</button>
        <h4>{count}</h4>
        <button className={styles.up_button} onClick={() => incrementCount(id)}>+</button>
      </div>
    </div>
  )
}

export default GoodsItem