Your project should contain the following components:
❏ Navbar
❏ Footer
❏ CardContainer
❏ Card
❏ CardDetail
❏ Banner
❏ HomePage
❏ Login

Card component is created for you, you should iterate through the library.js array and for each iteration will show a separate Card.js component in CardContainer Component

CardDetail component is created for you , you can put it to app component to see how it looks

Create a Router, and make the Navbar & Footer show on every route, but CardsCont,CardDetail, HomePage and Login page should show on their separate routes.

- Homepage should show on the / - route
- Login should show on the /login - route
- CardsCont should show on the /products - route
- CardDetails should show on the /products/ details - route

Modify the Card.js component to be a Link so it lead to the route - '/Product/ CURRENTCARD_ID /'. When you do that, clicking on each of the cards should change the url up top to '/products/2' for example, but will still show the same CardDetail component with a title.

Modify the CardDetail component to show the current card image, title, stars, description like shown on the screenshot.

Additionally, show a Banner component (which is created but you should modify) which will be called inside CardDetail and should look like the screenshot. The Banner component should have a title, which will change for each card.

in NAVBAR, each link should have active class when you are on their route, check Screenshots
