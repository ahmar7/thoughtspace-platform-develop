import './index.css'
import TwitterIcon from '../../Assets/twitterIcon.svg'
import DiscordIcon from '../../Assets/discordIcon.svg'
import TikTokIcon from '../../Assets/tiktokIcon.svg'

function FollowersSec (props) {
    return(
        <div className='followerseccon'>
            <div className='followersec'>
                <div className="followersbox">
                    <img src={TwitterIcon} />
                    <p>{props?.TwitterFollowers}</p>
                </div>
                <div className="followersbox">
                    <img src={DiscordIcon} />
                    <p>{props?.DiscordIcon}</p>
                </div>
                <div className="followersbox">
                    <img src={TikTokIcon} />
                    <p>{props?.TiktokFollowers}</p>
                </div>
            </div>
        </div>
    );
}
export default FollowersSec