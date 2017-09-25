// Initialize Firebase
const config = {
	apiKey: "AIzaSyANTS07COdfwKC-nBhCcsNzL1LNfcNEryg",
    authDomain: "test-gyro.firebaseapp.com",
    databaseURL: "https://test-gyro.firebaseio.com",
    projectId: "test-gyro",
    storageBucket: "test-gyro.appspot.com",
    messagingSenderId: "798663384234"
};
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
firebase.initializeApp(config);
const token = 123456;
const dbRefDir = firebase.database().ref( token + '/position');
var dirOnPhone = document.getElementById('valueDir'); //Direction de la tête
var ctx        = document.getElementById("canvas").getContext('2d');

dbRefDir.on('value', async function(snap) {
	//console.log("SpeedInListener = "+snap.val().speed);
	//ctx.font = fontSize(snap.val().speed) + "30px Arial";
	ctx.font = "30px Arial"
	dirOnPhone.innerHTML = snap.val().dir;
	switch(snap.val().dir) {
		case 'Gauche':
			ctx.fillText(letters[Math.floor(Math.random()*26)],30,(canvas.height * 0.5));
			await sleep(50);
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			break;
		case 'Droite':
			ctx.fillText(letters[Math.floor(Math.random()*26)],(canvas.width - 30),(canvas.height * 0.5));
			await sleep(50);
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			break;
		case 'Face':
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			break;
	}
});
