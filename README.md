# PetVax - your pet vaccine passport


**Link to Live version of project:** https://petvax.cyclic.app/

![a screenshot of the project index.html](https://cdn.discordapp.com/attachments/946850401536319571/1026244917623803965/Screenshot_2022-10-02_173037.jpg)

## How It's Made:

**Tech used:** Tailwind CSS + DaisyUI, JavaScript, Node.js, Express.js, MongoDB, EJS Embedded JavaScript, Passport.js, Cloudinary 

PetVax - a full stack web application.  The other day, we were trying to get our pets' vaccination records together to send to the groomer and it was just a big mess.  So here is my solution: a space where, you can login and store your pet's vaccination records and an image of the paper-record for safekeeping and easy-sharing.

## Optimizations

I would like to figure out a way to produce a one-time use url to send to a groomer or veterinarian so they can have access to a special view where they can see all the pet's vaccine records.  

Add lists of recommended vaccines for your pet

add a way to remind the user when their pet is due for a vaccination

figure out how to get cloudinary to accept filetypes other than .jpg (the answer was something something they wont serve up pdfs for free)


## Lessons Learned:

This was my first project where I tied together EJS and Tailwind CSS on the front-end.  I learned that trying to mix bootstrap and tailwind is just... probably not going to attempt that again.  I really enjoyed working with the DaisyUI semantic color tags.  On the back-end, I reinforced a lot of earlier learnings about the advantages of the MVC structure - I was able to get lost in trying to style the front-end without breaking the logic that controls how the vaccine records, pets, and sessions are stored.

# How to make this work locally:

## Install

`npm install`

--- 

## Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

## Run

`npm start`
