({
    invoke : function(component, event, helper) {
        //get the child component reference
        var child=component.find("child_one");
        //call the aura:method with one boolean argument
        child.btn2Action(true);
    }
})
