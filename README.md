<img src="https://i.ibb.co/yf7Js20/Pow-Wow-Empty-Tee-Pee.png" alt="Pow-Wow-Empty-Tee-Pee" border="0" align="center" />
<h1 align="center">Pow Wow</h1>

### End product: an application for users to download and run from their own Heroku domain.

## Private Group Chatroom For Free

Have you ever wanted to plan a secret event or hear others out on their non-shared environmental experiences in the work environment, or do you know there are people in your organization who's voices aren't being heard?

Set a time for a group chat and have one person download this application, post it to Heroku, and email the Heroku URL to your group. Then users log in and send messages to the chatroom anonymously.

Say you have different departments at work that all are aware of what other departments do, and there seems to be the same workflow bottlenecks every week; use this application and invite everyone in the company to participate in the anonymous chatroom to share ideas without having to follow command.

To host the final product on Heroku:
These steps are complicated and will be included in the final release.

To host a release locally (to predict the final product):
1. Must be on a Mac or do your own research to host in on a Windows PC
2. Download the release zip to the desktop
3. Use the Linux command line in the terminal to get into the downloaded folder (called the 'project directoy')
*if new to Linux, this tutorial is comprehensive, but you only need to cd into the directory for step 4: [https://tutorials.ubuntu.com/tutorial/command-line-for-beginners#0](https://tutorials.ubuntu.com/tutorial/command-line-for-beginners#0)
4. From the terminal in the project directory location, run the commands 
* **npm install** hit 'enter'
* **rails db:create** hit 'enter'
* **rails db:migrate** hit 'enter'
* **rails s -p 2999** hit 'enter'
5. go to your browser and type in the website address **localhost:2999** and make up users and check out the chatroom at localhost:2999/chatroom (vers. 2.0.0 or 1.0.0)


Current builds:
[Release 2.0.0](https://github.com/GProSoftware828/ReactLoginActionCableChat/releases) Chat Room and React Authentication- chatroom working at localhost:2999/chatroom; React login and logout fully functional, Rails chatroom View page not yet added to React component in order to log users in for the chat room; props show logged in status or logged out status in component, redirects, remains same status during page refreshes.

[Release 1.0.0](https://github.com/GProSoftware828/ReactLoginActionCableChat/releases) Working Before Authentication- Rails chatroom using action cable fully functional (now disconnected) and React frontend components added to Rails app that work; authentication not yet added.
