Robot Simulator

Overview
The Robot Simulator is a simple React application that simulates a robot's movement on a 5x5 grid. The robot can move forward and rotate left or right. The current direction and coordinates of the robot are displayed, and the robot's movements can be controlled via buttons or arrow keys.

Features
- Move Forward: The robot moves one step forward in the direction it is currently facing.
- Rotate Left/Right: The robot rotates 90 degrees to the left or right.
- Keyboard Controls: Use arrow keys to change the robot's direction and move it forward.
- Animated Transitions: Smooth animations for the robot's movement and direction changes.

Technologies Used
- React: A JavaScript library for building user interfaces.
- CSS: Styling for the application.
- SVG: Used for representing the robot's direction.

robot-simulator/
├── node_modules/
├── public/
│   ├── coordinate.png
│   ├── east.svg
│   ├── favicon.ico
│   ├── index.html
│   ├── logo512.png
│   ├── manifest.json
│   ├── north.svg
│   ├── robots.txt
│   ├── south.svg
│   ├── west.svg
├── src/
│   ├── App.js
│   ├── App.test.js
│   ├── App1.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md

Installation
1. Clone the repository:
git clone https://github.com/charlieKsw/robot-simulator.git

2. Navigate to the project directory:
cd robot-simulator

3. Install the dependencies:
npm install

Running the Application
To start the development server, run:
npm start

The application will be available at http://localhost:3000.

Usage
1. Buttons: Use the "Move Forward", "Rotate Left", and "Rotate Right" buttons to control the robot.
2. Keyboard Controls: Use the arrow keys to move and rotate the robot:
    - Arrow Up: Move forward and face North.
    - Arrow Left: Move forward and face West.
    - Arrow Right: Move forward and face East.
    - Arrow Down: Move forward and face South.
