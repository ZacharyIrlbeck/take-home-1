What follows is a short summary in case my stream-of-thought log isn't clear. 

What didn't work?

As the git commmit history would show, I spent several hours trying to tackle this problem without knowing about the Drag and Drop API. You don't know what you don't know sometimes, but I wish I had started investigating an alternative solution a little bit earlier instead of staying stuck for as long as I did. The upside of this is once I did find the Drag and Drop API, everything felt like it flowed smoothly from then on. Also, I ran into something similar a little later on in the project trying to prevent a user from dropping two dots in the same place. Initially I thought a good solution might have been using a data attribute on the DOM Node as I had used this method before in React, but I kept running into weird behavior with it. Thankfully I didn't spend as near as long on it as I did on getting the circle to follow the mouse. 

What did work? 

I think my biggest "aha" moment during the project happened after I tackled the dragging behavior of the dots, which ironically turned out in the end to be the easiest to implement, while I thought it would've been the hardest. I stepped back on considered the remaining requirements of congratulating a user, resetting the dots back to their original position, and not allowing a user to drop two dots in the same location. Following my hunch that this data was best not stored on a DOM element, I was considering implementing some sort of array of the containers which already had dots in them, and checking any dots placed in a container against that in the drop method. As I considered what that might look like, I thought of React, and it sort of clicked. I had my solution to knock out the three all in one fell swoop, more or less. That wasn't true at all. The only thing I fufilled with that was resetting the dots. However, as soon as I started thinking about it in terms of React, I felt like I knocked everything else out in fairly short order. 

Helpful Resources

As I hadn't implemented any dragging functionality before, I went straight to google at the start of the project. I left the sites that I used there up at the top. They ended up being more unhelpful than helpful, in the sense that I set off on the wrong foot and that let to what felt like some inretractable problems down the line. I would recommend a link to the MDN reference of the Drag and Drop API. 
