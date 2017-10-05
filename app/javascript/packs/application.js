/* eslint no-console:0 */
var componentRequireContext = require.context('packs/components', true)
var ReactRailsUJS = require('react_ujs')
ReactRailsUJS.useContext(componentRequireContext)
