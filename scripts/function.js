//button refresh on Mobile Device
if (/Mobi|Tablet|iPad|iPhone/.test(navigator.userAgent)) {
	console.log("DeviceOrientation is supported");
} else {
	console.log("DeviceOrientation is not supported");
}
var idPc;
function speedTest(degStart, rotation) {
	var start = degStart;
	setTimeout(function(){
		var stop = rotation;
	},10);
	var total = stop - start;
	return total;
};

function writePhoneData(idPc, dir,speed) {
	firebase.database().ref('/' + idPc + '/position').update({dir: dir, speed: speed});
};

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function fontSize(speed) {
	console.log("speedInFont = " + speed);
	var size = (speed *  -0.003 + 70);
	console.log("size = "+size);
	return size.toString();
}

function getFirebaseGame() {
	var id     = document.getElementById('idPc').value;
	var email  = document.getElementById('email').value;
	var div    = document.getElementById('form_back_token');
	var canvas = document.getElementById('canvas').classList;
	console.log('id', id);
	axios.get('http://localhost:8000/api/firebase_game/' + email)
		.then(function(response) {
			console.log(response);
			if(response.data === false)
			{
				console.log('erreur de saisie du code');
				div.innerHTML = 'erreur de saisie du code';
			} else {
				canvas.remove('hidden');
				div.classList.add('hidden');
				idPc = response.data[0].id;
			}
		})
		.catch(function(error) {
			console.log(error);
		});
}
