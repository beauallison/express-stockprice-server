Stockprice Server
=====

## Assumptions

After reviewing the requirements, and inspecting both the MongoDB collection and respective APIs, my assumptions in relation to the project are as followed:

- Present a card per company, not just Microsoft
- Only present companies that have complete data sets. This means:
	- A company name
	- A valid ticker code
	- A price and it's unit type
	- A story feed URL and at least one story

## Setup Instructions

These instructions are to run through the provided test cases and start the node server. These setup instructions assume a comfortability with VI.

### Prerequisites
- OSX
- Node.js _> 7.6.0_
- MongoDB _installed and started_

_Optional_

- NVM 
- VIM

### Instructions 

1. Git clone this repo
1. `nvm install`
1. `npm install`
1. `cp config/default.json config/test.json`
1. `vi config/test.json` _& apply your configuration_
1. `npm test`
1. `npm start`
1. Open `http://localhost:3000` in your browser
