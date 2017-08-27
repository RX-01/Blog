import {createClient} from 'contentful'


    const client = createClient({
        // This is the space ID. A space is like a project 
        //folder in Contentful terms
        space: 'qjc0psexx9j2',
        // This is the access token for this space. 
        //Normally you get both ID and the token in the Contentful web app
        accessToken: 'ac4bde6605b7853e26f65ca15715c2aa2ab03690fa2fa44ccfc993f634667619'
      })

export default client;