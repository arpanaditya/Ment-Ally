<p align='center'><img src='https://raw.githubusercontent.com/arpanaditya/Ment-Ally/main/Web-App/public/favicon.ico' width="150"alt="Ment-Ally Logo" ></p>
<h1 align='center'> Ment-Ally</h1>
<h3 align="center">View at: https://ment-ally.xyz </h3>
<h3 align="center"><a href="https://docs.google.com/presentation/d/1nulYHpQArnUjRhHjWhPXvC-IQZeCjpDq26V4w7HptIY/edit?usp=sharing">View the presentaton</a></h3>
<h3 align="center"><a href="https://www.youtube.com/watch?v=ohZ3cuWT8hA">Live Showcase</a></h3>
<h2>The problem it solves:relaxed: </h2>
<p align='justify'>
Nowadays, taking care of mental health is very essential. It aims to help people in dealing with mental health-related issues like stress, anxiety, depression, etc. You can’t tell whether a person is mentally dealing with stress or pressure by looking at that person. This can be sometimes very risky, leading to suicide. The study supports that in most cases depression and mental pressure are the main reasons for suicide. In the current pandemic situation, due to lockdown, we have witnessed increasing cases of suicide, anxiety, depression. So, we came up with “Ment-Ally” to help people to gain mental peace and stability. It has helpful blogs, a Meditation guide with relaxing music, Yoga, and BMI Tracker. A person can use these to keep himself/herself occupied when feeling sick mentally.
</p>
<h2>How it looks:star_struck: </h2>
<p align='center'><strong>Home Section</strong></p>
<p align='center'><img src='https://user-images.githubusercontent.com/75975428/133915610-4da4511e-a1f4-43ff-bc27-7898d03650f6.gif' alt="Home" ></p>
<p align='center'><strong>Blog Section</strong></p>
<p align='center'><img src='https://user-images.githubusercontent.com/75975428/133917403-5946ec7b-769f-4309-80a2-50658039911f.gif' alt="Blog" ></p>
<p align='center'><strong>Meditation Section</strong></p>
<p align='center'><img src='https://user-images.githubusercontent.com/75975428/133921950-a81e7bbf-75a9-4279-8c00-0c5634f74787.gif' alt="Blog" ></p>

<p align='center'><strong>Yoga Section</strong></p>
<p align='center'><img src='https://user-images.githubusercontent.com/75975428/133917467-5f0cbd2d-4c86-41d1-ab75-94b55c869347.gif' alt="Blog" ></p>


## Prerequisites 👨‍💻

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local 💻

Clone the project in localhost
```bash
git clone https://github.com/Aniket762/playground.git
```
Install all the npm packages. Go into the web folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application in development mode type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

### To spin up the backend server

Navigate to the main project folder in a seperate terminal. Then install all npm packages
```bash
npm install 
```

If you don't have nodemon globally installed on your system, install it so the server can autorefresh 
```bash
npm install -g nodemon
```

Now it's time to spin up the backend server. Run the lines
```bash
npm run dev
```
If you get an error immediately, don't worry. The final step is to connect to the MongoDB database.

Note: The Server Runs on **localhost:8080**

## Connecting to the Database
Spin up your cluster in MongoDB and replace your connection with URI in `.env`
If you face any problems, refer to the [MongoDB](https://www.mongodb.com/blog/postquick-start-nodejs-mongodb--how-to-get-connected-to-your-database) website.


## Connecting to the Database if you haven't used MongoDB Atlas before
Install the MongoDB Node.js Driver with the following command:
```bash
npm install mongodb
```

Set up a [MongoDB Atlas Database](https://www.youtube.com/watch?v=rPqRyYJmx2g) by following this short MongoDB setup video till the *3:20* mark. Stop after that mark!


## How we built it 🧠💻
We used React.js in the frontend and Node.js in the backend and MongoDB as our database. We have used Lottie animation and Framer motion for some components like buttons and illustrations for our website. We have created an API using Express and this API fetches data from our database in the backend for contents in the blogs section. Heroku app is used for hosting the backend. We have used Mongoose which connects our database to Express. We have used firebase for hosting the frontend and then we have connected it to our custom domain.

## Challenges we ran into :slightly_frowning_face:
We faced numerous challenges throughout the journey. First, we have decided to work on VS-Code Live share. But we all were new to it. Sometimes it is the connection issues and sometimes it’s our lack of experience in Live Share feature. It took a lot of time to overcome this issue. 
After this we have faced issues while writing codes for responsive design. Sometimes the components were distorted and moved from their places. It took time to place them in their right position. Placing the elements in their position and designing for responsiveness was our big challenge.
The next challenge which we have faced is domain configuration. This is the first time we are hosting our project on xyz domain. We don’t have any previous experience. We have hosted our project on GitHub pages, but this was completely different. We have to go through the documentation and follow the steps mentioned according to the project. But finally, we all can able to figure this out and did this. Along the process, we all have learned how to configure your project in a custom domain.  

## Accomplishments that we're proud of 😎
The biggest accomplishment for us was that we learned so many things just in 36 hours. We worked with VS-Code Live share, then we have tried Replit. We were able to overcome all the challenges and were able to create and deploy a completely functional web app the way we have envisioned. Even though one of our teammates was sick and another one was out of town, we didn’t lose hope and stayed up all night. It was tiring but all was worth it. We all have tried our best to contribute to this project without thinking about in which condition we are right now. Our team is most proud of the fact that this web app will be able to help many persons across the globe to deal with mental health-related issues.

## What we learned 🤓
We are a group of very enthusiastic developers who are open to learning and experimenting with new techs. The thing which is common among us is that we love hackathons 🤩. In this hackathon we learnt how to use VS-Code Liveshare smoothly. We have created blogs and with the help of API we fetched data from our database. We also have learnt how to connect and configure DNS of any custom domain to firebase project which was something very new for us. 

## Built With :hammer_and_wrench:
- [ ] <img src="https://img.shields.io/badge/MongoDB-white?style=for-the-badge&logo=mongodb&logoColor=4EA94B"> <!--MongoDB-->
- [ ] <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"> <!--Expressjs--> 
- [ ] <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> <!--React-->
- [ ]  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"> <!--NodeJs-->
- [ ] <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"> <!--React-Router-Dom-->
- [ ]  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"> <!--JavaScript-->  
- [ ] <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"><!--Npm-->
- [ ] <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <!--CSS3-->
- [ ] <img src="https://github.com/MarioTerron/logo-images/blob/master/logos/mongoose.png" height="20"> <!--Mongoose-->
- [ ] <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black"> <!--Firebase-->
- [ ] <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"> <!--Heroku-->
- [ ]  <img src="https://user-images.githubusercontent.com/22095598/123793419-f5528800-d8e1-11eb-8c5f-e2dad45a9c81.png" width="16" height="16" /> Framer Motion <!--Farmer motion-->
- [ ]  <img src="https://static.lottiefiles.com/images/v3/lottiefiles-logo.svg" height="25" ><!--Lottie Animation-->




  
 <h2>Team:sunglasses:<h2>
  <table>
<tr>
    <td align="center">
        <img src="https://github.com/arpanaditya/Ment-Ally/blob/main/Web-App/src/screens/About/img/aditya.jpeg" width="100px;" alt=""/>
        <br /><sub><b>Aditya Arpan</b></sub><br />
      <a href="https://github.com/arpanaditya"><img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></a>
      <a href="mailto:adityaarpansahoo@gmail.com"><img src='https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white'></a>
      <a href="https://www.linkedin.com/in/arpan-aditya"><img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></a>
      <a href="https://instagram.com/adityaa_sahoo"><img src='https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white'></td></a>
</tr>
 <tr>
    <td align="center">
        <img src="https://github.com/arpanaditya/Ment-Ally/blob/main/Web-App/src/screens/About/img/kunal.jpeg" width="100px;" alt=""/>
        <br /><sub><b>Kunal Patel</b></sub><br />
      <a href="https://github.com/kunal838"><img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></a>
      <a href="mailto:pkunal257@gmail.com"><img src='https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white'></a>
      <a href="https://www.linkedin.com/in/kunal-patel-760194205/"><img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></a>
      <a href="https://instagram.com/kunal_patel.js"><img src='https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white'></td></a>
</tr>
   <tr>
    <td align="center">
        <img src="https://github.com/arpanaditya/Ment-Ally/blob/main/Web-App/src/screens/About/img/pavitra.png" width="100px;" alt=""/>
        <br /><sub><b>Pavitra Behara</b></sub><br />
      <a href="https://github.com/Pavitra554"><img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></a>
      <a href="mailto:pavitraredmi@gmail.com"><img src='https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white'></a>
      <a href="https://www.linkedin.com/in/pavitra-behara"><img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></a>
      <a href="https://instagram.com/pavitra.js"><img src='https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white'></td></a>
</tr>
 <tr>
    <td align="center">
        <img src="https://github.com/arpanaditya/Ment-Ally/blob/main/Web-App/src/screens/About/img/Ankit.jpeg" width="100px;" alt=""/>
        <br /><sub><b>Ankit Singh</b></sub><br />
      <a href="https://github.com/AnkitSingh0702"><img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'></a>
      <a href="mailto:ankitsingh0702@gmail.com"><img src='https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white'></a>
      <a href="https://www.linkedin.com/in/ankit-singh-6a1428201/"><img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'></a>
      <a href="https://instagram.com/ankitsingh0702"><img src='https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white'></td></a>
</tr>
</table>
<p align="center"><img src="https://user-images.githubusercontent.com/75975428/133925369-4c74ea21-b5c6-46f3-9d1d-f1358fadee40.png"></p>
<h3 align="center">Made with 💝 by Team Ment-Ally</h3>
