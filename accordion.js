$("document").ready(function() {
    $("#div").accordion({
        collapsible: true,
        icons:{ header:'ui-icon-caret-1-s',activeHeader:'ui-caret-1-s'},animate:2000,
        event:'mouseover'
    });

});