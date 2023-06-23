<h1>LifeWild's API Documentation </h1>

LifeWild's API is pretty simple and only lets you read LifeWild's article documents from the database.

<h2>Table of Contents</h2>

- [Find](#find)
  - [Id](#id)
    - [URI Path](#uri-path)
    - [Search Param](#search-param)
    - [Example query](#example-query)
    - [Response](#response)
      - [Succes](#succes)
      - [Error](#error)
  - [Vernacular Name](#vernacular-name)
    - [URI Path](#uri-path-1)
    - [Search Params](#search-params)
    - [Example query](#example-query-1)
    - [Response](#response-1)
      - [Succes](#succes-1)
      - [Error](#error-1)
  - [Binomial Name](#binomial-name)
    - [URI Path](#uri-path-2)
    - [Search Params](#search-params-1)
    - [Example query](#example-query-2)
    - [Response](#response-2)
      - [Succes](#succes-2)
      - [Error](#error-2)
  - [Conservation Status](#conservation-status)
    - [URI Path](#uri-path-3)
    - [Search Params](#search-params-2)
    - [Example query](#example-query-3)
    - [Response](#response-3)
      - [Succes](#succes-3)
      - [Error](#error-3)

## Find

API route to read Article documents.

### Id

API route to retrieve article documents by its Id.

---

#### URI Path

https://lifewild.vercel.app/api/id

---

#### Search Param

    query : string

---

#### Example query

https://lifewild.vercel.app/api/id?query=abc123

---

#### Response

##### Succes

This API route returns the following object when succesful:

    {
        response: <articleDocuments>,
        length: <number>
    }

##### Error

However, when an error occurs, it returns the following response object:

    {
        response: <Error>,
        length: <number>
    }

---

### Vernacular Name

API route to retrieve article documents by its vernacular name.

---

#### URI Path

https://lifewild.vercel.app/api/vernacular-name

---

#### Search Params

    query : string
    quantity (optional): 'single' | 'Many' (defaults to 'single')

---

#### Example query

https://lifewild.vercel.app/api/vernacular-name?query=cat&quantity=many

---

#### Response

##### Succes

This API route returns the following object when succesful:

    {
        response: <articleDocuments>,
        length: <number>
    }

##### Error

However, when an error occurs, it returns the following response object:

    {
        response: <Error>,
        length: <number>
    }

---

### Binomial Name

API route to retrieve article documents by its binomial name.

---

#### URI Path

https://lifewild.vercel.app/api/binomial-name

---

#### Search Params

    query : string
    quantity (optional): 'single' | 'Many' (defaults to 'single')

---

#### Example query

https://lifewild.vercel.app/api/binomial-name?query=cat&quantity=many

---

#### Response

##### Succes

This API route returns the following object when succesful:

    {
        response: <articleDocuments>,
        length: <number>
    }

##### Error

However, when an error occurs, it returns the following response object:

    {
        response: <Error>,
        length: <number>
    }

---

### Conservation Status

API route to retrieve article documents by its vernacular name.

---

#### URI Path

https://lifewild.vercel.app/api/conservation-status

---

#### Search Params

    query : string
    quantity (optional): 'single' | 'Many' (defaults to 'single')

---

#### Example query

https://lifewild.vercel.app/api/conservation-status?query=cat&quantity=many

---

#### Response

##### Succes

This API route returns the following object when succesful:

    {
        response: <articleDocuments>,
        length: <number>
    }

##### Error

However, when an error occurs, it returns the following response object:

    {
        response: <Error>,
        length: <number>
    }

---