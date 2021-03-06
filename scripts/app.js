(function() {
	let valInDeg 	 = document.getElementById('valInDegrees');//La value en degrés depuis l'initialisation
	let diversion	 = document.getElementById('version');
	let triggerAngle = null;
	let triggerTime  = null;
	let speed        = null;
	let active       = true;
	let version 	 = "1.16.1";
	let yawMin		 = 10;
	let yawMax		 = 90;
	let pitchMin	 = 20;
	let pitchMax	 = 40;
	let speedMin	 = 0.12;
	let arrayDirection = ["Droite", "Gauche", "Bas", "Haut"];
	let index;
	let angles = [];
	let idPc = getCookie('idPc');

	diversion.innerHTML = version;
	
	window.addEventListener("deviceorientation", function(eventOrientation) {

		let yaw = eventOrientation.alpha;
		let pitch = eventOrientation.beta;
		valInDeg.innerHTML = 'yaw ' + yaw.toFixed(4) + '° pitch ' + pitch.toFixed(4) + '°';
		yaw = yaw - 2*(yaw - yaw%180);
        angles = [yaw/2, pitch];

		if (active) {
            console.log("isActive");
            console.log("trigA "+triggerAngle);
            if (triggerAngle != null) {
				if(index > 2) {
					speed = Math.abs((pitch - triggerAngle) / (performance.now() - triggerTime));	
				} else {
					speed = Math.abs((yaw - triggerAngle) / (performance.now() - triggerTime));
				}
                console.log("dir "+arrayDirection[index]+"speed "+speed);
				writePhoneData(idPc,arrayDirection[index],speed);
				active = false;
			} else {
				if(Math.abs(yaw/2) > yawMin || Math.abs(pitch) > pitchMin) {
					if (Math.abs(yaw) > yawMin) {
						index = (Math.sign(yaw)+1)/2;
						triggerAngle = yaw;
					} else {
						index = 2+(Math.sign(pitch)+1)/2;
						triggerAngle = pitch;
					}
					triggerTime  = performance.now();
				}
			}
		} else {
            console.log(angles);
            if (Math.abs(yaw/2) < yawMin && Math.abs(pitch) < pitchMin) {
            	sleep(4000);
                active = true;
                writePhoneData(idPc, "Face", 0);
                index = null;
                triggerAngle = null;
                triggerTime = null;
            }
        }
	},false);

	
}());