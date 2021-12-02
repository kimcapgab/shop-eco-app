# Project Overview

## Shop Eco

The name of my project is called Shop Eco

## Project Description

Shop Eco is an Airtable and React build where the user is able to browse a variety of eco-friendly small businesses. At the homepace, the user is able to navigate shops based on the categories (Furniture, Clothing, and Candles). Each page will lead the user to eco-friendly shops that fit the category that was selected. The user is also able to submit a new shop that they would like to add to the existing list.

## Wireframes

Link to my [wireframes](https://whimsical.com/ecofriendlyshops-Twq66J24Fkc49cguMau7ms)

The Wireframes below depict both desktop and mobile view. The pages for the categories will be very similar, which is why I only included one view. In the mobile view, the menu will be a hamburger menu, as depicted below. For the Submit Shop Page, there will be three links that will route the user to the respective form to update. For Post MVP, I'm wanting to just use one form and have a drop down that will route the form to the respective Airtable API.

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1638406240/Screen_Shot_2021-12-01_at_7.50.36_PM_aqdsnu.png)

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1638406266/Screen_Shot_2021-12-01_at_7.51.01_PM_tbtoyh.png)

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1638406281/Screen_Shot_2021-12-01_at_7.51.18_PM_x6wam7.png)

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1638406298/Screen_Shot_2021-12-01_at_7.51.35_PM_zudi5s.png)

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1638406310/Screen_Shot_2021-12-01_at_7.51.48_PM_itobao.png)

## Component Hierarchy

Below is my component hierarchy.

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1638411158/Screen_Shot_2021-12-01_at_9.12.33_PM_vf0qhj.png)

## API and Data Sample

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This **must** be properly formatted. An example is below:

```json
{
  "records": [
    {
      "id": "rec6xst994mnj2hp5",
      "fields": {
        "description": "Eco Candle Co.'s candles are made in small batches to minimize impact. The candles are scented with essential oils and colored with eco-friendly dyes....",
        "name": "Eco Candle Co.",
        "insta": "@ecocandleco",
        "url": "https://ecocandleco.com/"
      },
      "createdTime": "2021-12-01T19:30:17.000Z"
    },
    {
      "id": "recwh3JVyKToruonW",
      "fields": {
        "email": "hello@simpergoods.com",
        "description": " Simper Goods releases candles in small batches, bottling its candles in recyclable glass jars. Some of its candles offer soothing scents like menthol...",
        "name": "Simper Goods",
        "insta": "@simpergoods",
        "url": "https://www.simpergoods.com/"
      },
      "createdTime": "2021-12-01T19:30:19.000Z"
    },
    {
      "id": "recuGfZuTQqhrflzE",
      "fields": {
        "email": "myorder@thegrowingcandle.com",
        "description": "Sold in reusable ceramic plant pots and along with wildflower seed paper labels, Hyggelight vegan candles are a zero-waste double threat! Hyggelight c...",
        "name": "Hyggelight",
        "insta": "@thegrowingcandle",
        "url": "https://www.thegrowingcandle.com/"
      },
      "createdTime": "2021-12-01T19:30:19.000Z"
    }
  ],
  "offset": "itr1aynDaDV6dPI37/recuGfZuTQqhrflzE"
}
```

### MVP/PostMVP

#### MVP

- React App that utilizes React Router, that allows the user to click on the respective categories and routes them to the individual feeds.
- Utilize Airtable API to GET respective shops
- Utilize forms to POST shops and update the Airtable API.
- Utilize CSS and Flexbox to style App
- Implement responsive design on 2 screen sizes, using a media query

#### PostMVP

- Edit and Delete shops from the feed and Airtable.
- Link each shops Instagram accounts in their individual feeds
- Style using Material UI
- Add "Featured Shops" that displays three different shops that change with pagination
- On form, have a drop down that will route the new information to the respective table in Airtable
- Add Jewelry, Home, and Pet as categories

## Project Schedule

| Day        | Deliverable                                        | Status     |
| ---------- | -------------------------------------------------- | ---------- |
| December 1 | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| December 2 | Project Approval / Airtable Setup                  | Incomplete |
| December 3 | Core Application Structure (Components Creation)   | Incomplete |
| December 4 | GET and POST Data                                  | Incomplete |
| December 5 | GET and POST Data Con't                            | Incomplete |
| December 6 | Basic CSS Components                               | Incomplete |
| December 7 | MVP                                                | Incomplete |
| December 8 | Post MVP                                           | Incomplete |
| December 9 | Presentations                                      | Incomplete |

## Timeframes

| Component                                          | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Researching Idea                                   |    H     |      2hrs      |     2hrs      |    2hrs     |
| Working on Wireframes                              |    H     |      3hrs      |     3hrs      |    3hrs     |
| Proposal                                           |    H     |      2hrs      |     2hrs      |    2hrs     |
| Airtable Setup                                     |    H     |      3hrs      |     3hrs      |    3hrs     |
| Create React App                                   |    H     |     0.5hrs     |      hrs      |     hrs     |
| Initial Creation of Components                     |    H     |      1hrs      |      hrs      |     hrs     |
| Home Page and Links the Route to Respective Page   |    H     |      2hrs      |      hrs      |     hrs     |
| Working with API GET                               |    H     |      2hrs      |      hrs      |     hrs     |
| GET Data for Furniture Component                   |    H     |     1.5hrs     |      hrs      |     hrs     |
| GET Data for Clothing Component                    |    H     |     1.5hrs     |      hrs      |     hrs     |
| GET Data for Candles Component                     |    H     |     1.5hrs     |      hrs      |     hrs     |
| Submit Page and Links to respective Form           |    H     |      2hrs      |      hrs      |     hrs     |
| Form for Furniture                                 |    H     |     1.5hrs     |      hrs      |     hrs     |
| Form for Clothing                                  |    H     |     1.5hrs     |      hrs      |     hrs     |
| Form for Candles                                   |    H     |     1.5hrs     |      hrs      |     hrs     |
| Working with API POST                              |    H     |      2hrs      |      hrs      |     hrs     |
| POST Data for Furniture Component                  |    H     |      2hrs      |      hrs      |     hrs     |
| POST Data for Clothing Component                   |    H     |      2hrs      |      hrs      |     hrs     |
| POST Data for Candles Component                    |    H     |      2hrs      |      hrs      |     hrs     |
| CSS Home                                           |    H     |      2hrs      |      hrs      |     hrs     |
| CSS for Furniture, Clothing and Candles Components |    H     |      2hrs      |      hrs      |     hrs     |
| CSS for Submit Form and Form Components            |    H     |      2hrs      |      hrs      |     hrs     |
| Total                                              |    H     |    40.5hrs     |      hrs      |     hrs     |

## SWOT Analysis

### Strengths:

### Weaknesses:

### Opportunities:

### Threats:
