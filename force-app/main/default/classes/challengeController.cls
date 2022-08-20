public with sharing class challengeController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String industry) {
        return [
            SELECT Id, Name, Owner.Name, Phone, Website, AnnualRevenue
            FROM Account
            WHERE Industry =: industry
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }
}