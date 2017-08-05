/* Title: Miscellaneous JavaScript Code for the Portfolio Site
 * Author URI: https://jdaio.github.io
 * Author Name: Jamal Ali-Mohammed
 * Original Date: Thursday, August 3, 2017
 * Updated Date: Check the Github Timestamp.
 */

window.addEventListener('load', function() {
    document.querySelector('.smoothscroll').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#a--footer-contact').scrollIntoView({ behavior: 'smooth' });
    });
});