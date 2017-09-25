//button refresh on Mobile Device
if (/Mobi|Tablet|iPad|iPhone/.test(navigator.userAgent)) {
	console.log("DeviceOrientation is supported");
} else {
	console.log("DeviceOrientation is not supported");
}

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
	console.log("speedInFont = "+speed);
	var size = (speed *  -0.003 + 70);
	console.log("size = "+size);
	return size.toString();
}
