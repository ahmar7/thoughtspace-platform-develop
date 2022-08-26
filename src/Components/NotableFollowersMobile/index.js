import NotableFollowerImg from '../../Assets/notablefollowerimg.png'
import TwitterIcon from '../../Assets/twitterIcon.svg'

function NotableFollowersMobile () {
    return(
        <div>
              <div style={{marginTop: "8vw"}} className='notablefollowerscardmobile'>
            <img style={{width: '30px', height: '30px'}} src={NotableFollowerImg} />
            <div className='nameboxmobile'>
                    <p>Justin  Miller</p>
                    <div className='namboxtwitter'>
                        <img src={TwitterIcon} />
                        <p>@justinmiller</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NotableFollowersMobile