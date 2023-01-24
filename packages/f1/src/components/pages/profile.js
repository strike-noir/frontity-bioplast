import React, { useEffect } from "react"
import { connect, css, styled } from "frontity"
import Link from "../link"
import List from "../list"
import customStyle from '../../assets/css/custom.css'
import PageTitle from '../base/PageTitle'
import Loading from '../loading'

const ProfilePage = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link)
  const [page, setPage] = React.useState(state.source[data.type][data.id])



  // Get the html2react component.
  const Html2React = libraries.html2react.Component

  useEffect(() => {
    let _page = state.source[data.type][data.id]
    _page.content.rendered = _page.content.rendered.replace(/frontity-container/g, "container")
    _page.content.rendered = _page.content.rendered.replace(/frontity-border-0/g, "border-0")
    setPage(_page)
  }, [])

  // Load the post, but only if the data is ready.
  return data.isReady && page !== null ? (
    <div>
      {/* <div className="post-title">
        <Title dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      </div> */}



      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}

      {page ? <Html2React html={page.content.rendered} /> : null}

    </div>
  ) : null
}

export default connect(ProfilePage)


const Title = styled.h1`
  margin-bottom: 3.2rem;
`

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */