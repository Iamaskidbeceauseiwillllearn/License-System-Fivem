# MS-License-System-Fivem

***MS Lizenz System***

Info: That's not my source, I just had to fix it.

You need: XAMPP, Texteditor. recommendation: Visual Studio Code

step 1: You download the MS_License file and open the Check.php file and enter your database connection in line 3.
![Schritt1](https://user-images.githubusercontent.com/102701262/170688456-fab900ac-bb67-4cee-97d4-4b1d66ef93e1.png)

Step 2: Then you create a database with the name of your choice, but because you also entered it in Check.php at the same time, and add the MS.sql file in your database.
![Schritt2](https://user-images.githubusercontent.com/102701262/170688564-36f30596-8902-40ca-a646-1d1a975d048d.png)

If it worked, this window should appear: ![Erfolg](https://user-images.githubusercontent.com/102701262/170688606-86aaf722-4f7e-4b45-a257-6dc121ce3558.png)
The database should then look like this: ![Erfolg2](https://user-images.githubusercontent.com/102701262/170688678-a3932ff8-5a3a-4865-95cf-e0c1c5eb3330.png)
![erfolg3](https://user-images.githubusercontent.com/102701262/170688732-c5b7ab55-80f0-44ed-9d24-a5b43f02b7fc.png)
If it all looks like this for you, as for me, you have successfully set up the database.

Step 3: Then you open the htdocs folder and add the two php files there. You will find the folder in your Xampp installation directory.
![Schritt3](https://user-images.githubusercontent.com/102701262/170688772-395368d7-b699-4ed9-851a-1fbfeb1be3d8.png)

So you have set up the license system, now only the Discord Bot and the Lua code are missing.

Discord Bot
You Need: Node.js
Link to Node.js: https://nodejs.org/en/

Step1: You go to the MSBot folder and run it in cmd, you do it like this:
![Schritt1](https://user-images.githubusercontent.com/102701262/170688950-68ce2441-cc93-4533-9179-4896be087fd0.png)

Step2: Once cmd is open, after installing Node.js previously, type npm i there and close it again

Step 3: Next, open the index.js file and enter the Discord Bot Token there and replace where DEINEID is with your Discord ID and where is DEINEChannelID with the ChannelID where the logs should be sent to.

Next, enter your database connection there.

Step4: To start the bot, open the bot folder again in cmd and enter node index.js.

You can get bot tokens from this page: https://discord.com/developers/docs/intro

That's it, the bot is set up


