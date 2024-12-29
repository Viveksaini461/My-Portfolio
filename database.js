const firebaseConfig = {
  apiKey: "AIzaSyCi6A0g41RTt2JMdqGL2axkzOOsI6z23Co",
  authDomain: "portfoliofrom-3646a.firebaseapp.com",
  databaseURL: "https://portfoliofrom-3646a-default-rtdb.firebaseio.com",
  projectId: "portfoliofrom-3646a",
  storageBucket: "portfoliofrom-3646a.firebasestorage.app",
  messagingSenderId: "156701739192",
  appId: "1:156701739192:web:4fc960e74600e14fca8c4d"
};

 // initialize firebase
firebase.initializeApp(firebaseConfig);


//reference your database

var contactFormDB = firebase.database().ref('portfolioForm');

document.getElementById('contactForm').addEventListener('submit', submitForm)

  function submitForm(e){
           e.preventDefault();
           var name = getElementVal('name');
           var emailid = getElementVal('emailid');
           var msgContent = getElementVal('msgContent');
           if(name === "" || emailid === "" || msgContent === ""){
            document.getElementById('red-alert').style.display = 'block';
            setTimeout(()=>{
              document.getElementById('red-alert').style.display = 'none';
    
            },2000);
          }
           else{
           saveMessage(name , emailid , msgContent);
             //enable alert message
         document.getElementById('alert').style.display = 'block';

         //remove the alert message
        setTimeout(()=>{
          document.getElementById('alert').style.display = 'none';

        },3000);

        //reset the form 
        document.getElementById('contactForm').reset();
           }
        
  }
    const saveMessage =(name , emailid , msgContent) =>{
      
      
        var newContactForm = contactFormDB.push();
         newContactForm.set({
          name:name,
          emailid : emailid,
          msgContent : msgContent,
         });
        
    }
  const getElementVal = (id) => {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`Element with id "${id}" not found.`);
        return '';
    }
    return element.value;
};