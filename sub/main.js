$(function(){

    $(function(){ 			
        $(document).ready(function() { 				
            $('#fullpage').fullpage({
                v2compatible:true,				
                //options here 					
                autoScrolling:true, 					
                scrollHorizontally: true, 					
                licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE', 					
                scrollingSpeed: 700, 					
                autoScrolling:true, 					
                scrollOverflow:true, 					
                navigation: true, 					
                ecordHistory:true, 					
                //responsiveSlides:true, 					
                navigationPosition: 'right',
                //other options here		
                onLeave: function(origin, destination, direction){ 				 
                    if((origin == 1 && direction == 'down')){ 					
                        $('.header').addClass('top');
                        $('.header_hid').addClass('top'); 
                        $('.section-01_bgtxt').fadeOut(800);
                        $('.section-02_bgtxt').fadeOut(0); 
                        $('.section-02_bgtxt').fadeIn(800); 
                    }
                    
                    else if
                    
                    (
                        (origin == 2 && direction == 'up')){ 					
                            $('.header').removeClass('top');
                            $('.header_hid').removeClass('top');
                            $('.section-01_bgtxt').fadeIn(800); 
                            $('.section-02_bgtxt').fadeOut(800); 									 
                        } 
                        
                        else if 
                        
                        (
                            (origin == 2 && direction == 'down')){ 					 				 
                                $('.section-02_bgtxt').fadeOut(800);
                                $('.section-03_bgtxt').fadeOut("fast"); 
                                $('.section-03_bgtxt').fadeIn(800); 
                            } 
                            
                            else if 
                            
                            (
                                (origin == 3 && direction == 'up')){ 					 				 
                                    $('.section-02_bgtxt').fadeIn(800);
                                    $('.section-03_bgtxt').fadeOut(800);
                                } 
                                
                                else if 
                                
                                (
                                    (origin == 3 && direction == 'down')){ 
                                        $('.section-03_bgtxt').fadeOut(800);
                                        $('.section-04_bgtxt').fadeOut("fast"); 
                                        $('.section-04_bgtxt').fadeIn(800); 				 				 
                                    } 			

                                    else if

                                    (
                                        (origin == 4 && direction == 'up')){
                                            $('.section-03_bgtxt').fadeIn(800);
                                            $('.section-04_bgtxt').fadeOut(800);
                                        }
                                } 		
            }); 			
            //methods 			
            //$.fn.fullpage.setAllowScrolling(false); 
        });
    });

}); 