export default {


	defHomeImgUrl:"https://i.ibb.co/KGS61GC/65-removebg-preview.png",
	defThumbImgUrl:"https://i.ibb.co/3S3d3K4/881765040.png",


	getText: (Platform) => {
		if (Platform == 'Instagram') return "lightsalmon";
		else if (Platform == 'Spotify') return "lightgreen";
		else if (Platform == 'YouTube') return "lightcoral";
		else if (Platform == 'Spotify') return "lavender";
		else if (Platform == 'Facebook') return "lightblue";
		else if (Platform == 'Reddit') return "lightcyan";
		else return "lightslategray";
	}

}