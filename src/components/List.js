import './List.css'

function List(props){
const userName = props.userName;
const userImage = props.userImage;
const userMessage = props.userMessage;
const userChatTime = props.userChatTime;

return(
<>
<div className="list-container">
<div className="list">
<div className="user-detail-left">
    <div className="user-img">
        <img src={userImage} alt={userName} className='img'></img>
    </div>
    <div className="user-content">
        <h4>{userName}</h4>
        <p>{userMessage}</p>
    </div>
</div>
<div className="user-detail-right">
    <p>{userChatTime}</p>
    <i class="fa-solid fa-star"></i>
</div>
</div>
</div>
</>
)
}

export default List;