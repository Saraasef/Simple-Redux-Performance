import { connect } from 'react-redux'
import store from './redux/store'
import { AddProductToCard, RemoveProductFromCard } from './redux/Actions'
import './Box1.css'
import { useState } from 'react'


const Product = (props) => {

    const [Count, setCount] = useState(0);

    store.subscribe(() => {
        let products = store.getState()[1];
        let index = products.findIndex(product => product.Id === String(props.id));
        setCount(products[index].Count)

    })

    const Add = () => {
        let productItem = { Id: props.id, Price: props.price, Image: props.image, Count: 1 };
        props.dispatch(AddProductToCard(productItem));

        // console.log(productItem)

      
        }
  const Remove = () => {
            let productItem = { Id: props.id, Price: props.price, Image: props.image, Count: 1 };
            props.dispatch(RemoveProductFromCard(productItem));
  }
        return (
            <card className="myBox">
                <img src="https://resize.sprintercdn.com/f/550x550/products/0266702/nike-star-runner-2_0266702_00_4_3783340611.jpg" alt="shoes" className="Shoes"/>
                <h1>{props.id}</h1>
                <h1>{props.price}</h1>
                <button type="button" onClick={Add}>Add ({Count})</button>
                <button type="button" onClick={Remove}>Remove ({Count})</button>
               
            </card>
        )
    }

export default connect()(Product);