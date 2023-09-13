// TODO implement selector bar

/**
 * Changes current page using select object input
 */
function selector() {
    var selector_ref = document.querySelector("select");
    window.location.href = selector_ref.options[selector_ref.selectedIndex].value;
}