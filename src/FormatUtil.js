/**
 * Pads the number to give it a more normal output
 * @param {Number} str - the number you want to format
 * @param {String} pad - the type of padding you want (default is "00")
 * @returns {String} the formatted output
 */
export const pad = (str, pad = "00", length=2) => {
    return (pad+str).slice(-length)
}