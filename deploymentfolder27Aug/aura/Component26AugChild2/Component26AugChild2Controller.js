({
    queryAll : function(component, event, helper) {
        var columns=[
            {label:"Name",fielName:"Name",type:"text"},
            {label:"Type", fieldName:"Type",type:"text"},
            {label:"Industry",fieldName:"Industry",type:"text"},
            {label:"Phone",fieldName:"Phone",type:"phone"}
        ];
        component.set("v.columns",columns);
        var action=component.get("c.allAccounts");
        action.setCallback(this,response=>{
            if(response.getState()==="SUCCESS"){
                var res=response.getReturnValue();
                console.log(JSON.stringify(res));
                component.set("v.boolFlag",true);
                component.set("v.acc",res);
            }
        });
        $A.enqueueAction(action);

    }
})
