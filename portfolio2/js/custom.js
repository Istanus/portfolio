// filter .ux items
$grid.isotope({filter:'.ux'});

// filter .print items
$grid.isotope({filter:'.print'});

// filter .identity items
$grid.isotope({filter:'.identity'});

// show all items
$grid.isotope({filter:'*'});

//init Isotope
var $grid = $('.grid').isotope({
	//options
});
// filter items on button click
$('.filter-button-group').on('click','button', function(){
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({filter:filterValue});
})