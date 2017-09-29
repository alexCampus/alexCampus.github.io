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

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getFirebaseGame() {
	//var id     = document.getElementById('idPc').value;
	var email  = document.getElementById('email').value;
	var div    = document.getElementById('form_back_token');
	//var canvas = document.getElementById('canvas').classList;
	axios.get('https://mealnlive.com/api/firebase_game/' + email)
		.then(function(response) {
			if(response.data === false)
			{
				alert('erreur de saisie du code');
				div.innerHTML = 'erreur de saisie du code';
			} else {
				idPc = response.data[0].id;
				setCookie('idPc', idPc, 1);
				//canvas.remove('hidden');
				//div.classList.add('hidden');
				document.location.href = '/accueil';
			}
		})
		.catch(function(error) {
			console.log(error);
		});
}
