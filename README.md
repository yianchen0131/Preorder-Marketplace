##Preorder Website
This project is implemented with react. Preorder website is an ecommerce platform for users to place preorders on products listed. This particular project uses class components instead of functional components of react. Users may browse the site, and check the listed product and its details. At the product browse page, users may view the details of the product and check the special preorder sales bundle at the bottom. Users may add however many quantity they would like to purchase and add to cart. The checkout button routes users to member login, which has not been implemented (yet). New users may click on "join" on the navbar to fill in information, which gets pushed to minimongo database.

##Usage
run `yarn install` after cloning git

`yarn start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

##Minimongo IndexedDB
This project uses Minimongo IndexDB to store items data and member data upon member signing up in "Join" from the navbar of the website. Items are already imported to items database

##React router Dom was installed to do routing implementation

##Bootstrap
The design of the website was implemented with CSS, bootstrap, and react-bootstrap, in future I will get rid of react-bootstrap and just use the original bootstrap. But for now it will have both since the bootstrap Accordion implementation did not work on my program.

##Deployment
Deployed with Surge. Deployment here: http://giantpreorderplace.surge.sh/

##Authors and Acknowledgment
This project uses a circular progress bar by Kevin Qi, found here: https://github.com/kevinsqi/react-circular-progressbar This project also uses a countdown timer from tickcounter.com, found here: https://www.tickcounter.com/# Preorder-Marketplace
