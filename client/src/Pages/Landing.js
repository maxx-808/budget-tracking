import React, { useState } from "react";
import "../App.css";
import Auth from "../components/Auth/Auth";

const Landing = () => {
  const page = useState({ page: "landing" });
  return (
    <div className="page">
      <Auth>
        <div id="branding">
          <h1>Welcome to my Budget Tracker</h1>
          <h5>
            Look to the top right of the screen to log in or register now!
          </h5>
          <p>
            If you want to learn more about this website and the creator, please
            go to the about page (link located to the top left)
          </p>
          <p>
            If you would like to contact me regarding this application please
            head to the contact page
          </p>
          <p>
            If you would like to go to the link for the github repo or any of my
            links, click the link dropdown above
          </p>
          <p>
            Currently as of JUNE 9, 2021 this application is still being updated
            and in the beginning stages. As you can see there is much to be done
            in terms of styling and usability. More updates to come.
          </p>
        </div>
        <br />
        <h4>
          Here are some things I've wanted to add some of which are already
          added
        </h4>
        <br />
        <ol>
          <li> get app deployed to heroku (completed)</li>
          <li> have password encryption (completed)</li>
          <li> implement email verification (completed)</li>
          <li>
            implement contact form sending messages straight to an email
            (completed)
          </li>
          <li>
            allow app to work seamlessly on localhost as well as on heroku
            (completed as of 5/7/2021 with each push I will be trying my best to
            keep it working live)
          </li>
          <li>
            check that axios calls to backend for setting a new transaction,
            getting all transactions, setting new user, logging in, confirming
            user, getting user data, etc (completed as of 5/22/2021. Will be
            updating if anything changes with newer pushes)
          </li>
          <li>
            adding more miscellaneous pages such as an about page and terms and
            conditions etc.
          </li>
          <li>
            creating a table to view all transactions and their info (completed
            in test branch 5/22/2021. continuing to grow this page until pushing
            to live app)
          </li>
          <li> creating a filter and sort function for table</li>
          <li> adding edit and delete functions to transactions</li>
          <li>
            creating a graph to show transactions during a certain time period
          </li>
          <li>
            adding an easy to use function that allows one to determine whether
            the transactions is income or expense
          </li>
          <li>
            adding easy to use filter words to each transaction so that user can
            sort their transactions into topics such as: paychecks, food,
            entertainment, health, social outing etc.
          </li>

          <li>
            adding a monthly spread sheet possibly emailed to user detailing the
            total income and expense of the month as well as other useful
            information
          </li>
          <li>
            adding interface notifications for functions ran while using app
            such as: pop up notification for when you add a new transaction
          </li>
          <li>
            adding profile page where users can edit their password and email as
            well as ways to delete whole account including transactions
          </li>
          <li>adding giving the front end more styling and polished look</li>
          <li>adding animated styling for moving parts</li>
          <li>
            adding function to recognize repeated transactions such as
            subscriptions
          </li>
          <li>
            currently all I could think up at the moment. marked completed at
            the end of task if task has been completed in both deployed and repo
            versions
          </li>
        </ol>
      </Auth>
    </div>
  );
};

export default Landing;
