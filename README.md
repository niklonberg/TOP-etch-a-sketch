# TOP-etch-a-sketch
Etch-a-sketch project as part of TOP's curriculum. Will be experimenting with serenade voice coding to supplement my workflow.

Assignment:

1. Set up a Git repository for this project.

2. Create a webpage with a 16x16 grid of square divs.

   Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!

   It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).

   You need to make the divs appear as a grid (versus just one on each line). This is a perfect opportunity to apply what you have learned about flexbox.

   Be careful with borders and margins, as they can adjust the size of the squares!

3. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

4. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid.
   Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad.
   Tip: Set the limit for the user input to a maximum of 100.

5. Push your project to GitHub!

Extra credit:

Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.

1. Rather than a simple color change from black to white, each interaction should randomize the square’s RGB value entirely.

2. Additionally, implement a progressive darkening effect where each interaction adds 10% more black or color to the square. The objective is to achieve a completely black square only after ten interactions.
   
