var csstree = require('css-tree'),
List = csstree.List,
stable = require('stable'),
specificity = require('csso/lib/restructure/prepare/specificity');

/**
@@ -162,7 +161,7 @@ function _bySelectorSpecificity(selectorA, selectorB) {
* @return {Array} Stable sorted selectors
*/
function sortSelectors(selectors) {
return stable(selectors, _bySelectorSpecificity);
return [...selectors].sort(_bySelectorSpecificity);
}