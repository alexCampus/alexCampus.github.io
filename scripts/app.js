(function() {
	var valInDeg 	 = document.getElementById('valInDegrees');//La value en degrés depuis l'initialisation
	var diversion	 = document.getElementById('version');
	var idPc 		 = document.getElementById('idPc');
	var triggerAngle = null;
	var triggerTime  = null;
	var speed        = null;
	var dir          = "Face";
	var active       = true;
	var version 	 = "1.11.2";

	diversion.innerHTML = version;
	window.addEventListener("deviceorientation", function(eventOrientation) {
		console.log("trigStart = "+performance.now());
		alert(document.cookie);
		var rotation = eventOrientation.alpha;
		valInDeg.innerHTML = rotation + '°';

		if (rotation < 20 || rotation > 340) {
			active = true;
		}

		if(active) {
			eventOrientation.preventDefault();
			if(triggerAngle !== null && triggerTime !== null) {
				var nowTime = performance.now();
				console.log("rot = "+rotation+" - tA = "+triggerAngle+ "/ nT = "+nowTime+" - tT = "+triggerTime);
				speed       = Math.abs((rotation - triggerAngle) / (nowTime - triggerTime));
				console.log("speedOnPhone = " + speed)
			}

			if(rotation >= 40 && rotation < 160) {
				triggerAngle = rotation;
				triggerTime  = performance.now();
				dir          = "Gauche";
			} else if (rotation > 200 && rotation <= 320) {
				triggerAngle = rotation;
				triggerTime  = performance.now();
				dir          = "Droite";
			} else if (rotation >= 160 && rotation <= 200) {
				dir = "L'exorciste ?";
			} else {
				dir          = "Face";
				triggerTime  = null;
				triggerAngle = null;
				speed        = null;
		}
			if(speed !== null && speed > 0.12) {
				active = false;
				writePhoneData(idPc,dir,speed);
			} else {
				writePhoneData(idPc,"Face",0);
			}
		}
		console.log("trigStop = "+performance.now());
	},false);
}());
