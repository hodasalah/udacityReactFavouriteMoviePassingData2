import React, { Component } from 'react';

class UsersList extends Component{
	render(){
    	const {usersWhoLiked , users}=this.props;
      	
   		return(
          <ul>
            {usersWhoLiked.map(user=><li key={user}>{users[user].name}</li>)}
          </ul>
        )
        
    
    }

}
export default UsersList;