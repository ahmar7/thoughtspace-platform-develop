import './index.css'
import ConnectWalletIcon from "../../Assets/mobilewallet.svg";
import settingIcon from "../../Assets/mobileSetting.svg";
import Avatar from "../../Assets/Avatar.svg";
import Logo from '../../Assets/MobileLogo.png'

function MobileNav () {
    return(
        <div>
        <div className='mobilenavcon'>
            <div style={{marginRight: '15px'}} className="header-sec2">
        <button>
          <span>
            <img src={ConnectWalletIcon} />
          </span>
          Connect Wallet
        </button>
        <img style={{ marginTop: "5px" }} src={settingIcon} />
        <img style={{ marginTop: "5px", width: '38px' }} src={Avatar} />
      </div>
        </div>
        <div className='mobileheaderlogo'>
        <img src={Logo} />
      </div>
        </div>
    )
}
export default MobileNav