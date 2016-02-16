(function(){
	var container = document.querySelector('#icons-container'),
        actions = {
            replace: function (content) {
                container.innerHTML = content;
            },
            append : function (content) {
                container.insertAdjacentHTML('beforeend', content)
            },
            prepend: function (content) {
                container.insertAdjacentHTML('afterbegin', content)
            }
        };
	if (container) {
        if (actions['replace']) {
            actions['replace']("<svg style=\"height: 0; width: 0; position: absolute; visibility: hidden;\">\r\n\t<defs>\r\n\t\t<symbol id='icon-square' viewBox='0 0 100 100'>\r\n\t\t\t<rect x='10' y='10' width='80' height='80'/>\r\n\t\t</symbol>\r\n\t\t<symbol id='icon-ellipse' viewBox='0 0 100 100'>\r\n\t\t\t<ellipse cx='50' cy='50' rx='40' ry='40'/>\r\n\t\t</symbol>\r\n\t</defs>\r\n</svg>\r\n");
        } else {
            throw new Error("'mode' parameter is not valid");
        }

	} else {
		throw new Error("Can't find element: " + container);
	}
})();
