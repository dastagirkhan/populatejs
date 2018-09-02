var populatejs = (function (window, document) {
    function populate(data) {
        // pouplating form values from json object
        for (var name in data) {
            var val = data[name];
            var $el = document.getElementsByName(name),
                type,
                node,
                selectType;
            if ($el) {
                node = $el[0].nodeName.toLowerCase();
                switch (node) {
                    case "input":
                        type = $el[0].getAttribute('type')
                        switch (type) {
                            case 'checkbox':
                                if (val == true || val == false || val == 'checked') {
                                    $el.setAttribute('checked', val);
                                } else {
                                    val = val.split(",");
                                    val.map(function (v) {
                                        for (var i = 0; i < $el.length; i++) {
                                            $el[i].value == v ? $el[i].setAttribute('checked', 'checked') : '';
                                        }
                                    });
                                }
                                break;
                            case 'radio':
                                for (var i = 0; i < $el.length; i++) {
                                    $el[i].value == val ? $el[i].setAttribute('checked', 'checked') : '';
                                }
                                break;
                            default:
                                $el[0].value = val;
                        }
                        break;
                    case "select":
                        if ($el[0].hasAttribute('multiple')) {
                            val = val.split(",");
                            var option = $el[0].getElementsByTagName('option')
                            for (var i = 0; i < option.length; i++) {
                                if (val.indexOf(option[i].value) != -1) {
                                    option[i].setAttribute("selected", true);
                                }
                            }
                        } else {
                            $el[0].value = val;
                            break;
                        }
                        break;
                }
            }
        };
    };
    return populate;
})(window, document);
