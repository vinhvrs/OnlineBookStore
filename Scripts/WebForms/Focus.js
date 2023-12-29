// CdnPath=http://ajax.aspnetcdn.com/ajax/4.5.1/1/WebForms.js

function WebForm_FindFirstFocusableChild(control) {
    if (!control || !control.tagName) {
        return null;
    }

    var tagName = control.tagName.toLowerCase();
    if (tagName === "undefined") {
        return null;
    }

    var children = control.childNodes;
    if (children) {
        for (var i = 0; i < children.length; i++) {
            try {
                if (WebForm_CanFocus(children[i])) {
                    return children[i];
                } else {
                    var focused = WebForm_FindFirstFocusableChild(children[i]);
                    if (WebForm_CanFocus(focused)) {
                        return focused;
                    }
                }
            } catch (e) {
                // Handle exceptions if needed
            }
        }
    }
    return null;
}

function WebForm_AutoFocus(focusId) {
    var targetControl;
    if (!window.__smartNav) {
        targetControl = document.getElementById(focusId);
    } else {
        targetControl = document.all[focusId];
    }

    var focused = targetControl;
    if (targetControl && !WebForm_CanFocus(targetControl)) {
        focused = WebForm_FindFirstFocusableChild(targetControl);
    }

    if (focused) {
        try {
            focused.focus();
            if (!window.__smartNav) {
                focused.scrollIntoView(false);
            }
            if (window.__smartNav) {
                window.__smartNav.ae = focused.id;
            }
        } catch (e) {
            // Handle exceptions if needed
        }
    }
}

function WebForm_CanFocus(element) {
    if (!element || !element.tagName) {
        return false;
    }

    var tagName = element.tagName.toLowerCase();
    return !element.disabled &&
        (!element.type || element.type.toLowerCase() !== "hidden") &&
        WebForm_IsFocusableTag(tagName) &&
        WebForm_IsInVisibleContainer(element);
}

function WebForm_IsFocusableTag(tagName) {
    return (
        tagName === "input" ||
        tagName === "textarea" ||
        tagName === "select" ||
        tagName === "button" ||
        tagName === "a"
    );
}

function WebForm_IsInVisibleContainer(ctrl) {
    var current = ctrl;
    while (current && current !== null) {
        if (
            current.disabled ||
            (current.style &&
                ((current.style.display && current.style.display === "none") ||
                    (current.style.visibility &&
                        current.style.visibility === "hidden")))
        ) {
            return false;
        }

        if (
            current.parentNode &&
            current.parentNode !== null &&
            current.parentNode !== current &&
            current.parentNode.tagName &&
            current.parentNode.tagName.toLowerCase() !== "body"
        ) {
            current = current.parentNode;
        } else {
            return true;
        }
    }
    return true;
}
