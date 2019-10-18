# Fate/GO Calculator v2

An app which allows a user to keep track of the Servant characters they've obtained in the mobile game Fate/Grand Order. It allows the user to update the characters' stats as they level up, sort them by name, class, and various stats, and offers suggested teams based on class advantages and disadvantages.

## Setup Steps

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone) this repository.
1. Run `install npm` to install all dependencies
1. Use `npm run server` to spin up the server.

## Important Links

- [Other Repo](https://github.com/dtersoff/fate-calculator-2-api)
- [Deployed API](http://agile-earth-42586.herokuapp.com/)
- [Deployed Client](https://dtersoff.github.io/fate-calculator-2-client)

## Planning Story

- [x] Create express model for servants
- [x] Create express routes for servants
- [x] test user and servant routes
- [x] Begin building client in react, using previous version handlebars as reference.
- [ ] Begin building new features


### User Stories

- As a user I want to sign in/up
- As a user I want to sign out
- As a user I want to change password
- As a user I want to Create a new Servant
- As a user I want to Read multiple Servants
- As a user I want to Read a single Servant
- As a user I want to Update a Servant I own
- As a user I want to Delete a Servant I own

### Technologies Used

- HTML/CSS
- Bootstrap
- Javascript
- Express
- React

### Catalog of Routes

Verb         |	URI Pattern
------------ | -------------
GET | /servants
GET | /servants/:id
POST | /servants
PATCH | /servants/:id
DELETE | /servants/:id

### Unsolved Problems

- Would like to eventually
  - [ ] Implement servant suggestion feature 
  - [ ] Make react table headers and filter fields sticky so that they can still be seen when scrolling down
  - [ ] Customize filter fields so that some are dropdown menus

## Images

#### Wireframe:
![wireframe](https://i.imgur.com/V9DThg2.jpg)
![wireframe](https://i.imgur.com/pfJppUC.jpg)

---

#### ERD:
![ERD](https://i.imgur.com/t4kX8up.jpg)
