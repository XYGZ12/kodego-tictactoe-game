# kodego-tictactoe-game
Project Structure:
The project structure for this app/game is:
The root folder, 'kodego-tictactoe-game' contains two sub-folders, namely, 'tictactoe-backend' for the backend part of my app/game. And 'tictactoe-frontend' for the frontend part of my app/game. I have used node.js for my backend and react.js for my frontend. Both ends of the app/game are using Typescript.
---
Compromises & Such:
Because of time constraints, I have focused on the functionality of the app/game. With more time, I would like to improve the design and ui of my app/game. I wanted to use codepen.io for my solution... but it seems like I can't use node.js in their platform. So I chose to Github to present my solution instead, since my app/game is using node.js.
---
Error Cases & Such:
For the app/game itself, there are no unhandled errors. But I'm having issues with deployment. I believe it has something to do with the size of my app/game. And since I'm only using the free web hosting version of Render, the size of my app should be 512 MB or less. But I think the size of my app/game is more than that. It doesn't really have an impact on the solution, it's just that my app/game can only be accessed locally because I haven't deployed it yet.
---
How To Access This App/Game Locally:
1. Clone this app/game in your Github Desktop. You can also download it as a zip file if you prefer that method.
2. After cloning/downloading the zip file, open it in VS Code.
2.1. If you chose to download it as a zip file, make sure to extract it first, then open it in VS Code.
3. After opening the file in VS Code, open a new terminal (in VS Code). On the terminal, write this command: cd tictactoe-backend. Press Enter. After that, write this command on the same terminal: cd src. Press Enter. After that, enter this command on the same terminal still: cd server. Press Enter. Then enter this command, npm install. Press Enter. Wait for the installing process to be done. After that, enter this command on the terminal, npx ts-node server.ts. Wait for a few seconds, then this message will show on the terminal 'Server is running on port 5000'. Open your browser and go to: http://localhost:5000/.
4. Now for the frontend part... open a new terminal (in VS Code still) and enter this command: cd tictactoe-frontend. Press Enter. After that, enter this command: npm install. Press Enter. Wait for the installing process to be done. After that, enter this command: npm start. Wait for a few seconds then the react app will open a new tab on the browser automatically.
5. Now the app/game is ready.
6. To play the game, just press the white parts inside the rectangles on the web interface of the app/game. If you want to reset the game, just press the 'Reset Game' button.
