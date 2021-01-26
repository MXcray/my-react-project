import head from '../header/header.module.css';
import glob from '../global/global.module.css';

const Header = () => {
    return (
    <header className={head.header}>
        <div className="container">
            <div className={head.logo}>
                <img src="https://cdn.auth0.com/blog/react-js/react.png" alt='logo' />
                <h3 className={`${glob.title} ${head.title}`}>My <span> React</span> project</h3>
            </div>
        </div>
    </header>
    );
}

export default Header;