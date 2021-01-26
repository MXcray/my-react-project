import prof from '../profile.module.css';
import Post from './post/Post';
// import glob from '../../global/global.module.css';

const MyPosts = (props) => {

    return (
    <div className='container'>
        <div className={prof.addArea}>
            <textarea className={prof.postArea} placeholder={'Поделитесь своими мыслями'} cols='100' rows='5'></textarea>
            <button className={prof.addBtn}>Добавить запись</button>
        </div>
        <div className={prof.posts}>
            <Post posts={props.posts} users={props.users}/>
        </div>
    </div>
    )
}

export default MyPosts;