(function($){  
  $(function(){
    $(document).foundationMediaQueryViewer();
    
    $(document).foundationAlerts();
    $(document).foundationAccordion();
    $(document).tooltips();
    $('input, textarea').placeholder();
    
    
    
    $(document).foundationButtons();
    
    
    
    $(document).foundationNavigation();
    
    
    
    $(document).foundationCustomForms();
    
    
    
      
      $(document).foundationTabs({callback:$.foundation.customForms.appendCustomMarkup});
      
    
    
    
    // $("#featured").orbit();
    
    
    // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
    // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'left'});
    // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'left'});
    // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'left'});
    // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'left'});
  });

  // load LDT portfolio data (included in data.js)
  // courses
  var coursesListTemplate = Handlebars.compile($("#quarter-courses-template").html());
  var coursesListContainer = $("#courses-list");
  _.each(courses, function (elem, index) {
    coursesListContainer.append(coursesListTemplate(elem));
  });

  // projects list
  var projectListTemplate = Handlebars.compile($("#project-list-template").html());
  var projectListContainer = $("#projects-list");
  _.each(projects, function (elem, index) {
    projectListContainer.append(projectListTemplate(elem));
  });

  // project modal dialogs
  var projectTemplate = Handlebars.compile($("#project-template").html());
  var projectContentContainer = $("body");
  _.each(projects, function (elem, index) {
    projectContentContainer.append(projectTemplate(elem));
  });
  
})(jQuery);
