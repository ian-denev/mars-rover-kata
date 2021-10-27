# mars-rover-kata
This repository contains a solution for the Mars Rover Kata
## Problem Description
* See [problem-description.md](./problem-description.md)
## How to run
* node index.js - use to run task sheet example
* different inputs are available - comment/uncomment to use them
## Solution Approach
* The rover can bump into the edges of the plateau. Wrapping at the edges was considered, however, decided against after initial feedback on notes: "the idea is the rover lands on a plateau which is rectangular ... so it would have edges"
  * The original version of this task (https://kata-log.rocks/mars-rover-kata) states that there must be wrapping at the edges as the plateau represents a sphere.
* Multiple rovers can not move at the same time: "Rovers move sequentially, this means that the first Rover needs to finish moving first before the next one can move."
* The plateau is for the most part described and manipulated using the coordinate system and its rules specified in the problem description.
  * The plateau is only expressed as a 2D array if it is to be displayed with the rovers' final positions.
## Version Control Practices
* Commit messages will follow the Conventional Commits specification:
  * https://www.conventionalcommits.org/
  * https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines
## Personal goals
* ✔️ Must: Correct output for the provided input
* ✔️ Must: Apply TDD approach
* Should: Practice test doubles in Jest
  * ✔️ Use dummies - DRY principle
  * ✔️ Use describe.each for test parameterisation wherever possible - Open-Closed principle
  * ❌ Use stubs / mocks wherever possible
    * Did not find a suitable application - may be useful for tests on index.js?
* Should: Apply separation of concerns
  * ✔️ Use index.js only as an entry point to the program
* ✔️ Could: Visualise plateau in console - use 2D array
