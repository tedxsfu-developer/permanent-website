import React from "react";
import EventbriteButton from "react-eventbrite-popup-checkout";

const TicketButton = () => {
    return (
        <EventbriteButton
            ebScriptPath="https://www.eventbrite.com/static/widgets/eb_widgets.js"
            ebEventId="417409612387"
            className="button all-caps transparent"
            component='button'
        >
            Buy Tickets
        </EventbriteButton>
    );
}

export default TicketButton;