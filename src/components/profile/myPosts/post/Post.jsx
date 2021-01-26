import prof from "../../profile.module.css";

const Name = (props) => {
    return (
    <div className={prof.postName}>
        {props.name} {props.surname}
    </div>
    )
}

const Content = (props) => {
    return (
    <div>
        {props.post}
    </div>
    )
}

const Post = (props) => {

    let nameElements = props.users
    .map( name => <Name name={`${name.name} ${name.surname}`}/> )

    let contentElements = props.posts
    .map( (post) => <Content post={post.post}/> )

    return (
    <div className={prof.postItem}>
        <div className={prof.postAvatar}>
            <img src="https://avatarfiles.alphacoders.com/667/66748.jpg" alt=""/>
        </div>
        <div className={prof.postContent}>
            <div className={prof.postName}>
                {nameElements}
            </div>
            <div className={prof.postText}>
                {contentElements}
            </div>
            <button className={prof.likeBtn}>
                <img src="https://орфографика.рф/800/600/https/img.icons8.com/pastel-glyph/2x/facebook-like.png" alt=""/>
            </button>
            <p className={prof.likesCount}>0</p>
        </div>
    </div>
    )
}

export default Post;