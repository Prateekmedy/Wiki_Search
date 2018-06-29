$(document).ready(function(){
//console.log("Enter");

function wiki(){

	var input = $('#test').val();

			var url  = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+input+"&format=json&callback=?";

			$.ajax({
				type:"GET",
				url: url,
				async:false,
				dataType:"jsonp",
				success: function(data){
					$('#content').html("");
					$('#main').css("transform","translateY(5%)");
					$('#searchDiv').css("transform","translateY(-50%)");
					$('#title').css("margin-bottom","1%");
					$('#wikipic').css({
						"transform":"translateY(-40%)",
						"width":"55%",
						"height":"55%"
					});
					$('h2').css({
						"transform":"translateY(-450%)",
						"width":"20%",
						"height":"20%",
						"font-size":"2vw",
						"margin-left":"12%"
					});

					for (var i = data[1].length-1; i >= 0; i--) {
						
						$('#content').prepend("<div id='block' class='panel panel-default'> <div id='pHeading' class='panel-heading'><a class='nodecoration panel-title lead' data-toggle='collapse' data-parent='#panel-1' href='#cPanel'><a href="+data[3][i]+" target='_blank'>"+data[1][i]+"</a></a></div><div id='cPanel' class='panel-collapse collapse'><div class='panel-body'>"+data[2][i]+"</div></div> </div><br>");
					}

					$(".panel-heading").hover(
 						function() {
 						   $('.panel-collapse').collapse('show');
 					 }, function() {
   						 $('.panel-collapse').collapse('hide');
  						}
					);

					$('#test').val("");

				} 
			}); 
}

		

		$("#test").keypress(function(e){
			//console.log("function runs");
			//console.log(e.which);
			if(e.which ===13){
				$('#searchBtn').click();
			}
			
		});  

		
		$('#searchBtn').click(function(){
			wiki();
		});

		$('#wikipic').hover(function(){
			$('h2').css("opacity","1");
		},function(){
			$('h2').css("opacity","0");
		});


});