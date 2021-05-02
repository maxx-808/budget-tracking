# Budget Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

[Description](#description)

[Technologies Used](#tech-used)

[Steps](#steps)

[Usage Information](#usage-information)

[Questions?](#questions?)

<a name="description"></a>

## Description:

As one of my first personal projects, I wanted to create something that I would continue to use even after finishing development, a budget tracker sounded perfect as I sometimes tend to spend too much. I also wanted to broaden my knowledge on web development so I decided to add new techniques in to the mix, some examples of that are the confirmation email that I have setup for users to confirm their email when signing up as well as a contact form that uses OAuth2 and googleapis to send messages straight to a gmail account. I plan to continue adding small new additions to the scope of this project besides the obvious necessities for a budget tracker. In case you are wondering, for the moment, I do not plan on making the deployed version anything serious, and because of that, users may find there data erased from time to time as I don't want to over load my mongo atlas acct. I doubt that will happen but this is just a warning that this app was not intended to be used deployed by users for extended periods of time. If for some reason this app does well and feedback is great and many, I will consider making this a permanent app and discuss this further with the users at that time.

An application to seamlessly track your income and expenses with easy to read graphs and tables that allow you to look over your spending and what you spend on.

<a name="tech-used"></a>

## Technologies Used:

`React.js` | `Express.js` | `Oauth2` | `MongoDB` | `Node.js` | `googleapis` | `jsonwebtoken` | `nodemailer` | `bcrypt.js` | `react router dom` | `axios` | `bootstrap` | `concurrently` | `dotenv` |

<a name="steps"></a>

## Steps:

### To install on your local machine:

Clone the repo first. Then,

`npm install`

to install all npm packages. If you want to use the app with all of its features (auth token, email confirmation, and contact form) you must create a
.env file in the root directory and add a few variables. For the auth token:

`JWT_SECRET=secret`

This is needed for the auth token to be created to stay logged in for 24hrs. Second, for the confirmation email:

`CONFIRM_EMAIL="add the email which will send the confirmation email from(perferably not your personal)"`

`CONFIRM_PASS="add the password for your email"`

`CONFIRM_SECRET="may be needed for other uses, ex: {your name}-secret-key"`

Last, for contact form you will need a bit more work done to use this on your own. This part requires OAuth2 and smtp, basically you need to create a project with googleapis and allow your email as a tester, you will get your client id and client secret from creating the project and the refresh token from entering the test. this is a tutorial on how to go about this: https://www.hostinger.com/tutorials/how-to-use-free-google-smtp-server . Once you get your client info, add it to your .env file like this:

`CLIENT_ID="your client id from google user content"`

`CLIENT_SECRET="your client secret from google user content"`

`CLIENT_REFRESH_TOKEN="your refresh token from google user content"`

After that has been done, make sure you are not already running any servers on port 3000 or 5000 (unless you change this projects ports) then you can run `npm run dev` in the terminal which should launch the application.

<a name="usage-information"></a>

## Usage Information:

All of this code is either written up by me or used from my previous projects, as well as from google searching new techniques like the confirmation and contact. Feel free to use any of this code as it is MIT.

<a name="questions?"></a>

## Questions?

You can contact me through:

## Github Profile:

https://www.github.com/maxx-808

## Github Deployable URL:

Not yet public as off 5/2/2021 still in the early stages of development.

## Email Address:

maxhiga.hawaii@gmail.com
