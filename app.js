$(document).ready(function()
	{
		//add entered text to list	
		$(document).keypress(function(event)
		{
			if (event.which == 13)
			{
				event.preventDefault();
				var value = $(".form").val();
				$(".line").append("<li class='full-height'>" + value +
 				 "<button class='check-btn'></button><button class='del-btn'></button></li>");
				$(".form").val("");
			}
		});

		//check off a task to mark completed
		$(".line").on("click", ".check-btn", function() 
			{
				$(this).closest("li").toggleClass("strike-through");
			}
		);

		//delete a completed task
		$(".line").on("click", ".del-btn", function()
			{
				$(this).closest("li").fadeOut(400, function(){});
			}
		);

		//reset list
		$(".line").on("click", ".reset", function()
			{
				$("li").fadeOut(400, function()
					{
						$(this).empty();
					}
			)});
	});