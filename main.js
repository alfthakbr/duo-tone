const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');

let img = new Image();
let fileName = '';


/*Upload*/
uploadFile.addEventListener('change', (e) => {
	const file = document.getElementById('upload-file').files[0];
	const reader = new FileReader();

	if (file) {
		fileName = file.name;
		reader.readAsDataUrl(file);
	}

	reader.addEventListener('load', () => {
		img = new Image();
		img.src = reader.result;
		img.onload = function() {
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.drawImage(img, 0, 0, img.width, img.height);
			canvas.removeAttribute('data-caman-id');
		}
	}, false);

});