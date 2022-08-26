import './index.css'
import TeamMemberIcon from '../../Assets/teamMembersIcon.svg'
import right from '../../Assets/right.svg'
import wrong from '../../Assets/wrong.svg'

function TeamMembers (props) {
    return(
        <div className='teammembersparent'>
        <div className='teammemberswrapper'>
            <h1 style={{
                fontWeight: '600',
                fontSize: '22px',
                color: '#3B4F7D'
            }}>TEAM MEMBERS</h1>
        <div className='teammemberscon'>
            {props?.data?.map((item, index) => {
                return (
            <div className='teammemberinfo'>
                <img src={item?.TeamMemberImg} />
                <h5>{item?.TeamMemberName}</h5>
                <div className='teammemberdoxxed'>
                    <p>Doxxed</p>
                    <img src={item?.Doxxed ? right : wrong} />
                </div>
            </div>
                )
            })}
        </div>
        </div>
        </div>
    );
}
export default TeamMembers