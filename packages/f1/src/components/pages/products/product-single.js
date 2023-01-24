import React, { useEffect } from "react"
import { connect, css, styled } from "frontity"
import ImageViewer from 'react-simple-image-viewer'


const ProductSinglePage = ({ state, actions, libraries }) => {
    // Get information about the current URL.
    const [page, setPage] = React.useState(null)
    const [images, setImages] = React.useState([])
    const [productModal, setProductModal] = React.useState([])
    const [isViewerOpen, setIsViewerOpen] = React.useState(false)
    const [currentImage, setCurrentImage] = React.useState(0)
    const data = state.source.get(state.router.link)
    const product = state.source.product[data.id]





    // Get the html2react component.
    const Html2React = libraries.html2react.Component


    useEffect(async () => {
        const mediaResponse = await libraries.source.api.get({
            endpoint: `/wp/v2/product/${product.id}`
        })


        const media = await mediaResponse.json()
        let bioImages = []
        if (typeof media.meta_box === 'object' && Array.isArray(media.meta_box.bio_product_image)) {
            bioImages = media.meta_box.bio_product_image
        }


        setImages(bioImages)
        let _productModal = []
        for (const img of bioImages) {
            _productModal.push(img.full_url)
        }

        setProductModal(_productModal)


    }, [])


    // Load the post, but only if the data is ready.
    return data.isReady ? (
        // <div className='container'>
        <>
            <section data-bs-version="5.1" style={{ width: '100vw' }} className="gallery5 mbr-gallery cid-sZLHVMbhhg" id="gallery5-3a">
                <div className="container">
                    <div className="mbr-section-head">
                        <h3 className="mbr-section-title mbr-fonts-style align-center m-0 display-5">{product ? decodeURI(product.title.rendered.replace("&#8211;", "–")) : null}</h3>
                        <h4 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-7">
                            <br />
                            {product ? <Html2React html={product.content.rendered} /> : null}
                        </h4>
                    </div>

                    <div className="row mbr-gallery mt-4">
                        {images.map((image, i) => (
                            <div className="col-12 col-md-6 col-lg-3 item gallery-image" key={`product-image-${i}`} onClick={() => {
                                setCurrentImage(i)
                                setIsViewerOpen(true)
                            }}>
                                <div className="item-wrapper">
                                    <img className="w-100" src={image.full_url} alt="" />
                                    <div className="icon-wrapper">
                                        <span className="mobi-mbri mobi-mbri-search mbr-iconfont mbr-iconfont-btn"></span>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>


            </section>

            {isViewerOpen && productModal.length > 0 && (
                <ImageViewer
                    src={productModal}
                    currentIndex={currentImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={() => setIsViewerOpen(false)}
                    closeComponent={
                        <a role="button" href="" class="close image-preview-close" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close">&#x2715;</a>
                    }
                />
            )}
        </>
        // </div>
    ) : null

}

export default connect(ProductSinglePage)


const Title = styled.h1`
  margin-bottom: 3.2rem;
`

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */