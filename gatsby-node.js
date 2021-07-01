var path = require('path')

exports.createPages = async ({actions,graphql})=>{
  const{createPage} = actions;
  const result = await graphql(`
  {
    allContentfulWebSolution {
      nodes {
        slug
        title
        description {
          json
        }
      }
    }

  }`)
  

  result.data.allContentfulWebSolution.nodes.forEach((obj)=>{
    createPage({
      path: `/product/${obj.slug}`,
      component: path.resolve('./src/templates/product.tsx'),
      context:{
        itemDetails : obj
      }
    })
  }

  )
}
















/*exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
   
    if (page.path.match(/^\/product/)) {
      
      page.matchPath = "/product/*"
  

      createPage(page)
    }
  }
*/

  /*const arr  = [
    {name: "Fruit" , desc: ""}
]

exports.createPages = async function ({ actions}) {

    actions.createPage({
        path: "fruits",
        component: require.resolve(`./src/templates/fruits.tsx`),
        context: { 
            // Data passed to context is available
            // in pageContext props of the template component
            name: "Mango",
            desc : "This is the Chonse"
         },
    });
    console.log("End of Gatsby Node File");
}*/