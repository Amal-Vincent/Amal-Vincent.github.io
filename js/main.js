$('.navbar-nav>li>a').on('click', function() {
  console.log("working");
  $('.navbar-collapse').collapse('hide');
});
$(document).ready(() => {
  let url = location.href.replace(/\/$/, "");

  if (location.hash) {
    const hash = url.split("#");
    $('#myTab a[href="#'+hash[1]+'"]').tab("show");
    url = location.href.replace(/\/#/, "#");
    history.replaceState(null, null, url);
    setTimeout(() => {
      $(window).scrollTop(0);
    }, 400);
  }

  $('a[data-toggle="tab"]').on("click", function() {
    let newUrl;
    const hash = $(this).attr("href");
    if(hash == "#home") {
      newUrl = url.split("#")[0];
    } else {
      newUrl = url.split("#")[0] + hash;
    }
    newUrl += "/";
    history.replaceState(null, null, newUrl);
  });
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
    $('.modal-body').html('<img class="thumbnail" src="images/vote.jpg"><p>The project involved the development of a secure and time-saving interactive platform, wherein the voters in a digital democracy could easily cast their vote. The security for the system for the data transmission was provided using concepts of cryptography and steganography.</p><p><a href="downloads/voting.pdf">Read the Project Report</a></p>');
  } else if (title == 'Home automation using a cellphone') {
    $('.modal-body').html('<img class="thumbnail" src="images/phone.jpg"><p>The objective of this project was to enable users to remotely control their home appliances and systems using a cell phone-based interface. The product uses the advantages of DTMF for the functioning and the DTMF codes are decoded and used for understanding the requirement or the order from the user. This helps to control your home appliances from a distant place using a mobile phone by just calling.</p><p><a href="downloads/home.pdf">Read the Project Report</a></p>');
  }
  else if (title == 'Correlation Visualisation for Sleep Data Analytics') {
   $('.modal-body').html('<img class="thumbnail" src="images/corrViz.png"><p>We built a visual analytic tool for studying the interaction of different variables collected for a child with neurodevelopmental disorders. The tool allows clinicians to explore how the different aspects of a child\'s behaviour and activities affect their sleep; this tool is developed as an extension of an existing tool SWAPP, which allows caregivers and clinicians to log and monitor the child\'s everyday data.</p><p><a href="https://doi.org/10.2352/ISSN.2470-1173.2019.1.VDA-682">Read the Research Paper</a></p>');
 }
 else if (title == 'Block Talks') {
  $('.modal-body').html('<img class="thumbnail" src="images/block.jpg"><p>Block talks is a Tangible Augmented Reality toolkit to help kids ages 7-9 learn how to read. It is intended for a semi-supervised environment.</p><p><a href="https://doi.org/10.1145/3170427.3188576">Read the Research Paper</a></p><p><a href="https://emclaren.github.io/block-talks-landing-page/">Go to the Project Website</a></p>');
}
else if (title == 'Project ABC: Authorization, Booking and Coordination of widespread testing and immunizations') {
  $('.modal-body').html('<img class="thumbnail" src="images/vaccine.png"><p>Ensuring efficient and effective disease testing during a pandemic requires the integration and automation of complex, versatile assessment, scheduling, and planning tools. A citizen\’s access to the health care system at multiple points, and current tools enabling tracking that data, are labour intensive and are insufficient to cope with addressing the volume of tests required during a pandemic. Project ABC is aiming to remove bottlenecks with a solution that will enable automated assessment, authorisation, booking, and coordination of widespread testing and, when available, immunisation in the context of COVID-19. </p><p><a href="https://www.digitalsupercluster.ca/covid-19-program-page/project-abc/">More information</a></p>');
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
