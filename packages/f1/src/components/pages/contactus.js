import React, { useEffect } from "react"
import { connect, css, styled } from "frontity"
import Link from "../link"
import List from "../list"
import customStyle from '../../assets/css/custom.css'
import PageTitle from '../base/PageTitle'
import Loading from '../loading'

const ContactUsPage = ({ state, actions, libraries }) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link)
    const [page, setPage] = React.useState(null)
    const [header, setHeader] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [form, setForm] = React.useState({})

    const [error, setError] = React.useState(null)
    const [success, setSuccess] = React.useState(null)




    // Get the html2react component.
    const Html2React = libraries.html2react.Component
    const handleInput = (key, value) => {
        setForm({ ...form, [key]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setError(null)
        setSuccess(null)
        setLoading(true)
        const payload = new FormData()

        for (const _key of Object.keys(form)) {
            // console.log('key', _key)
            payload.append(_key, form[_key])
        }


        var requestOptions = {
            method: 'POST',
            body: payload,
            redirect: 'follow'
        }

        fetch("https://wp.bioplast.co.id/wp-json/contact-form-7/v1/contact-forms/6/feedback", requestOptions)
            .then(response => response.json())
            .then(result => {

                setLoading(false)
                if (['mail_failed'].includes(result.status)) {
                    setError(result.message)
                    return
                }

                setSuccess(result.message)
            })
            .catch(error => {
                setLoading(false)
                // console.log('error', error)
                setError(error)
            })

    }
    useEffect(() => {

        var plainHtml = state.source[data.type][data.id]
        plainHtml.content.rendered = plainHtml.content.rendered.replace(/frontity-container/g, "container")
        plainHtml.content.rendered = plainHtml.content.rendered.replace(/frontity-border-0/g, "border-0")
        var documents = new DOMParser().parseFromString(plainHtml.content.rendered, "text/html")
        let pageElement = documents.getElementById('image3-7h').outerHTML


        var docHeader = new DOMParser().parseFromString(plainHtml.content.rendered, "text/html")
        let headerElement = docHeader.getElementById('content4-8h').outerHTML

        setPage(pageElement)
        setHeader(headerElement)
    }, [])

    // Load the post, but only if the data is ready.
    return data.isReady && page !== null ? (
        <div className='container'>
            {header ? <Html2React html={header} /> : null}
            {page ? (
                <form className='row' onSubmit={onSubmit}>
                    <div className='col-lg-8 offset-lg-2 contact-us'>
                        <div className='row'>
                            <div className='col-lg-6 '>
                                <div className="form-group  my-2">
                                        <input required type="text" onChange={(e) => handleInput('your-name', e.target.value)} value={form['your-name']} className="form-control" id="name" placeholder="Name" />
                                </div>
                            </div>


                            <div className='col-lg-6'>
                                <div className="form-group  my-2">
                                    <input required type="text" className="form-control" id="phone" placeholder="Phone" onChange={(e) => handleInput('your-phone', e.target.value)} value={form['your-phone']} />
                                </div>
                            </div>


                            <div className='col-lg-12'>
                                <div className="form-group  my-2">
                                    <input required type="email" className="form-control" id="email" placeholder="Email" onChange={(e) => handleInput('your-email', e.target.value)} value={form['your-email']} />
                                </div>
                            </div>




                            <div className='col-lg-12'>
                                <div className="form-group my-2">
                                    <textarea required rows={5} type="textarea" className="form-control form-textarea" id="message" placeholder="Message" onChange={(e) => handleInput('your-message', e.target.value)} value={form['your-message']} />
                                </div>
                            </div>

                            {error !== null ? (
                                <div className='col-lg-12'>
                                    <div class="alert alert-red alert-dismissible" role="alert">
                                        {error}
                                    </div>
                                </div>
                            ) : null}

                            {
                                success ? (
                                    <div className='col-lg-12'>
                                        <div class="alert alert-success alert-dismissible" role="alert">
                                            {success}
                                        </div>
                                    </div>
                                ) : null
                            }

                            <div className='col-lg-12'>
                                <div className="d-flex flex-row justify-content-center mt-4">
                                    <button disabled={loading} type='submit' className="wpcf7-form-control has-spinner wpcf7-submit btn btn-danger display-4 font-weight-bold" style={{ borderRadius: '30px' }}>
                                        Submit
                                    </button>

                                </div>
                                {/* <div class="mbr-section-btn"><input type="submit" value="Submit" class="wpcf7-form-control has-spinner wpcf7-submit btn btn-danger display-4" /><span class="wpcf7-spinner"></span></div> */}
                            </div>
                        </div>
                    </div>
                </form>
            ) : null}

            {page ? <Html2React html={page} /> : null}
            {/* {page ? null : null} */}

        </div>
    ) : null
}

export default connect(ContactUsPage)


const Title = styled.h1`
  margin-bottom: 3.2rem;
`

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */