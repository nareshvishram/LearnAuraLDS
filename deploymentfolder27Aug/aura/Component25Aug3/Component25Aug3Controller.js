({
    doInvoke : function(component, event, helper) {
        $A.createComponent(
            //type
            "lightning:button",
            //attributes
            {
                "label":"btn2",
                "aura:id":"btn2",
                "onclick":component.getReference("c.btn2Action")
            },
            //callback
            function(cmp,status,errorMessage){
                if(status==="SUCCESS"){
                    console.log("Success");
                    component.set("v.body",cmp);
                }else if(status==='INCOMPLETE'){
                    console.log("status is incomplete!!");
                }else if(status==="ERROR"){
                    console.log("There is error: "+errorMessage);
                }
            }
        );
    },
    btn2Action:function(component,event,helper){
        component.set("v.flag",true);
    }
})
