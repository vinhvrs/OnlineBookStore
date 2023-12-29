// CdnPath=http://ajax.aspnetcdn.com/ajax/4.5.1/1/GridView.js

function GridView() {
    this.pageIndex = null;
    this.sortExpression = null;
    this.sortDirection = null;
    this.dataKeys = null;
    this.stateField = null;
    this.panelElement = null;
    this.callback = null;

    this.createPropertyString = function () {
        return createPropertyStringFromValues_GridView(this.pageIndex, this.sortDirection, this.sortExpression, this.dataKeys);
    };

    this.setStateValue = function () {
        if (this.stateField) {
            this.stateField.value = this.createPropertyString();
        }
    };

    this.onCallback = function (result) {
        var valsArray = String(result).split("|");
        var innerHtml = valsArray.slice(4).join("|");
        
        if (this.panelElement) {
            this.panelElement.innerHTML = innerHtml;
        }

        if (this.stateField) {
            this.stateField.value = createPropertyStringFromValues_GridView(
                valsArray[0],
                valsArray[1],
                valsArray[2],
                valsArray[3]
            );
        }
    };

    this.getHiddenFieldContents = function (arg) {
        if (this.stateField) {
            return arg + "|" + this.stateField.value;
        }
        return "";
    };
}

function createPropertyStringFromValues_GridView(pageIndex, sortDirection, sortExpression, dataKeys) {
    var value = [pageIndex, sortDirection, sortExpression, dataKeys];
    return value.join("|");
}
