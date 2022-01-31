/* FORMS */
import React, {useEffect} from "react";

const HubspotContactForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    portalId: '20187230',
                    formId: '1e5c33f6-7178-4673-ac9a-e9e531dca78b',
                    target: '#hubspotForm'
                })
            }
        });
    }, []);

    return (
        <div>
            <div id="hubspotForm"></div>
        </div>
    );

}

export default HubspotContactForm;