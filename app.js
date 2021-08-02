// INITIALIZE Github Class
const github = new Github;
// INITIALIZE UI class
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup',(e) => {
	//get input text
	const userText = e.target.value;

	if(userText !== ''){
		// console.log(userText);
		//make http call
		github.getUser(userText)
			.then(data => {
				// console.log(data);
				if (data.profile.message === 'Not Found'){
					// SHOW ALERT     alert('User Not Found');
					ui.showAlert('User not found','alert alert-danger');
				}
				else{
					// SHOW PROFILE   console.log(data);
					ui.showProfile(data.profile);
					ui.showRepos(data.repos);
				}
			})
	}
	else{
		// Clear Profile
		ui.clearProfile();

	}


}); 