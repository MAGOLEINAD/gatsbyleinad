// import React from "react"
// import '@slightlyoff/lite-vimeo';

// function Video() {
//   return (
//     <div className="justify-center sm:hidden flex">
//        <lite-vimeo 
//       videoid="673611602"
//       videoplay="Ver"
//       videotitle="Círculo Mágico"
//        ></lite-vimeo>
//     </div>
//   )
// }

// export default Video
import { graphql,useStaticQuery} from "gatsby"
import React from "react"
export default function Video () {
 
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          html
        }
      }
    }
  `)
  // console.log(data)
    return (
<div className="justify-center sm:hidden" dangerouslySetInnerHTML={{__html:data.allMarkdownRemark.nodes[0].html}}>
  
</div>
    )
}


























// import React from "react"
// import { graphql } from "gatsby"

// export const query = graphql`
//   {
//     markdownRemark {
//       id
//     }
//   }
// `

// const Video = ({data}) => {



// console.log(videocirculo)
// return (
// <div dangerouslySetInnerHTML={{__html: data.allContentfulVideoEmbed.nodes[0].markdownContent.childMarkdownRemark.html}}>


// </div>
// );
// }
// export default Video


// // const {videocirculo} = useStaticQuery(graphql`
// // query{
// //   markdownRemark {
// //     id
// //   }
// // }
// // `)