# What to do when editing code

1. Go to https://github.com/NihalC2012/tsa2026-web
2. Find this thing and click it
<img width="1060" height="600" alt="image" src="https://github.com/user-attachments/assets/3b972317-c8c5-4bd1-b947-6d4467ad2e7d" />

3. Put the branch name as your name and click "Create branch ____ from main"
4. Edit code there

This is done so if you acidentally mess up the website you dont mess up the main code for the website that alrady works.




# How to run website


1. Install Git and Node.js

Make sure you have both installed:

Git: https://git-scm.com/downloads

Node.js (includes npm): https://nodejs.org/en/download/

2. Clone the repository

Open your terminal (Command Prompt, PowerShell, or Git Bash) and run:

git clone https://github.com/NihalC2012/tsa2026-web.git


This will create a folder called tsa2026-web with all the files.

3. Go into the project folder
cd tsa2026-web

4. Install dependencies

The project uses npm, so run:

npm install


This reads the package.json and downloads all the required libraries.

Note: Make sure package.json exists in this folder. From your earlier error, if you run npm install somewhere else, it will fail.

5. Start the development server
npm start


This should start the website locally, usually at:

http://localhost:3000


You can open this in your browser to see the site running.


