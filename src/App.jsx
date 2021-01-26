import './App.css';
import Header from './components/header/header.jsx';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile'
import Dialogs from "./components/dialogs/dialogs";
import Friends from "./components/friends/friends";
import Settings from "./components/setting/settings";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
	return (
	<BrowserRouter>
		<div className="App">
			<Header />
			<div className="wrapper">
				<Nav />

				<Route path='/profile' render={ () => <Profile
				// profilePage={props.state.profilePage}
				statuses={props.state.statuses}
				users={props.state.users}
				posts={props.state.posts}
				/> }/>

				<Route path='/dialogs' render={ () => <Dialogs
				members={props.state.members}
				messages={props.state.messages}
				/> }/>

				<Route path='/friends' component={Friends}/>
				<Route path='/settings' component={Settings}/>
			</div>
		</div>
	</BrowserRouter>
	);
}

export default App;
