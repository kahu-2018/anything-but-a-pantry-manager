# anything-but-a-pantry-manager

# Kahu 2018 Final Project

I often come home and have no energy to be creative enough to think of what to cook, I wish there was an app that could give me ideas and plan out meals around some of the food that needs to be eaten!

### Group Agreements
* Honesty, Integrity, Kindness
* Giving people voice
* Celebrate and find success
* Enjoyment in process over product
* Respect and prioritise learning objectives


## User Stories

### MVP

As a user:
* I want to recieve a recipe based on 1 ingredient
* I want to recieve a recipe that knows my dietary and personal food preference
* I want to log in and have a profile

### Stretch 1

* I want to receive a recipe based on more than one ingredient
* I want to be able to tick thing off a recipe list to get an accurate shopping list
* I want to be able to plan X amounts of meals for one shopping list

### Stretch 2

* I want to reject a recipe and get a new one
* I want to give raitings to my recipes
* I want to share with my friends

 ---

## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | App | The component that holds everything |
  | Home | '/' route, base page for info and what our app is |
  | Nav | The nav bar - on every page |
  | Auth | A place where you go to log in or register - holds both of those comps |
  | Login | Where you go to login |
  | Register | Where you go to register |
  | Profile | All your personal info is here, where you can edit your details |
  | GenerateRecipe | Give it an item and recieve a recipe from (external)? API |
  | Recipe | Visualizes the recipe from GenerateRecipe |


## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  | user | Store user info |
  | generateRecipe | Collects Recipes from external API |

 ## Actions

 ### users
 | type | data | purpose |
 | --- | --- | --- |
 | RECEIVE_USERS | users | retreive the users from the server |
 | RECIEVE_USER | users | retrieve one user and their dietary stuff (join table yo) |
 | UPDATE_USER | users | Edit profile info |
 

 ### generateRecipe
| type | data | purpose |
| --- | --- | --- |
| GET_RECIPES | (external API) | Retrieve all recipe info |
| SET_RECIPE | null | Save one recipe to global state |


## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| POST | /api/auth/login	| Yes | Log In a User	| The Users JWT Token |
| POST | /api/auth/register	| Yes | Register a User	| The Users JWT Token |
| GET | /api/users	| Yes | Get user profile info	| Array of user objects |
| POST | /api/users | Yes | Edit profile info | Edits/adds database info |
| GET | (external API) | Yes | Get all recipes | Array of Recipe Objects (we think) |




## DB (Server Side)
  There should be HEAPS of tables

### Auth
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | user_name | String |
  | email | string |
  | hash | string |
  | salt | string |

### Users
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | first_name | String |
  | last_name | string |
  | pic | string |

### Ingredients (can this be an external API?)
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | name_of_food | String |

### UserRestrictions M2M
  | Column Name | Data Type |
  | --- | --- |
  | user_id | Integer |
  | restriction_id | Integer |

### UserFavorites M2M
  | Column Name | Data Type |
  | --- | --- |
  | user_id | Integer |
  | recipe_id (external API) | Integrer |

 ---


## Setup

Run the following commands in your terminal:

yarn start

yarn knex migrate:latest
yarn knex seed:run

## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

`npm run h:deploy` will push your local master branch to your heroku app

`npm run h:migrate` will run your knex migrations on your deployed heroku app

`npm run h:seed` will run your seeds on your deployed app

If ever you need to rollback, you can also just use `npm run h:rollback`
