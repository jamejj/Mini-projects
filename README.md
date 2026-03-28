# Mini-projects 💻
### This repository contains multiple mini-projects created to practice, experiment with technologies and improve development skills.

## Projects Overview 🗂
| Project | Description | Tech |
|---------|------------|------|
| ToDoList | Mini chcklist for tasks | HTML, CSS, JavaScript |
| OneRepMaxCalculator | Calculating max weights at gym | HTML, CSS, JavaScript |
| GIF Maker | Create GIF with PNGs| Python |
| Discord Bot | Interactive bot for Discord| Python |

## ToDoList 📌
### A simple task management application

### Features
- add tasks
- mark tasks as completed
- delete tasks

### Future Features
- localStorage support
- task editing
- priorities
  
![image_alt](https://github.com/jamejj/Mini-projects/blob/main/ToDoList/ToDoList.png)

## OneRepMaxCalculator🏋️
### A simple calculator that estimates your one-repetition maximum (1RM) using Epley's formula.
#### Epley's formula: 1RM = weight*(1+(0.0333*reps))
![image_alt](https://github.com/jamejj/Mini-projects/blob/b1c4618f8e92ef4690f33843f27c69430c5ce015/OneRepMaxCalculator/OneRepMax.png)

## GIF Maker🎞️
### A simple Python script to automatically create animated GIF files from a sequence of PNG images.
### How to start:
* #### Install the required library:
 ```python
  pip3 instal imageio
  ```
* #### Place your img_1.png, img_2.png, etc., in the same folder as the script.
* #### Run the script:
 ```python
python create_gif.py
```
![image_alt](https://github.com/jamejj/Mini-projects/blob/3bff1e1e784263dccf96bf8969a941be94348a03/GIF%20Maker/GIF.gif)

## Discord Meme Bot 🤖
### A simple and lightweight Discord bot written in Python that fetches and sends random memes using an API.

### Features 🚀
- Meme Command: Responds to $meme with a random image from popular subreddits.
- Real-time Integration: Uses the Meme API to ensure fresh content.
- Simple Setup: Minimalistic code, easy to read and modify.

### How to start:
#### Prerequisites 🛠️
You need to have Python installed. Install the required libraries using pip:
```
pip install discord.py requests
```
#### Configuration ⚙️ 
- Bot Token: Get your bot token from the [Discord Developer Portal](https://discord.com/developers/)
- Privileged Intents: In the Developer Portal, go to the Bot tab and enable Message Content Intent.
- Setup: Replace 'TOKEN' in the script with your actual bot token:
```
client.run('YOUR_SECRET_TOKEN_HERE')
```
#### Usage 🎮 
-Run the bot from your terminal:
```
python3 DiscordBot.py
```
-Go to your Discord server and type:
```
$meme
```
  
![image_alt](https://github.com/jamejj/Mini-projects/blob/432ee7acad588cc5926e45ed1a292f35e604683a/DiscordBot/GIFDiscordBot.gif)

  


