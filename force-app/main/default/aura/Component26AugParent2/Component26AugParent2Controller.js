({
    callQueryAllComponent : function(component, event, helper) {
        console.log("parent form inserted sucessfully!!");
        var child=component.find("child_one");
        child.queryAll(true);

    }
})
