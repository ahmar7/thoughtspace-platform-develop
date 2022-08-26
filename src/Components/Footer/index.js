import './index.css'
import SolSeekersIcon from '../../Assets/solSeekersIcon.svg'

function Footer () {
    return(
        <div className='footerCon'>
            <div className='footersec'>
                <p>Powered  By  SolSeekers</p>
                <img src={SolSeekersIcon} />
            </div>
        </div>
    );
}
export default Footer