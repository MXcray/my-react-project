import msg from './dialogs.module.css';
import {NavLink} from "react-router-dom";

const Member = (props) => {
    let path = "dialogs/" + props.id;

    return (
    <div className={msg.member}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

const Message = (props) => {
    return (
    <div className={msg.message}>
        {props.message}
    </div>
    )
}

const Dialogs = (props) => {

    let membersElements = props.members
    .map( member => <Member name={member.name} id={member.id} /> )

    let messagesElements = props.messages
    .map( message => <Message message={message.message}/> )

    return (
    <div className={msg.dialogs}>
        <div className={msg.members}>
            {membersElements}
        </div>
        <div className={msg.messages}>
            {messagesElements}
        </div>
    </div>
    );
}

export default Dialogs;