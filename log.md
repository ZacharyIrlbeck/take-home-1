Alright, first step is a bit of research ... off to google. 

Sources:

https://www.kirupa.com/html5/drag.htm
https://www.kirupa.com/html5/animating_movement_smoothly_using_css.htm
https://www.kirupa.com/html5/all_about_css_animations.htm


Okay, I think I see what they're saying about the ClientX/Y on the event object given the absolute position, and using the inital position and offset to create a better drag .... going to play with it a bit to solidify this understanding. 

So, then clearly stated, the problem is first one of CSS animation. The first step and easiest variation of the problem that I could solve would be creating a draggable DOM element, then going from there. 

Reading the article explaining the translate3d CSS property, explains the difference between using the CPU vs the GPU to handle browser animations, and states that a good way to create performant animation is to use JS to set CS properties, in particluar, 
the translate 3d one. It also looks like it has the benefit of only repainting the screen locally, in the same way the REACT only re-renders relevent parts of the DOM, rather than re-painting the entire screen as it would if you used traditional CSS positioning instead of a transformation. 

All right, with a few articles explaining a little about animation w/ CSS, I'm going to stick one of the circles on the page and play around w/ animating it w/ CSS and JS. 

.... 


Okay, so then to create the ability to drag the cirlce around, I'm going to need to have, similar to the code on the first page listed in the sources, a mouseup, mousemove, and a mousedown. Different from the page, the element might be any of the 4 circles, so I'll need to set the element being dragged and I'll need a variable for that. 

As of right now, the unknowns are:

- how can I tell if a click corresponds to an element?
- how can I get an element to follow the mouse?
- how can I check if the element is reasonably close to where it's supposed to be, or the "correct answer"?


I added the ability to move the dots, but the follow the mouse at a strange distance. Also, when I try and move them around over the background of hte logo, it works as if clicking the image. This explains the initalX - clientX thing, as well as the e.preventDefault in the move function. 


Okay, so far running into the most challenging part, which is understanding the need for the x and y offsets and intial position to make the image track accurately with the mouse. 


Having some trouble understanding and finding resources to explain the sporadic jumping around off the circles. The work, more or less, if I only use one, so it has something to do with the state not being reset between one circle and the next. It also doesn't track with the mouse like I'd like it to, and I'm presuming that has something to do with using an image file rather than a div made to look like a circle, as in the exmaple. I'm thinking that this all has to do with this one bit that I'm not understanding. I'm going to console.log the variables that control the position and watch how they change depending on what I do. I notice that the xOffset and yOffset stay 0 - I suspect that it's meant to change, and for some reason it's not. I stuck the console.log for all the variable in the onMouseMove, but I also suspect that is more or less functioning how it should be at this point. Instead I'm going to stick it in the onMouseDown event because I'm seeing the error not while dragging it as much as on the intial click. After this I'll go ahead and stick it on the onMouseUp event to see what isn't being reset while changing between the different circles, as I'm imaging that some of the jumping aronnd is owed to the second circle using an offset that belongs actually to the first circle. Also, while browsing the web, I found out about the html attribute "draggable", and the related set of events available to be used. After figuring this out, I'm going to investigate if one solution is better than the other, and the differences between the two. 


Hmmm ... it looks like I forget to update the inital X and Y for a circle in the mouseup event, and that the 
x and y offsets aren't being updated at all ... 


Okay so looks like I forget to set the x and y offsets to the new current position of the circle in the onMouseDown event handler. I'm still not 110% understanding the math/necessity for the 3 variables all together, but putting that in it is more or less working, with the exception of changing between the circles. I'm guessing I'm going to have to store the last offset for each one seperately.



Okay, dots are now draggable. Remaining steps. 

1. Create containers that allow for things to be snapped/dropped in if it's the correct color. 


Okay, so let's see here ... I'm going to want to create this spaces invisbly so that it can snap to, for now adding colors to remember which is which. Postion them over the image where they should snap in. If the .png file is dragged close enough, it'll ... be located to line up with the open postion no? 




• A user should be able to drag a dot from its starting position to the appropriate location in the logo.
• Dots dropped in the wrong location should be rejected.
• Two dots cannot occupy the same space.
• The finished logo should include the dots in the appropriate location within the logo.

• When the logo is properly assembled, congratulate the user.
• The tool should function in a desktop browser.
• Implement the tool first by using a separate DOM element for each image.

Okay, so let's see. Presumably the reason I'd been given the images is so that I use those, not just dissapear the dots, and then 
replace them with divs. However, I do need the invisble divs to give it somewhere to "snap into place too". So, next step is that they snap into place. Later, I'll add some logic around that snapping into place - i.e, no two dots should snap into place, and, later, checking that they are all the right color, etc. 


                            A Fresh Start

All right, I was having a hard time implementing this the way that I was going about it. I decided to dig a little bit deeper into the droppable API, and am having a much easier time with it. I decided to restart with index2.

So, I can drag and drop the dots into the image, it needs a little polish but more or less there. Back to it!

Okay, so then, onto the next requirement - if it's the wrong color.

