# Tweeter Project

Tweeter is a simplified single-page Twitter clone utilizing an HTML, CSS, JS, jQuery, AJAX front-end, Node, Express, and MongoDB back-end.

This app has been deployed to [Heroku](https://tweettweeter.herokuapp.com/)

## Features:

Users can populate a tweet container with tweets posted by randomized users (with accompanying icons and handles).
-Users are notified and prevented from posting tweets that contain too many characters or non at all
-Cross-site scripting is escaped to prevent users from posting invasive script
-Posted tweets feature hover over animations for additional detail
-Application has a responsive design with unique layouts for both mobile and desktop screens
-Animations for dropdown tweet input and scroll to the top are implements via buttons

## Final Product

![Empty input (mobile)](https://github.com/AdamTranquilla/tweeter/blob/master/public/images/empty-text-mobile.png?raw=true)
![Overflow input (Desktop)](https://github.com/AdamTranquilla/tweeter/blob/master/public/images/desktop-longtext.png?raw=true)
![Browsing tweets (mobile)](https://github.com/AdamTranquilla/tweeter/blob/master/public/images/mobile-home.png)


## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- md5
- moment
