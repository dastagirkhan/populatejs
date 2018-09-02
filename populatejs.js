; (function (w) {
    var populatejs = function (data) {
        // pouplating form values from json object
        for (var name in data) {
            var val = data[name];
            var $el = document.getElementsByName(name),
                type,
                node;
            if ($el) {
                node = $el[0].nodeName.toLowerCase();
                switch (node) {
                    case "input":
                        type = $el[0].getAttribute('type')
                        switch (type) {
                            case 'checkbox':
                                if (val == true || val == false || val == 'checked') {
                                    $el.checked = val
                                } else {
                                    val = val.split(",");
                                    val.map(function (v) {
                                        for (var i = 0; i < $el.length; i++) {
                                            $el[i].value == v ? $el[i].checked = true : '';
                                        }
                                    });
                                }
                                break;
                            case 'radio':
                                for (var i = 0; i < $el.length; i++) {
                                    $el[i].value == val ? $el[i].checked = true : '';
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
                                    option[i].selected = true;
                                }
                            }
                        } else {
                            $el[0].value = val;
                        }
                        break;
                }
            }
        };
    };
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        define(function () {
            return populatejs;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = populatejs;
    } else {
        w.populatejs = populatejs;
    }
})(this);
