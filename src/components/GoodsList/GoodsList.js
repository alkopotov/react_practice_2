import GoodsItem from "../GoodsItem/GoodsItem";
import styles from './GoodsList.module.css'

function GoodsList(props){
  const {goods, incrementCount, decrementCount, deleteGood} = props;

  return(
    <div className={styles.basket}>
      {goods.map(elem => <GoodsItem 
                            key={elem.id}
                            id={elem.id} 
                            name={elem.name}
                            price={elem.price} 
                            count={elem.count}
                            incrementCount={incrementCount} 
                            decrementCount={decrementCount}
                            deleteGood={deleteGood}
                          />)}
    </div>
  )
}

export default GoodsList