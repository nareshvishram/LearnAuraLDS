public with sharing class Apex26AugQueryAll {
    public Apex26AugQueryAll() {

    }
    @AuraEnabled
    public static List<Account> allAccounts(){
        try {
            return [select id,name,type,industry,phone from account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
