$(document).ready(function(){

	$(function() {
		$( "#datepicker" ).datepicker({
			showOtherMonths: true,
			selectOtherMonths: true
		});
	});

	// Functionality to add classes
	$("#class-form").hide();

	$("#add-class").click(function(){

		$("#class-form").show();
	});
	
	$("#class-cancel").click(function(){

		// Clear and hide form
		$("#class-title").val('');
		$("#class-form").hide();
	});

	$("#class-submit").click(function(){

		// Get some values from elements on the page:
		classTitle = $("#class-title").val();

		if (classTitle != '') {

			// Create an element with the proper classes
			var mainDiv = $(document.createElement('div'));
			mainDiv.addClass('class');

				// Title of class
				var title = $(document.createElement('h3'));
				title.addClass('center-text');
				title.text(classTitle);

				// Add assignment button
				var addAssignmentP = $(document.createElement('p'));
				addAssignmentP.addClass('center-text');
				var addAssignmentBtn = $(document.createElement('button'));
				addAssignmentBtn.addClass('btn');
				addAssignmentBtn.addClass('btn-primary');
				addAssignmentBtn.attr('id', 'add-assignment');
				addAssignmentBtn.text('Add assignment');
				addAssignmentP.append(addAssignmentBtn);

				// // List where assignments will display
				// var classList = $(document.createElement('div'));
				// classList.attr('id', 'assignments-list');

				// // Form for adding assignments
				// var assignmentsList = $(document.createElement('div'));
				// assignmentsList.addClass('center-text');

				// 	var assignmentForm = $(document.createElement('div'));
				// 	assignmentForm.attr('id', 'assignment-form');

				// 		var div1 = $(document.createElement('div'));
				// 		div1.addClass('form');

				// 			var header1 = $(document.createElement('h3'));
				// 			header1.addClass('center-text');
				// 			header1.text('Assignment');

				// 			var p1 = $(document.createElement('p'));
				// 			var input1 = $(document.createElement('input'));
				// 			input1.attr('type', 'text');
				// 			input1.attr('id', 'assignment');
				// 			input1.attr('placeholder', 'Assignment');

				// 			var p2 = $(document.createElement('p'));
				// 			var input2 = $(document.createElement('input'));
				// 			input2.attr('type', 'text');
				// 			input2.attr('id', 'datepicker');
				// 			input2.attr('placeholder', 'Due date');

				// 			var div2 = $(document.createElement('div'));

				// 				var assignmentCancelBtn = $(document.createElement('button'));
				// 				assignmentCancelBtn.addClass('btn');
				// 				assignmentCancelBtn.addClass('btn-danger');
				// 				assignmentCancelBtn.addClass('pull-left');
				// 				assignmentCancelBtn.attr('id', 'assignment-cancel');
				// 				assignmentCancelBtn.text('Cancel');

				// 				var assignmentSubmitBtn = $(document.createElement('button'));
				// 				assignmentSubmitBtn.addClass('btn');
				// 				assignmentSubmitBtn.addClass('btn-danger');
				// 				assignmentSubmitBtn.addClass('pull-right');
				// 				assignmentSubmitBtn.attr('id', 'assignment-submit');
				// 				assignmentSubmitBtn.text('Submit');

				// 			div2.append(assignmentCancelBtn, assignmentSubmitBtn);

				// 		div1.append(header1, p1, p2, div2);

				// 	assignmentForm.append(div1);

				// assignmentsList.append(assignmentForm);

			mainDiv.append(title, addAssignmentP);

			// Add content to the page
			$("#class-list").append(mainDiv);

			// Clear and hide form
			$("#class-title").val('');
			$("#class-form").hide();
		} else {

			alert('You must give a class title.')
		}
	});

	// Functionality to add assignments
	$("#assignment-form").hide();

	$("#add-assignment").click(function(){

		$("#assignment-form").show();
	});
	
	$("#assignment-cancel").click(function(){

		// Clear and hide form
		$("#assignment").val('');
		$("#datepicker").val('');
		$("#assignment-form").hide();
	});

	$("#assignment-submit").click(function() {

		// Get some values from elements on the page:
		assignment = $("#assignment").val();
		dueDate = $("#datepicker").val();

		if (assignment != '' && dueDate != '') {
			
			// Create an element with the proper classes
			var ele = $(document.createElement("p"));
			ele.addClass("assignment");
			ele.addClass("center-text");
			var txt = ele.text(assignment + " - " + dueDate);

			// Add content to the page
			$("#assignments-list").append(txt);

			// Clear and hide form
			$("#assignment").val('');
			$("#datepicker").val('');
			$("#assignment-form").hide();
		} else {

			alert('You must fill out both fields.')
		}
	});
});