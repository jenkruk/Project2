
// add admin cloud function
const adminForm = document.querySelector('.admin-actions');
adminForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const adminEmail = document.querySelector('#admin-email').value;
const addAdminRole = functions.httpsCallable('addAdminRole');
addAdminRole({email:adminEmail}).then(result=>{
  console.log(result);
  closeOneModal("modal-create");
 
})
});
document.getElementById("removeAdmin").addEventListener('click',(e)=>{
  e.preventDefault();
  const adminEmail = document.querySelector('#admin-email').value;
const removeAdminRole = functions.httpsCallable('removeAdminRole');
removeAdminRole({email:adminEmail}).then(result=>{
  console.log(result,"remove admin");
   closeOneModal("modal-create");
})
});

function closeOneModal(modalId) {

  // get modal
  const modal = document.getElementById(modalId);

  // change state like in hidden modal
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  modal.setAttribute('style', 'display: none');

}


// listen for auth status changes
auth.onAuthStateChanged(user => {


    if (user) {
      user.getIdTokenResult().then(idTokenResult=>{
        console.log(idTokenResult.claims)
        user.admin = idTokenResult.claims.admin;
         setupUI(user);
      })
        console.log(user, "user logged in")
    //   db.collection('guides').onSnapshot(snapshot => {
    //     setupGuides(snapshot.docs);
     
    // }, err => console.log(err.message));
    } 
    
    else {
      setupUI();
    //   setupGuides([]);
    console.log(user, "user logged out")
    }
  });
  






  
  // signup
  const signupForm = document.querySelector('#signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    //insert mysql new user start

 
// New obj creation
    var newUser = {
      userName: signupForm['signup-username'].value,
      password: signupForm['signup-password'].value,
      firstName: signupForm['signup-firstname'].value,
      lastName: signupForm['signup-lastname'].value,
      email: signupForm['signup-email'].value
  }
  
  // Post values to User table
  $.ajax("/api/newuser", {
      type: "POST",
      data: newUser
  }).then(function () {
      console.log("Inserted to table");
      alert("Congrats! You have created an account with us!");
  })
  //insert mysql new user end
    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      return db.collection ('users').doc(cred.user.uid).set({ 
        role: signupForm['signup-role'].value,
        bio: signupForm['signup-bio'].value
       
      })
    
    }).then (()=>{
  // close the signup modal & reset form
  const modal = document.querySelector('#modal-signup');
  M.Modal.getInstance(modal).close();
  signupForm.reset();
    });
  });
  
    // user Management
  //   const create = document.querySelector('#modal-create');
  //  create.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     $('#modal-create').modal('hide');
  //   });
  // logout
  const logout = document.querySelector('#logout');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
  });
  
  // login
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    document.getElementById('loginUserName').value=loginForm['login-username'].value;
    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      // close the signup modal & reset form
      const modal = document.querySelector('#modal-login');
      M.Modal.getInstance(modal).close();
      loginForm.reset();
    });
  


  });

