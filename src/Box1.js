import { useState } from 'react'
import { connect } from 'react-redux'
import store from './redux/store'
import { setWalletValue } from './redux/Actions'
import './Box1.css'
const Box1 = ({ dispatch }) => {
    const [Wallet, setWallet] = useState(store.getState()[0])

    store.subscribe(() => {
        setWallet(store.getState()[0])
    })
  const UpWallet = (data) => {
    dispatch(setWalletValue(data))
  }

    return (
        <div className="myBox">
            <h1>Site Box{Wallet}</h1>
            <button type="button" onClick={()=>UpWallet(10000)}>Down Wallet</button>
        </div>
    )
}
export default connect()(Box1);