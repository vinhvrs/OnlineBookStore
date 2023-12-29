// CdnPath=http://ajax.aspnetcdn.com/ajax/4.5.1/1/TreeView.js

function TreeView_HoverNode(data, node) {
    if (!data) {
        return;
    }

    node.hoverClass = data.hoverClass;
    WebForm_AppendToClassName(node, data.hoverClass);

    var lastChild = __nonMSDOMBrowser ? node.childNodes[node.childNodes.length - 1] : node.children[node.children.length - 1];
    lastChild.hoverHyperLinkClass = data.hoverHyperLinkClass;
    WebForm_AppendToClassName(lastChild, data.hoverHyperLinkClass);
}

function TreeView_GetNodeText(node) {
    var trNode = WebForm_GetParentByTagName(node, "TR");
    var outerNodes = trNode.childNodes[trNode.childNodes.length - 1].getElementsByTagName("A");

    if (!outerNodes || outerNodes.length === 0) {
        outerNodes = trNode.childNodes[trNode.childNodes.length - 1].getElementsByTagName("SPAN");
    }

    var textNode = (outerNodes && outerNodes.length > 0) ? outerNodes[0].childNodes[0] : trNode.childNodes[trNode.childNodes.length - 1].childNodes[0];
    return (textNode && textNode.nodeValue) ? textNode.nodeValue : "";
}

function TreeView_PopulateNode(data, index, node, selectNode, selectImageNode, lineType, text, path, databound, datapath, parentIsLast) {
    if (!data) {
        return;
    }

    var context = {
        data: data,
        node: node,
        selectNode: selectNode,
        selectImageNode: selectImageNode,
        lineType: lineType,
        index: index,
        isChecked: "f"
    };

    var tr = WebForm_GetParentByTagName(node, "TR");
    if (tr) {
        var checkbox = tr.getElementsByTagName("INPUT");
        if (checkbox && checkbox.length > 0) {
            for (var i = 0; i < checkbox.length; i++) {
                if (checkbox[i].type.toLowerCase() === "checkbox") {
                    context.isChecked = checkbox[i].checked ? "t" : "f";
                    break;
                }
            }
        }
    }

    var param = `${index}|${data.lastIndex}|${databound}${context.isChecked}${parentIsLast}|${text.length}|${text}${datapath.length}|${datapath}${path}`;
    TreeView_PopulateNodeDoCallBack(context, param);
}

function TreeView_ProcessNodeData(result, context) {
    var treeNode = context.node;
    if (result.length > 0) {
        var ci = result.indexOf("|", 0);
        context.data.lastIndex = result.substring(0, ci);
        ci = result.indexOf("|", ci + 1);
        var newExpandState = result.substring(context.data.lastIndex.length + 1, ci);
        context.data.expandState.value += newExpandState;
        var chunk = result.substr(ci + 1);
        var newChildren, table;

        if (__nonMSDOMBrowser) {
            var newDiv = document.createElement("div");
            newDiv.innerHTML = chunk;
            table = WebForm_GetParentByTagName(treeNode, "TABLE");
            newChildren = document.getElementById(treeNode.id + "Nodes");

            if (typeof table.nextSibling === "undefined" || table.nextSibling === null) {
                table.parentNode.insertBefore(newDiv.firstChild, table.nextSibling);
            } else {
                table = table.nextSibling;
                table.parentNode.insertBefore(newDiv.firstChild, table);
            }
        } else {
            table = WebForm_GetParentByTagName(treeNode, "TABLE");
            table.insertAdjacentHTML("afterEnd", chunk);
            newChildren = document.all[treeNode.id + "Nodes"];
        }

        if (newChildren) {
            TreeView_ToggleNode(context.data, context.index, treeNode, context.lineType, newChildren);
            treeNode.href = document.getElementById
                ? `javascript:TreeView_ToggleNode(${context.data.name},${context.index},document.getElementById('${treeNode.id}'),'${context.lineType}',document.getElementById('${newChildren.id}'))`
                : `javascript:TreeView_ToggleNode(${context.data.name},${context.index},${treeNode.id},'${context.lineType}',${newChildren.id})`;

            if (context.selectNode && context.selectNode.href && context.selectNode.href.indexOf("javascript:TreeView_PopulateNode") === 0) {
                context.selectNode.href = treeNode.href;
            }

            if (context.selectImageNode && context.selectImageNode.href && context.selectImageNode.href.indexOf("javascript:TreeView_PopulateNode") === 0) {
                context.selectImageNode.href = treeNode.href;
            }
        }

        context.data.populateLog.value += `${context.index},`;
    } else {
        var img = treeNode.childNodes ? treeNode.childNodes[0] : treeNode.children[0];

        if (img) {
            var lineType = context.lineType;
            var imgSrc;

            switch (lineType) {
                case "l":
                    imgSrc = context.data.images[13];
                    break;
                case "t":
                    imgSrc = context.data.images[10];
                    break;
                case "-":
                    imgSrc = context.data.images[16];
                    break;
                default:
                    imgSrc = context.data.images[3];
            }

            img.src = imgSrc;

            var pe;

            if (__nonMSDOMBrowser) {
                pe = treeNode.parentNode;
                pe.insertBefore(img, treeNode);
                pe.removeChild(treeNode);
            } else {
                pe = treeNode.parentElement;
                treeNode.style.visibility = "hidden";
                treeNode.style.display = "none";
                pe.insertAdjacentElement("afterBegin", img);
            }
        }
    }
}

function TreeView_SelectNode(data, node, nodeId) {
    if (!data) {
        return;
    }

    if (data.selectedClass !== undefined && data.selectedClass !== null) {
        var id = data.selectedNodeID.value;

        if (id.length > 0) {
            var selectedNode = document.getElementById(id);

            if (selectedNode) {
                WebForm_RemoveClassName(selectedNode, data.selectedHyperLinkClass);
                selectedNode = WebForm_GetParentByTagName(selectedNode, "TD");
                WebForm_RemoveClassName(selectedNode, data.selectedClass);
            }
        }

        WebForm_AppendToClassName(node, data.selectedHyperLinkClass);
        node = WebForm_GetParentByTagName(node, "TD");
        WebForm_AppendToClassName(node, data.selectedClass);
    }

    data.selectedNodeID.value = nodeId;
}

function TreeView_ToggleNode(data, index, node, lineType, children) {
    if (!data) {
        return;
    }

    var img = node.childNodes[0];
    var newExpandState;

    try {
        if (children.style.display === "none") {
            children.style.display = "block";
            newExpandState = "e";

            if (img) {
                switch (lineType) {
                    case "l":
                        img.src = data.images[15];
                        break;
                    case "
