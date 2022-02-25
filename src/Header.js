import { useState } from 'react'
import { connect } from 'react-redux'
import store from './redux/store'
import { setWalletValue } from './redux/Actions'

const Header = (props) => {
  //local state
    const [Wallet, setWallet] = useState(store.getState()[0])
//gosh be zang taghir bash
    store.subscribe(() => {
        setWallet(store.getState()[0])
    })
    //dastor bede store ghesmate wallet taghir kone
  const UpWallet = (data) => {
    props.dispatch(setWalletValue(data))
  }

    return (
        <div>
            <h1>Site Header{Wallet}</h1>
            <button type="button" onClick={()=>UpWallet(40000)}>Up Wallet</button>
            
        </div>
    )
}
//ejaze dari az store estefade koni ALAN VASL SHODI
export default connect()(Header);