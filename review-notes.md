# General review comments
- Better practice to use JSDoc


# roverOperation review comments
- To make calculateRoverPosition more readable you can separation of concerns into several smaller functions.
- Based on your comments you can have function 
	* Rotate 90 degrees,
	* Movement,
	* Out-of-bounds and obstruction checks for every movement

# visualise review comments
- rename createPlateau to createPlateauSimulation make more sense as it is not the actual plateau .It is the simulation of it.


# readme review comments
- It is good to add more instructions on how to use the app here,
	 so, something like "Getting Started: git clone ... cd ... 
	 To install dependencies: npm install To Run the tests: npm test..."
	 
# Last Thoughts:
I search for a file which connect the whole program like " main component"
some code to call createPlateau,placeRover,calculateRoverPosition 
to give me some visualization for the rover after movement.
I think you will be able to use stubs / mocks wherever possible in this file.
