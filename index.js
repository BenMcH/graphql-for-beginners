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
* The number of API requests that need to be made to a server is dramatically reduced, in many cases down to a single request
* Data is organized through meaningful relationships and therefore easier to discover

???

TODO: Figure out where to put thie. Maybe on a slide debunking "Oh I would have to rewrite everything!"
* It is suddenly possible to interract with that ancient stored procedure without undertaking a massive rewrite

---

# Building Blocks

There are several concepts required when putting together a GraphQL API:

* Schema - Defines the shape of your data and graph entrypoints
* Fields - Data belonging to an object of some type that is queryable through the GraphQL API
* Types - A named object shape with its own set of constraints
* Enums - A pre-defined list of inputs or outputs

\`\`\`graphql
    enum UserType {
        USER
        ADMIN
    }

    type User {
        email: String!
        firstName: String!
        lastName: String
        userType: UserType!
    }
\`\`\`

---
# Building Blocks Cont.

As seen previously, types are built from a collection of fields with either Object types or Scalar types. Object types are simply any type that we have defined ourselves.
The list of available Scalar (Primitive) types are listed below:

* Int
* Float
* String
* Boolean

There are a couple of "modifier" types as well:
* Null
* List

\`myNullableList: [String]!\`

---

# Request Types

* Query - Akin to a SQL SELECT statement
    * Fields are generally resolved in parallel. Resolvers should be idempotent
* Mutation - Any modifications to data happen here. Similar to SQL INSERT, UPDATE, DELETE 
    * Mutations are resolved serially
* Subscription - This is much like a query but gives your application a mechanism to receive updates to data that has been requested
    * Subscriptions are rarely used today

---

# Your first query

\`\`\`graphql
    query MyFirstQuery {
        myUser {
            firstName
            lastName
        }
    }
\`\`\`

What we have above is a query that asks the root of the graphql server, the \`Query\` type, for the field titled \`myUser\`.
This \`myUser\` field will resolve the \`User\` type from the previous slide. Notice that we don't select the full \`User\`
object but instead only grab the user's first and last names.

---

# Arguments

\`\`\`graphql
    query ProductSearchQuery($searchTerm: String!) {
        searchProducts(searchTerm: $searchTerm) {
            productName
            description
            price
            quantityInStock
        }
    }
\`\`\`

Building upon the last example, sometimes we need to provide data, such as a search term or an identifier, as an argument to our GraphQL resolver.

---

# Mutations



`;

document.getElementById('source').innerHTML = slides;


var slideshow = remark.create();
