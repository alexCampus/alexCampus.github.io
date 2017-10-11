// Initialize Firebase
const config = {
	apiKey: "AIzaSyDeWc7f-nohx0NRG5Yq7ma2MpzfFI9W_ng",
	authDomain: "kinesensors.firebaseapp.com",
	databaseURL: "https://kinesensors.firebaseio.com",
	projectId: "kinesensors",
	storageBucket: "",
	messagingSenderId: "793802367050"
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