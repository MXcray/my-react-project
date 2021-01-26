import prof from '../profile.module.css';
import glob from '../../global/global.module.css';
import '../../../App.css';

const Status = (props) => {
    return (
    <div className={prof.status}>
        <p className={glob.subtitle}>{props.status}</p>
    </div>
    )
}

const Name = (props) => {
    return (
    <div className={`${prof.name} ${glob.title}`}>{props.name} {props.surname}</div>
    )
}

const ProfileInfo = (props) => {

    let statusElements = props.status
    .map( status => <Status status={status.status}/> )

    let nameElements = props.users
    .map( user => <Name name={user.name} surname={user.surname}/> )

    return (
    <div>
        <img className={prof.header} src="https://a-static.besthdwallpaper.com/tokyo-vurdalak-kaneki-ken-maska-kagune-oboi-2048x576-9705_71.jpg" alt="header"/>
        <div className="container">
            <div className={prof.infoBlock}>
                <div className={prof.avatar}>
                    <img src="https://avatarfiles.alphacoders.com/667/66748.jpg" alt="avatar"/>
                </div>
                <div className={prof.nameStatus}>
                        {nameElements}
                        {statusElements}
                </div>
            </div>
        </div>
    </div>
    );
}

export default ProfileInfo;