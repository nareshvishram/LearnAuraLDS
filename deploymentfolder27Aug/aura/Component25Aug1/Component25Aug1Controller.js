({
    successAction : function(component, event, helper) {
        var flag=component.get("v.flag");
        //make false

        component.set("v.flag",false);
        //make true -> it will reload the aura:if section and again render successAction 
        component.set("v.flag",true);
        
        var param=event.getParams();
        console.log("All Params: "+JSON.stringify(param));
        var id=param.response.id;
        if(id!=''||id!=null||id!=undefined){
            component.set("v.confirmMessage",true);
        }else{
            console.log('some errors is there. can\'t be saved right now!!');
        }
        
    },
    submitAction:function(component,event,helper){
        event.preventDefault();// stops the standard submit. for a while or until this action completed.
        //get all the fields of objectApiName= Account.
        var fields=event.getParam("fields");
        console.log("--- :"+event.getParam);
        console.log("allfields :: "+ JSON.stringify(fields));
        fields["Rating"]="Hot";
        fields["BillinCity"]="Sikar";
        fields["BillingCountry"]="India";
        //now find our recordEditForm compnent and then add this fields as well before it get submitted.
        component.find("form").submit(fields);
        
    }

})
