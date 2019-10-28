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
    $('.modal-body').html('<img class="thumbnail" src="images/SWAPP.png"><p>SWAPP is a web-based application designed to help parents/caregivers record a child’s sleep/wake behaviours. Parents of children with brain-based disabilities record a large amount of information about their child’s medication, sleep, and wake behaviours. The sheer quantity of medical and non-medical records can be overwhelming for the parents and the clinicians. Our team at the BioViz Lab created SWAPP to help parents and clinicians track a child’s behaviours. The app adopts a user-centred approach to collecting information, allowing parents to ‘own their data’ and individualise what they keep track of on a long-term basis. Also, tracking short-term data that is requested by a clinician, such as positive or negative effects of prescribed medication, allowing for immediate follow-up, if necessary.</p><p><a href="https://www.swapp.iat.sfu.ca">Go to the Project Website</a></p><p><a href="https://doi.org/10.1145/3329189.3329228">Read the research paper</a></p>');
  } else if (title == 'FitViz: Fitbit based web application for monitoring physical activity of arthritis patients') {
    $('.modal-body').html('<img class="thumbnail" src="images/Fit.gif"><p>Rheumatoid arthritis (RA) affects 1 in 100 adults in Canada. Self-management of this disease requires the patients to maintain an adequate level of daily physical activity, while not overdoing it; excessive physical activity can be harmful to RA patients. The patients receive regular physical activity recommendations from their clinicians, based on their individual diagnosis. Current solutions for physical activity monitor does not satisfy the needs of the arthritis patients and their clinicians, as they do not allow the patients and the clinicians to know if the patients did the physical activity as recommended by the clinicians. Therefore, our team at the BioViz Lab developed a web application that monitors the patient’s daily physical activity and generates visualisations to help the patients in the self-management of the condition.</p><p><a href="https://fitviz.iat.sfu.ca/fitvizapp-dev/users/sign_in">Go to the Project Website</a></p>');
  } else if (title == 'Gaze Estimation using regular Webcam') {
    $('.modal-body').html('<img class="thumbnail" src="images/gaze.png"><p>Gaze Estimation is the process of determining the point of gaze in the space, or the visual axis of an eye. This project was focused on developing a gaze estimation method for Human-Computer Interaction using an ordinary webcam mounted on the top of the computer screen without any additional or specialised hardware.</p><p><a href="https://doi.org/10.1109/DIPDMWC.2016.7529379">Read the research paper</a></p>');
  } else if (title == 'Online voting system powered by biometric security using steganography') {
    $('.modal-body').html('<img class="thumbnail" src="images/vote.jpg"><p>The project involved the development of a secure and time-saving interactive platform, wherein the voters in a digital democracy could easily cast their vote. The security for the system for the data transmission was provided using concepts of cryptography and steganography.</p><p><a href="">Read the Project Report</a></p>');
  } else if (title == 'Home automation using a cellphone' ) {
  $('.modal-body').html('<img class="thumbnail" src="images/phone.jpg"><p>The objective of this project was to enable users to remotely control their home appliances and systems using a cell phone-based interface. The product uses the advantages of DTMF for the functioning and the DTMF codes are decoded and used for understanding the requirement or the order from the user. This helps to control your home appliances from a distant place using a mobile phone by just calling.</p><p><a href="">Read the Project Report</a></p>');
  } else {
    $('.modal-body').html('<p>Loading...</p>');
  }
  $('#lightbox').modal({
    show: true,
  });
  $img.load(function() {
    $('.modal-body').html($img);
  })
});
