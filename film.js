$("#film").DataTable({
    "ajax" : "film.json",
	"lengthMenu": [
	[5,10, -1],
	[5,10, "Alle"]
	],
	
	"order": [
	[1, "asc"]
	]
});

$("#btn_text").tooltipster({
	"content":$("#btn").detach()
});
