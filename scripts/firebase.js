// Initialize Firebase
const config = {
	apiKey: "AIzaSyANTS07COdfwKC-nBhCcsNzL1LNfcNEryg",
    authDomain: "test-gyro.firebaseapp.com",
    databaseURL: "https://test-gyro.firebaseio.com",
    projectId: "test-gyro",
    storageBucket: "test-gyro.appspot.com",
    messagingSenderId: "798663384234"
};
let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
firebase.initializeApp(config);

const dbRefDir = firebase.database().ref('/' + idPc + '/position');
let dirOnPhone = document.getElementById('valueDir'); //Direction de la tête
let ctx        = document.getElementById("canvas").getContext('2d');

dbRefDir.on('value', async function(snap) {
	//ctx.font = fontSize(snap.val().speed) + "30px Arial";
	ctx.font = "10px Arial";
	dirOnPhone.innerHTML = "Dir : " + snap.val().Dir;
	switch(snap.val().Dir) {
		case 'Gauche':
            console.log("A gauche");
			ctx.fillText(letters[Math.floor(Math.random()*26)],30,(canvas.height * 0.5));
			await sleep(50);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
			break;
		case 'Droite':
            console.log("A droite");
			ctx.fillText(letters[Math.floor(Math.random()*26)],(canvas.width - 30),(canvas.height * 0.5));
			await sleep(50);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
			break;
		case 'Haut':
            console.log("En haut");
			ctx.fillText(letters[Math.floor(Math.random()*26)],(canvas.width * 0.5),30);
			await sleep(50);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
			break;
		case 'Bas':
            console.log("En bas");
			ctx.fillText(letters[Math.floor(Math.random()*26)],(canvas.width * 0.5),(canvas.height - 30));
			await sleep(50);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
			break;
		case 'Face':
            console.log("Cette soirée là");
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			break;
	}
});