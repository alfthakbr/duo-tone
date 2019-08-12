var img = new Image();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var fileName = "";

$(document).ready(function() {
	/*Effects*/
		$("#emerald-add").on("click", function(e) {
			Caman("#canvas", function() {
				this.revert(false);
				this.greyscale();
				this.contrast(22);
				this.newLayer(function() {
					this.fillColor("#00ff36");
					this.setBlendingMode("multiply");
				});
				this.newLayer(function() {
					this.fillColor("#23278a");
					this.setBlendingMode("lighten");
				});
				this.render();
			});
		});

		$("#wine-add").on("click", function(e) {
			Caman("#canvas", function() {
				this.revert(false);
				this.greyscale();
				this.contrast(18);
				this.newLayer(function() {
					this.fillColor("#e41c2d");
					this.setBlendingMode("multiply");
				});
				this.newLayer(function() {
					this.fillColor("#1d3162");
					this.setBlendingMode("lighten");
				});
				this.render();
			});
		});

		$("#tany-add").on("click", function(e) {
			Caman("#canvas", function() {
				this.revert(false);
				this.greyscale();
				this.contrast(22);
				this.newLayer(function() {
					this.fillColor("#d7a621");
					this.setBlendingMode("multiply");
				});
				this.newLayer(function() {
					this.fillColor("#0c6249");
					this.setBlendingMode("lighten");
				});
				this.render();
			});
		});

		$("#tango-add").on("click", function(e) {
			Caman("#canvas", function() {
				this.revert(false);
				this.greyscale();
				this.contrast(18);
				this.newLayer(function() {
					this.fillColor("#e0de2c");
					this.setBlendingMode("multiply");
				});
				this.newLayer(function() {
					this.fillColor("#b71310");
					this.setBlendingMode("lighten");
				});
				this.render();
			});
		});

		$("#garnet-add").on("click", function(e) {
			Caman("#canvas", function() {
				this.revert(false);
				this.greyscale();
				this.contrast(22);
				this.newLayer(function() {
					this.fillColor("#ed060b");
					this.setBlendingMode("lighten");
				});
				this.newLayer(function() {
					this.fillColor("#70e4ee");
					this.setBlendingMode("multiply");
				});
				this.render();
			});
		});


		$("#merigold-add").on("click", function(e) {
			Caman("#canvas", function() {
				this.revert(false);
				this.greyscale();
				this.contrast(18);
				this.newLayer(function() {
					this.fillColor("#367ABD");
					this.setBlendingMode("lighten");
				});
				this.newLayer(function() {
					this.fillColor("#F9ED3A");
					this.setBlendingMode("multiply");
				});
				this.render();
			});
		});

		$("#kinda-blue-add").on("click", function(e) {
			Caman("#canvas", function() {
				this.revert(false);
				this.greyscale();
				this.contrast(22);
				this.newLayer(function() {
					this.fillColor("#77acd4");
					this.setBlendingMode("multiply");
				});
				this.newLayer(function() {
					this.fillColor("#033dc5");
					this.setBlendingMode("lighten");
				});
				this.render();
			});
		});

		$("#lapiz-add").on("click", function(e) {
			Caman("#canvas", function() {
				this.revert(false);
				this.greyscale();
				this.contrast(18);
				this.newLayer(function() {
					this.fillColor("#caeaf2");
					this.setBlendingMode("multiply");
				});
				this.newLayer(function() {
					this.fillColor("#2cd6e1");
					this.setBlendingMode("softLight");
				});
				this.render();
			});
		});

		$("#purple-ish-add").on("click", function(e) {
			Caman("#canvas", function() {
				this.revert(false);
				this.greyscale();
				this.contrast(22);
				this.newLayer(function() {
					this.fillColor("#B53686");
					this.setBlendingMode("screen");
				});
				this.newLayer(function() {
					this.fillColor("#BEDDEF");
					this.setBlendingMode("softLight");
				});
				this.render();
			});
		});

		$("#not-pink-add").on("click", function(e) {
			Caman("#canvas", function() {
				this.revert(false);
				this.newLayer(function() {
					this.fillColor("#FCA300");
					this.setBlendingMode("darken");
				});
				this.newLayer(function() {
					this.fillColor("#282581");
					this.setBlendingMode("lighten");
				});
				this.contrast(11);
				this.render();
			});
		});

		$("#fuchsia-add").on("click", function(e) {
			Caman("#canvas", function() {
				this.revert(false);
				this.greyscale();
				this.contrast(12);
				this.newLayer(function() {
					this.fillColor("#f65e35");
					this.setBlendingMode("multiply");
				});
				this.newLayer(function() {
					this.fillColor("#1e3265");
					this.setBlendingMode("lighten");
				});
				this.render();
			});
		});
		
		$("#lilac-add").on("click", function(e) {
			Caman("#canvas", function() {
				this.revert(false);
				this.greyscale();
				this.newLayer(function() {
					this.opacity(18);
					this.fillColor("#E50914");
				});
				this.contrast(1.2);
				this.newLayer(function() {
					this.setBlendingMode("lighten");
					this.fillColor("#282581");
				});

				this.render();
			});
		});

		$("#vintage-add").on("click", function(e) {
			Caman("#canvas", function() {
				this.revert(false);
				this.greyscale();
				this.contrast(18);
				this.newLayer(function() {
					this.fillColor("#181e59");
					this.setBlendingMode("lighten");
				});
				this.newLayer(function() {
					this.fillColor("#E7E1A6");
					this.setBlendingMode("multiply");
				});
				this.render();
			});
		});

		$("#retro-add").on("click", function(e) {
			Caman("#canvas", function() {
				this.revert(false);
				this.greyscale();
				this.contrast(20);
				this.newLayer(function() {
					this.fillColor("#f1e3a0");
					this.setBlendingMode("darken");
				});
				this.newLayer(function() {
					this.fillColor("#f430a9");
					this.setBlendingMode("lighten");
				});
				this.render();
			});
		});	

		$("#flat-retro-add").on("click", function(e) {
			Caman("#canvas", function() {
				this.revert(false);
				this.greyscale();
				this.contrast(15);
				this.newLayer(function() {
					this.fillColor("#FCA300");
					this.setBlendingMode("darken");
				});
				this.newLayer(function() {
					this.fillColor("#e23241");
					this.setBlendingMode("lighten");
				});
				this.render();
			});
		});	


	$("#download-btn").on("click", function(e) {
		var fileExtension = fileName.slice(-4);
		if (fileExtension == ".jpg" || fileExtension == ".png") {
			var actualName = fileName.substring(0, fileName.length - 4);
		}
		download(canvas, actualName + "-edited.jpg");
	});

	$("#upload-file").on("change", function() {
		var file = document.querySelector("#upload-file").files[0];
		var reader = new FileReader();

		if (file) {
			fileName = file.name;
			reader.readAsDataURL(file);
		}

		reader.addEventListener(
			"load",
			function() {
				img = new Image();
				img.src = reader.result;
				img.onload = function() {
					canvas.width = img.width;
					canvas.height = img.height;
					ctx.drawImage(img, 0, 0, img.width, img.height);
					$("#canvas").removeAttr("data-caman-id");
				};
			},
			false
		);
	});
});

Caman.Event.listen("processStart", function(job) {
	$(".process-message").text("Applying: " + job.name);
});

Caman.Pixel.prototype.coordinatesToLocation = Caman.Pixel.coordinatesToLocation;
Caman.Pixel.prototype.locationToCoordinates = Caman.Pixel.locationToCoordinates;
Caman.Pixel.prototype.putPixelRelative = function(horiz, vert, rgba) {
	var newLoc;
	if (this.c == null) {
		throw "Requires a CamanJS context";
	}
	newLoc = this.loc + this.c.dimensions.width * 4 * (vert * -1) + 4 * horiz;
	if (newLoc > this.c.pixelData.length || newLoc < 0) {
		return;
	}
	this.c.pixelData[newLoc] = rgba.r;
	this.c.pixelData[newLoc + 1] = rgba.g;
	this.c.pixelData[newLoc + 2] = rgba.b;
	this.c.pixelData[newLoc + 3] = rgba.a;
	return true;
};
Caman.Pixel.prototype.putPixel = function(x, y, rgba) {
	var loc;
	if (this.c == null) {
		throw "Requires a CamanJS context";
	}
	loc = this.coordinatesToLocation(x, y, img.width);
	this.c.pixelData[loc] = rgba.r;
	this.c.pixelData[loc + 1] = rgba.g;
	this.c.pixelData[loc + 2] = rgba.b;
	this.c.pixelData[loc + 3] = rgba.a;
	return true;
};

function download(canvas, filename) {
	var e;
	var lnk = document.createElement("a");

	lnk.download = filename;

	lnk.href = canvas.toDataURL("image/jpeg", 0.8);

	if (document.createEvent) {
		e = document.createEvent("MouseEvents");
		e.initMouseEvent(
			"click",
			true,
			true,
			window,
			0,
			0,
			0,
			0,
			0,
			false,
			false,
			false,
			false,
			0,
			null
		);
		lnk.dispatchEvent(e);
	} else if (lnk.fireEvent) {
		lnk.fireEvent("onclick");
	}
}
