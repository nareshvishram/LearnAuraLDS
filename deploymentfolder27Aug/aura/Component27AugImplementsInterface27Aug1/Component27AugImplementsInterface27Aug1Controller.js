({
    showDetails : function(component, event, helper) {
        component.inputs("Julius Caesar","js@roma.com","+91 9001411745","Ancient Rome");
        console.log("Show Details Invoked!!");
    },
    getInputs:function(component,event,helper){
        var params=event.getParam("arguments");
        console.log("arguments: "+JSON.stringify(params));
        component.set("v.myName",params.name);
        component.set("v.myEmail",params.email);
        component.set("v.myPhone",params.phone);
        component.set("v.myState",params.state);
        component.set("v.flag",true);
        console.log("overrided action got executed");
    }

})
