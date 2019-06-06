$(document).ready(function() {
	const data = [
		{
			id: "01",
			title: `<b>HOW TO SETUP</b><br>GL CODES, CATEGORIES AND FAMILIES`,
			description: "Clasification of items, GL Code, Category and Family"
		},{
			id: "02",
			title: `<b>DUIS CONSEQUAT NISL DOLOR</b><br>QUIS INTERDUM EROS `,
			description: "Vivamus euismod placerat enim nec porttitor neque"
		},{
			id: "03",
			title: `<b>PELLENTESQUE IN QUAM</b><br>CONVALLIS, AUCTOR ODIO EGET`,
			description: "Maecenas leo lacus, suscipit ut neque sed"
		},{
			id: "14",
			title: `<b>SAGITTIS ULTRICIES</b><br>SAGITTIS ULTRICIES QUAM VEHICULA`,
			description: "Duis egestas suscipit faucibus nibh ipsum"
		},{
			id: "19",
			title: `<b>MAURIS DIGNISSIM PLACERAT</b><br>DIAM, ID VEHICULA EROS`,
			description: "Donec eget posuere libero est id, hendrerit eros"
		},{
			id: "20",
			title: `<b>A ELEMENTUM LIBERO</b><br>SED AC ANTE RISUS ULTRICIES QUAM`,
			description: "Vestibulum nibh ipsum, mollis vel aliquet and Family"
		},{
			id: "21",
			title: `<b>NEC, TEMPUS ET JUSTO</b><br>CRAS PLACERAT SEMPER VIVERRA`,
			description: "Clasification of items, GL Code, Category and Family"
		},{
			id: "22",
			title: `<b>PRAESENT EFFICITUR</b><br>NULLA A NULLA MOLESTIE MALESUADA`,
			description: "Vivamus in tortor consequat, dapibus est id."
		},
	];
	const video_item = (id, title, description) => `<div class="col-md-3">
			<div class="video card text-white bg-info mb-3" data-id="${id}" style="max-width: 18rem;">
				<div class="card-body">
						<div class="tic_row row d-flex" style="visibility: hidden;">
							<span class="select_tic ml-auto p-2 badge badge-pill text-white badge-light" style="padding: 3px !important;"><i class="fas fa-check"></i></span>
						</div>
						<div class="row" style="text-align: center;">
							<div class="col">
								<span style="width: 100%;">${title}</span>
							</div>
						</div>
						<div class="video-info row d-flex" style="font-size: 11px; height: 15px;">
							<span class="type badge badge-pill badge-primary mr-auto p-2" style="padding: .2rem!important;">video type</span>
							<span class="time badge badge-pill badge-primary p-2" style="padding: .2rem!important;">video time</span>
						</div>
				</div>
			</div>
			<div class="description card  bg-light mb-3" style="max-width: 18rem;">
				<div class="card-body">
					<div style="display:flex;">
						<div class="number">${id}</div>
						<div class="text">${description}</div>
					</div>
				</div>
			</div>
		</div>`;
	const selected_video_btn = (id) => `<button type="button" class="selected_video btn btn-xs btn-warning" onClick="remove(this)" data-id="${id}">Video ${id} <i class="fas fa-times-circle"></i></button> `;
	for (i of data) {
		$('#videos').append(video_item(i.id, i.title, i.description));
	}

	let assigning_videos = false;

	$('#assign_videos_btn').on('click',function(e) {
		$('#assign_videos').show();
		$('.video .tic_row').css('visibility', 'visible');
		assigning_videos = true;
	});

	
	$('.video').on('click', function(e) {
		let id = $(this).data("id");
		if (assigning_videos && (selected_ids.indexOf(id) == -1)) {
			$('#selected_videos').append(selected_video_btn(id));
			$(this).find('.badge').removeClass('badge-light badge-primary').addClass('badge-warning');
			$(this).parent().find('.description').removeClass('bg-light').addClass('bg-warning');
			selected_ids.push(id);
		}
	})

	$('#cancel_assignation').on('click', function(e){
		selected_ids.splice(0,selected_ids.length)
		$('#selected_videos').html('');
		$('#assign_videos').hide();
		$('.video .tic_row').css('visibility', 'hidden');
		$(".video").each(function() {
			$(this).find('.tic_row .badge').addClass('badge-light').removeClass('badge-warning');
			$(this).find('.video-info .badge').addClass('badge-primary').removeClass('badge-warning');
			$(this).parent().find('.description').addClass('bg-light').removeClass('bg-warning');
		});
	});
});
var selected_ids = [];
const remove = function(el){
	let id = $(el).data("id");
	let index = selected_ids.indexOf(id);
	$(".video").each(function() {
		if ($(this).data("id") == id ) {
			$(this).find('.tic_row .badge').addClass('badge-light').removeClass('badge-warning');
			$(this).find('.video-info .badge').addClass('badge-primary').removeClass('badge-warning');
			$(this).parent().find('.description').addClass('bg-light').removeClass('bg-warning');
		}
	});

	selected_ids.splice(index, 1);
	$(el).remove();
}