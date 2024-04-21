import './Layout.css'
import SearchBar from './SearchBar'
import List from './List'
import pic1 from '../Images/pic1.jpg';
import pic2 from '../Images/pic2.jpg';
import pic3 from '../Images/pic3.jpg';
import pic4 from '../Images/pic4.jpg';
import pic5 from '../Images/pic5.jpg';
import pic6 from '../Images/pic6.jpg';
const userList = [
    {
        id: 1,
        userImage: pic1,
        userName: 'Jessica Koal',
        userMessage: 'Hey, Joel, I here to help you out...',
        userChatTime: '11.26'
    },
    {
        id: 2,
        userImage: pic2,
        userName: 'Bolger',
        userMessage: 'I will send you all documentation as soon as possible',
        userChatTime: '12.26'
    },
    {
        id: 3,
        userImage: pic3,
        userName: 'Tamaara Suiale',
        userMessage: 'Are you going to business trip next week',
        userChatTime: '08.26'
    },
    {
        id: 4,
        userImage: pic4,
        userName: 'Sam Nielson',
        userMessage: 'I suggest to start new business soon',
        userChatTime: '08.26'
    },
    {
        id: 5,
        userImage: pic5,
        userName: 'Caroline Nexon',
        userMessage: 'We need to start new research center',
        userChatTime: '09.26'
    },
    {
        id: 6,
        userImage: pic6,
        userName: 'Patrick Koeler',
        userMessage: 'May be yes',
        userChatTime: '03.26'
    }
]


function Layout(){
    return(
       <>
       <div className="wrapper">
           <SearchBar></SearchBar>

          {userList.map((list)=>{
            return(
                <List userImage={list.userImage} userName={list.userName} userMessage={list.userMessage} userChatTime={list.userChatTime}></List>
            )
          })}
           
       </div>
       </>
    )
}

export default Layout