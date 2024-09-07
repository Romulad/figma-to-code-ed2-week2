# Ballamas : Front end of an online clothings shop

## You can:
- View the list of product categories
- View the list of product by categories
- Easily add or remove a product from cart
- View the detail page of each product for more information and\
for product recommandation
- View your cart, increase or decrease each product count, clear your cart
- View the checkout page and make a fake payement

Live version : [click here](https://ecom-figma.vercel.app)

## Technologies
1. **JavaScript**
2. **React**
3. **Vite**
3. **Tailwind CSS**

The figma mockup used to create this app can be found [here](https://www.figma.com/design/FHEN8l5THsabutI06zIgON/Tokena?node-id=0-1&t=OqqOP4nhxQQGVZ78-1)\
and was an initiative by the [`figmaToCode`](https://www.figmatocodechallenge.com) team 🙏.

## Run locally

### Using Docker
The app has a public container image on docker hub\ 
and you can run it with `docker run` command.

**Note**: You need to have [Docker](https://www.docker.com/products/docker-desktop/) installed before following these instructions.

- Make sure [Docker](https://www.docker.com/products/docker-desktop/) engine is running\
on your system and Docker client is accessible from your command line
- Then run this command:
```bash
docker run --rm -p 5173:5173 
```
And you're done! visit the url displayed in your terminal to view the app.

### By setting up the dev environment
To run this app locally make sure you have the following prerequisites on your system:
- [Node.js](https://nodejs.org/en/download/current), this include `npm` (Node Package Manager) will be use to run the app. 
- [Git](https://git-scm.com/downloads) for cloning the repository. 

#### Clone the repo
- Open your terminal
- navigate to the folder where you want to clone the repository
- then run:
```bash
git clone https://github.com/Romulad/figma-to-code-ed2-week2.git
```
This command will clone this repository to your local machine.

#### Install dependencies and run the app
In your terminal :
- Navigate to the new directory created by running:
  ```bash
  cd figma-to-code-ed2-week2
  ```
- install the necessary packages by running this command:
  ```bash
  npm install
  ```
- once the installation is completed start the app with:
  ```bash
  npm run dev
  ```

And you're done! visit the url displayed in your terminal to view the app.