import './App.css';
import Header from './header';
import Nav from './nav';
import Profile from './profile'

const App = () => {
	return (
		<div className="App">
			<Header />
			<div className="wrapper">
				<Nav />
				<Profile />
			</div>
		</div>
	);
}

export default App;
