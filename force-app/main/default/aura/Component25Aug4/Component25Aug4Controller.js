({
    doInvoke : function(component, event, helper) {
       $A.createComponents([
    ["lightning:card",{
                "title" : "Dynamic Components"
            }],
            ["lightning:icon",{
                "iconName" : "utility:success",
                "alternativeText": "Icon that represents a successful step",
                "variant": "success",
                "class": "slds-var-m-around_small"
            }]
    ],
    function(components, status, errorMessage){
        if (status === "SUCCESS") {
            var card = components[0];
            var icon = components[1];
            // set lightning:icon as the body of lightning:card
            card.set("v.body", icon);
            component.set("v.body", card);
        }
        else if (status === "INCOMPLETE") {
            console.log("No response from server or client is offline.")
            // Show offline error
        }
        else if (status === "ERROR") {
            console.log("Error: " + errorMessage);
            // Show error message
        }
    }
);
    }
})
