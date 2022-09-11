'use strict';

// var exampleCallback = function () {
//     console.log('Order complete!');
// };
//
// if (typeof window !== "undefined") {
//     console.log("will create widget");
//     window.EBWidgets.createWidget({
//         widgetType: 'checkout',
//         eventId: '416405629447',
//         iframeContainerId: 'eventbrite-widget-container-417409612387',
//         iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
//         onOrderComplete: exampleCallback  // Method called when an order has successfully completed
//     });
// } else {
//     console.log("Don't create widget");
// }

<!-- Noscript content for added SEO -->

<!-- You can customize this button any way you like -->
// <button id="eventbrite-widget-modal-trigger-417409612387" type="button">Buy Tickets</button>

// <script src="https://www.eventbrite.ca/static/widgets/eb_widgets.js"></script>

// <script type="text/javascript">
var exampleCallback = function () {
    console.log('Order complete!');
};

if (typeof window !== "undefined") {
    console.log("will create widget");
    window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '417409612387',
        modal: true,
        modalTriggerElementId: 'eventbrite-widget-modal-trigger-417409612387',
        onOrderComplete: exampleCallback
    });
} else {
    console.log("don't create widget");
}
// </script>