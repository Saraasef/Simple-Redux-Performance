import * as actions from './type'
export default function reducer(state = [0, []], action) {
    switch (action.type) {

        case actions.ADDTOWALLET:
            return state.map(n => state.indexOf(n) === 0 ? action.payload : n);

        case actions.ADDPRODUCTTOCARD:
            const products = [...state][1];
            if (products.length > 0) {
                let index = products.findIndex(product => product.id === action.payload.id);
                if (index >= 0)
                    products[index].Count++;
                else
                    products.push(action.payload)
            }
            else {
                products.push(action.payload)
            }

            

            state[1] = products;
    
            return state;

            case actions.REMOVEPRODUCTFROMCARD:
                const products1 = [...state][1];
                if (products1.length > 0) {
                    let index = products1.findIndex(product => product.Id === action.payload.Id);
                    // console.log(index)
                    if (index >= 0)
                        products1[index].Count--;
                    else
                        products1.push(action.payload)
                }
                else {
                    products1.push(action.payload)
                }
                state[1] = products1;
    

                return state;
        default:
            return state
    }
}
