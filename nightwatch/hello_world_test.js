
// module.exports = {
//     test: client => {
//         client
//             .url('https://duckduckgo.com/') // On va sur le site de duckduckgo
//             .waitForElementVisible('#logo_homepage_link', 10 * 1000) // On attend que l'élément qui a l'attribut id égal à logo_homepage_link se charge
//             .assert.visible('input[type=text]') // On vérifie que l'élément input[type=text] est visible
//             .setValue('input[type=text]', 'hello world') // On tape dans l'input la valeur 'hello world'
//             .assert.visible('input[type=submit]') // On vérifie que l'élément input[type=text] est visible
//             .click('input[type=submit') // On clique sur le bouton
//             .waitForElementVisible('.results--main') // On attend que l'élément qui a l'attribut class égal à results--main se charge
//             .assert.visible('#r1-0') // On vérifie que l'élément qui a l'id égal à 'r1-0' est visible
//             .assert.visible('#r1-0 .result__a')
//             .assert.containsText('#r1-0 .result__a', 'Hello world — Wikipédia')
//             .click('#r1-0 .result__a')
//             .assert.visible('#firstHeading')
//             .assert.containsText('#firstHeading', 'Hello world') // On vérifie que l'élément qui a l'id égal à 'firstHeading' contient le texte 'Hello world'
//     }
// }
