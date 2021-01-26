const slides = `

class: center, middle

# GraphQL
## From 0 to Query

???

Notes for the _first_ slide!

---

# What is GraphQL?

> GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. - GraphQL.org

What this means in practice:
* The number of API requests that need to be made to a server is dramatically reduced, in some cases down to a single request
* Data is organized through meaningful relationships and therefore easier to discover

???

TODO: Figure out where to put thie. Maybe on a slide debunking "Oh I would have to rewrite everything!"
* It is suddenly possible to interract with that ancient stored procedure without undertaking a massive rewrite

`;

document.getElementById('source').innerHTML = slides;


var slideshow = remark.create();
