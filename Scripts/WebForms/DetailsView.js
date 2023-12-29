// CdnPath=http://ajax.aspnetcdn.com/ajax/4.5.1/1/DetailsView.js

function DetailsView() {
    this.pageIndex = null;
    this.dataKeys = null;
    this.stateField = null;
    this.panelElement = null;
    this.callback = null;

    this.createPropertyString = function () {
        return createPropertyStringFromValues_DetailsView(this.pageIndex, this.dataKeys);
    };

    this.setStateField = function () {
        if (this.stateField) {
            this.stateField.value = this.createPropertyString();
        }
    };

    this.getHiddenFieldContents = function (arg) {
        if (this.stateField) {
            return arg + "|" + this.stateField.value;
        }
        return "";
    };
}

function DetailsView_OnCallback(result, context) {
    var value = String(result);
    var valsArray = value.split("|");
    var innerHtml = valsArray.slice(2).join("|");
    
    if (context.panelElement) {
        context.panelElement.innerHTML = innerHtml;
    }

    if (context.stateField) {
        context.stateField.value = createPropertyStringFromValues_DetailsView(valsArray[0], valsArray[1]);
    }
}

function createPropertyStringFromValues_DetailsView(pageIndex, dataKeys) {
    var value = [pageIndex, dataKeys];
    return value.join("|");
}
