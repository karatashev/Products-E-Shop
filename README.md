The project contains the following components:
❏ Navbar
❏ Footer
❏ CardContainer
❏ Card
❏ CardDetail
❏ Banner
❏ HomePage
❏ Login

we iterate through the library.js array and for each iteration it renders a separate Card.js component in CardContainer Component

React Router is implemented, and the Navbar & Footer are shown on every route, but CardsCont,CardDetail, HomePage and Login page are shown on their separate routes.

- Homepage is on the / - route
- Login is on the /login - route
- CardsCont is on the /products - route
- CardDetails is on the /products/ details - route

Card.js component is a Link so it lead to the route - '/Product/ CURRENTCARD_ID /'. By clicking on each of the cards the url is changing to the current id of the product - '/products/2' for example, but will still show the same CardDetail component with a title.

CardDetail componentis showing the current card image, title, stars, description like shown on the screenshot.

The Banner componentis called inside CardDetail and it show the title which is dynamically changed when we change the the cards.

In the Navbar component, each link has an active class when you are on that route.
