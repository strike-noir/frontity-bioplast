import React from "react"

function PageTitle ({ title }) {
    return (
        <section
            id="info3-5l"
            data-vc-full-width="true"
            data-vc-full-width-init="true"
            className="vc_section info3 cid-t2127uwXmW"
        >
            <div className="vc_row wpb_row vc_row-fluid justify-content-center vc_row-o-content-middle vc_row-flex">
                <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-8">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                            <h4
                                className="vc_custom_heading card-title mbr-fonts-style align-center mb-4 display-2 animate__animated animate__delay-1s animate__fadeInUp text-center"
                            >
                                <strong>{title}</strong>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle
