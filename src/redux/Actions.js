import * as actions from './type'

export function setWalletValue(value) {
    return {
      type: actions.ADDTOWALLET,
      payload : value
    }
  }
  
export function AddProductToCard(value) {
  return {
    type: actions.ADDPRODUCTTOCARD,
    payload : value
  }
}

export function RemoveProductFromCard(value) {
  return {
    type: actions.REMOVEPRODUCTFROMCARD,
    payload : value
  }
}