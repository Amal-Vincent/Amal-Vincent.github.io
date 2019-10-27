$('.navbar-nav>li>a').on('click', function() {
  console.log("working");
  $('.navbar-collapse').collapse('hide');
});

$('.lightbox').click(function() {
  var title = $(this).attr('title');
  var src = $(this).children('img').attr("src").replace('/240/140/', '/480/280/');
  // Change the line above to modify the src according to your naming convention for larger images.
  // You could even change it to source a data attrib ;)

  var alt = $(this).children('img').attr("alt") || "";
  var $img = $('<img class="center-block img-responsive" alt="' + alt + '" src="' + src + '">');
  $('.modal-title').html(title);
  if (title == 'Sleep Wake Behaviour Application (SWAPP)') {
    $('.modal-body').html('<img class="thumbnail" src="images/SWAPP.png"><p>SWAPP is a web-based application designed to help parents/caregivers record a child’s sleep/wake behaviours. Parents of children with brain-based disabilities record a large amount of information about their child’s medication, sleep, and wake behaviours. The sheer quantity of medical and non-medical records can be overwhelming for the parents and the clinicians.  We created SWAPP to help parents and clinicians track a child’s behaviours.  The app adopts a user-centred approach to collecting information, allowing parents to own their data and individualise what they keep track of on a long-term basis, also tracking short-term data that is requested by a clinician, such as positive or negative effects of prescribed medication. Allowing for immediate follow-up, if necessary</p><p><a href="https://www.swapp.iat.sfu.ca">Go to website</a></p><p><a href="https://doi.org/10.1145/3329189.3329228">Read the research paper</a></p>');
  }
  else if (title =='FitViz: Fitbit based web application for monitoring physical activity of arthritis patients') {
    $('.modal-body').html('<img class="thumbnail" src="images/SWAPP.png"><p>Rheumatoid arthritis (RA) affects 1 in 100 adults in Canada. Self-management of this disease requires that the patients maintain an adequate level of daily physical activity, while not overdoing it; excessive physical activity can be harmful to RA patients. The RA patients receive regular physical activity recommendations from their clinicians, based on the condition of their disease. Current solutions for physical activity monitor does not satisfy the needs of the arthritis patients and their clinicians, as they do not allow the patients and the clinicians to know if the patients did the physical activity as recommended by the clinicians. Therefore, we developed a web application that monitors the patients daily physical activity and generates visualisations to help the patients in the self-management of the disease</p><p><a href="https://fitviz.iat.sfu.ca/">Go to website</a></p>');
  }
  else {
    $('.modal-body').html('<p>Loading...</p>');
  }
  $('#lightbox').modal({
    show: true,
  });
  $img.load(function() {
    $('.modal-body').html($img);
  })
});
