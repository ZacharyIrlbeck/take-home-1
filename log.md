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