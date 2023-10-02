import { useState } from 'react';
import GoodsList from './components/GoodsList/GoodsList';
import './App.css'


function App() {

  const data = [ 
    {id: 1, name: 'Велосипед', price: 1000, count: 1}, 
    {id: 2, name: 'Самокат', price: 700, count: 1}, 
    {id: 3, name: 'Ролики', price: 1300, count: 2}, 
    {id: 4, name: 'Сноуборд', price: 19000, count: 4}
    ];
    const [goods, setGoods] = useState(data);

    function addNewGood() {
      let newGoodInput = prompt('Введите наименование товара и цену', 'Название цена').split(' ')
      while (isNaN(newGoodInput[1])) {
        let input = prompt('Вы ввели нечисловое значение цены. Повторите ввод', 'Название цена')
        if (input) {
          newGoodInput = input.split(' ')
        } else {
          return
        }
      }
      let newGood = {
        id: Date.now(),
        name: newGoodInput[0],
        price: newGoodInput[1],
        count: 1
      }
      setGoods([...goods, newGood]);
    }

    function incrementCount(id) {
      let updatedGoods = goods.map(elem => {
        if(elem.id === id) {
          if (elem.count < 25) {
            ++elem.count
          }
        }
        return elem
      })
      setGoods(updatedGoods)
    }

    function deleteGood(id) {
      let updatedGoods = goods.filter(elem => elem.id !== id)
      setGoods(updatedGoods)
    }

    function decrementCount(id) {

      if (goods.find(el => el.id === id).count === 1) {
        deleteGood(id)
      } else {
        let updatedGoods = goods.map(elem => {
          if(elem.id === id) {
            if (elem.count > 1) {
              --elem.count
            }
          }
          return elem
        })
        setGoods(updatedGoods)
      }
    }

  return (
    <div className='wrapper'>
      <h1>Ваша корзина</h1>
      <button className='add_button' onClick={()=>addNewGood()}>Добавить новый товар</button>
      <GoodsList
        goods={goods} 
        incrementCount={incrementCount} 
        decrementCount={decrementCount} 
        deleteGood={deleteGood}
        />
    </div>
  );
}

export default App;
