
var firebaseConfig = {
    apiKey: "AIzaSyB72BTzl1wYISuyPa_GRBfRQ-bxkvZOCBM",
    authDomain: "contact-form-portfolio-36b2d.firebaseapp.com",
    projectId: "contact-form-portfolio-36b2d",
    storageBucket: "contact-form-portfolio-36b2d.appspot.com",
    messagingSenderId: "826021899494",
    appId: "1:826021899494:web:db1a6ec88805efb55d5f27"
  };
  // Initialize Firebase
  
firebase.initializeApp(firebaseConfig);
//Reference messages collection
let messageRef=firebase.database().ref('messages');


document.getElementById('contact-form').addEventListener('submit',submitForm);
      function submitForm(e){
          e.preventDefault();
      //Get Values
      var name=getInputVal('name');
      var subject=getInputVal('subject');
      var email=getInputVal('email');
      var message=getInputVal('message');
     saveMessage(name,subject,email,message);
     alert('Message Sent..Thanks for your Feedback')
     document.querySelector('.contact-form').reset()
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name,subject,email,message){
    var newMessageRef=messageRef.push();
    newMessageRef.set({
        name:name,
        subject:subject,
        email:email,
        message:message
    });
   
}

let theme = localStorage.getItem('theme')



if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}
let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:',mode)
		 setTheme(mode)
	})
}
function setTheme(mode){
    if(mode == 'light'){
		document.getElementById('theme-style').href = '../static/index.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = '../static/blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = '../static/green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = '../static/purple.css'
	}

	localStorage.setItem('theme', mode)
}