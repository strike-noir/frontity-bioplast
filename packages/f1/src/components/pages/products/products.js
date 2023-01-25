import React, { useEffect, Fragment } from "react"
import { connect, css, styled } from "frontity"
import link from '@frontity/components/link'
import Link from '@frontity/components/link'

const ProductPage = ({ state, actions, libraries }) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link)
    const [page, setPage] = React.useState(null)
    const [header, setHeader] = React.useState(null)
    const [body, setBody] = React.useState(null)
    const [products, setProducts] = React.useState([])


    // Get the html2react component.
    const Html2React = libraries.html2react.Component

    const goToSingle = (url) => {
        console.log("go to single", url)

    }
    useEffect(() => {
        let _page = state.source[data.type][data.id]
        _page.content.rendered = _page.content.rendered.replace(/frontity-container/g, "container")
        _page.content.rendered = _page.content.rendered.replace(/frontity-border-0/g, "border-0")

        var docHeader = new DOMParser().parseFromString(_page.content.rendered, "text/html")

        const _header = docHeader.getElementsByTagName('section')[0].outerHTML
        const newHeader = _header.replace(/vc_section-has-fill/g, "");

        var docBody = docHeader.getElementsByClassName('item features-image wpb_column vc_column_container')


        let _products = []

        // console.log(docHeader.getElementsByClassName('item features-image wpb_column vc_column_container')
        for (const _docBody of docBody) {
            let aHrefs = _docBody.getElementsByTagName('a')
            var _link = ''

            for (const _ahref of aHrefs) {
                _link = _ahref.getAttribute('href')
                _docBody.setAttribute('src', _link ? _link.replace('https://bioplast.co.id', '') : '')
                _ahref.removeAttribute('href')

            }

            _products.push({
                html: _docBody,
                link: _link ? _link.replace('https://bioplast.co.id', '') : ''
            })


            // _body += _docBody.outerHTML
        }


        setPage(_page)
        setHeader(newHeader)
        console.log(newHeader)

        setProducts(_products)

        // setBody(_body)


    }, [data.route])

    // useEffect(() => {

    //     if (body) {
    //         var _products = document.getElementsByClassName('product-link')

    //         for (const _p of _products) {
    //             _p.addEventListener('click', (e) => {
    //                 goToSingle(e.target.src)
    //             })
    //         }
    //     }






    //     return () => {
    //         var _products = document.getElementsByClassName('product-link')
    //         for (const _p of _products) {
    //             _p.removeEventListener('click', () => { })
    //         }
    //     }
    // }, [body])

    // Load the post, but only if the data is ready.
    return data.isReady && page !== null ? (
        <div>
            {header ? <Html2React html={header} /> : null}
            {/* <section id="info3-21" data-vc-full-width="true" data-vc-full-width-init="false" class="vc_section info3 cid-sUXqLEaU9y vc_custom_1664963870420 vc_section-has-fill">
                <div class="vc_row wpb_row vc_row-fluid justify-content-center vc_row-o-content-middle vc_row-flex">
                    <div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-10">
                        <div class="vc_column-inner">
                            <div class="wpb_wrapper">
                                <h4 style={{
                                    textAlign: 'center'
                                }} class="vc_custom_heading card-title mbr-fonts-style align-center mb-4 display-2"><strong>PET Chem Bottles</strong></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {products ?
                <div className="container" style={{
                    paddingTop: '3em',
                    paddingBottom: '3em'
                }}>
                    <div className='row'>

                        {products.map((_p) => {
                            return (
                                <div className="col-md-3 my-2">
                                    <Link link={_p.link}>
                                        {<Html2React html={_p.html.innerHTML} />}
                                    </Link>
                                </div>
                            )
                        })}

                    </div>
                </div>
                : null}




            {/* {JSON.stringify(data)} */}

        </div>
    ) : null
}

export default connect(ProductPage)


const Title = styled.h1`
  margin-bottom: 3.2rem;
`

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
