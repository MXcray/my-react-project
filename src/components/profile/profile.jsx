import MyPosts from './myPosts/MyPosts';
import ProfileInfo from "./profileInfo/ProfileInfo";
import prof from './profile.module.css';

const Profile = (props) => {
    return (
    <div className={prof.profile}>
        <ProfileInfo users={props.users} status={props.statuses}/>
        <MyPosts posts={props.posts} users={props.users} />
    </div>
    )
}

export default Profile;