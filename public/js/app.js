document.addEventListener('DOMContentLoaded', function() {
	const txtEmail = document.querySelector('#txtEmail');
	const txtPassword = document.querySelector('#txtPassword');
	const btnLogin = document.querySelector('#btnLogin');
	const btnSignup = document.querySelector('#btnSignup');
	const btnLogout = document.querySelector('#btnLogout');
	
	btnLogin.addEventListener('click', e => {
		const email = txtEmail.value;
		const pass = txtPassword.value;
		
		const auth = firebase.auth();
		
		const promise = auth.signInWithEmailAndPassword(email, pass);
		
		promise.catch(e => console.log(e.message));
	});
	
	btnSignup.addEventListener('click', e => {
		const email = txtEmail.value;
		const pass = txtPassword.value;
		
		const auth = firebase.auth();
		
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		
		promise.catch(e => console.log(e.message));
	});
	
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	});
	
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			console.log(firebaseUser);
			btnLogin.classList.add("hide");
			btnSignup.classList.add("hide");
			txtEmail.classList.add("hide");
			txtPassword.classList.add("hide");
			btnLogout.classList.remove("hide");
		} else {
			console.log('not logged in');
			btnLogin.classList.remove("hide");
			btnSignup.classList.remove("hide");
			txtEmail.classList.remove("hide");
			txtPassword.classList.remove("hide");
			btnLogout.classList.add("hide");
		}
	});
});