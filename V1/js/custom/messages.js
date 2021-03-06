//Enable sidebar toggle
$("[data-toggle='offcanvas']").click(function (e) {
	e.preventDefault();
  $('body').toggleClass("collp");
	//If window is small enough, enable sidebar push menu
	if ($(window).width() <= 992) {
		$('.row-offcanvas').toggleClass('active');
		$('.left-side').removeClass("collapse-left");
		$(".right-side").removeClass("strech");
		$('.row-offcanvas').toggleClass("relative");
	} else {
		//Else, enable content streching
		$('.left-side').toggleClass("collapse-left");
		$(".right-side").toggleClass("strech");
		$(".right-side").toggleClass("left-trans");
	}
});


/*$(window).resize(function () {
	$('aside[class="left-side sidebar-offcanvas left-trans"]').height($("body").height() - 46);
});*/
jQuery(document).ready(function ($) {
	//$('aside[class="left-side sidebar-offcanvas left-trans"]').height($("body").height() - 46);
  $('[data-submenu]').submenupicker();
   $('.peopleListSlim').slimScroll({
        height: '548px',
        alwaysVisible: true
    });

    $('.chatHistorySlim').slimScroll({
        height: '438px',
        alwaysVisible: true
    });
});



(function(){
  
  var chat = {
    messageToSend: '',
    init: function() {
      this.cacheDOM();
      this.bindEvents();
      this.render();
    },
    cacheDOM: function() {
      this.$chatHistory = $('.chat-history');
      this.$button = $('button');
      this.$textarea = $('#message-to-send');
      this.$chatHistoryList =  this.$chatHistory.find('ul');
    },
    bindEvents: function() {
      this.$button.on('click', this.addMessage.bind(this));
      //this.$textarea.on('keyup', this.addMessageEnter.bind(this));
    },
    render: function() {
      this.scrollToBottom();
      if (this.messageToSend.trim() !== '') {
        var template = Handlebars.compile( $("#message-template").html());
        var context = { 
          messageOutput: this.messageToSend,
          time: this.getCurrentTime()
        };

        this.$chatHistoryList.append(template(context));
        this.scrollToBottom();
        this.$textarea.val('');
      }
      
    },
    
    addMessage: function() {
    	//backend call
      this.messageToSend = this.$textarea.val().trim()
      this.render();         
    },
    addMessageEnter: function(event) {
        // enter was pressed
        if (event.keyCode === 13) {
          this.addMessage();
        }
    },
    scrollToBottom: function() {
       this.$chatHistory.scrollTop(this.$chatHistory[0].scrollHeight);
    },
    getCurrentTime: function() {
      return new Date().toLocaleTimeString().
              replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    },
    getRandomItem: function(arr) {
      return arr[Math.floor(Math.random()*arr.length)];
    }
    
  };
  
  chat.init();
  
  var searchFilter = {
    options: { valueNames: ['name','topic'] },
    init: function() {
      var userList = new List('people-list', this.options);
      var noItems = $('<li id="no-items-found">No items found</li>');
      
      userList.on('updated', function(list) {
        if (list.matchingItems.length === 0) {
          $(list.list).append(noItems);
        } else {
          noItems.detach();
        }
      });
    }
  };
  
  searchFilter.init();
  
})();



$(document).on('change', '.btn-file :file', function() {
  var input = $(this),
      numFiles = input.get(0).files ? input.get(0).files.length : 1,
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
  input.trigger('fileselect', [numFiles, label]);
});

$(document).ready( function() {
    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
        
        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;
        
        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }
        
    });
});

$(window).bind("load", function() { 
       
  var footerHeight = 0,
     footerTop = 0,
     $footer = $(".footer-main");
     
  positionFooter();

  function positionFooter() {

          footerHeight = $footer.height();
          footerTop = ($(window).scrollTop()+$(window).height()-footerHeight) - 15 +"px";

         if ( ($(document.body).height()+footerHeight) < $(window).height()) {
             $footer.css({
                  position: "absolute",
                  //top: footerTop
                  bottom:"0px"
             });
         } else {
             $footer.css({
                  position: "relative"
             })
         }
         
  }

  $(window)
         .scroll(positionFooter)
         .resize(positionFooter)            
});