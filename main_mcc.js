// Configurations
let config = {
    impressionThreshold: '5', // Change Impr. Threshold
    emailAddresses: "Enter email addresses here", // Separate email addresses with a comma
    emailMessage: '' // Do not add anything here
};

function main() {
    Logger.log('Starting the script...');
    
    // Select Account
    let accountName = AdsApp.currentAccount().getName();
    Logger.log('Account Name: ' + accountName);

    let accountId = AdsApp.currentAccount().getCustomerId();
    Logger.log('Account ID: ' + accountId);
  
    let childAccounts = AdsManagerApp.accounts().get();
    Logger.log('Child Account Data Collected');
  
    // Set the email subject dynamically
    config.emailSubject = "Daily Campaign Visibility Checks for: " + accountName + " - ID: " + accountId;
    
    // Initialize the email message
    config.emailMessage = `
        <html>
        <body>
        <h2>Daily Campaign Visibility Checks</h2>
        <p>The following campaigns have received low impressions below the threshold of <b>${config.impressionThreshold}</b> impressions:</p>
        <table style="border-collapse: collapse; width: 100%; font-size: 12px;">
            <tr>
                <th style="border: 1px solid #ddd; padding: 4px; text-align: center; background-color: #f2f2f2; width: 15%;">Engine</th>
                <th style="border: 1px solid #ddd; padding: 4px; text-align: center; background-color: #f2f2f2; width: 25%;">Account ID</th>
                <th style="border: 1px solid #ddd; padding: 4px; text-align: center; background-color: #f2f2f2; width: 25%;">Account Name</th>
                <th style="border: 1px solid #ddd; padding: 4px; text-align: center; background-color: #f2f2f2; width: 40%;">Campaign Name</th>
                <th style="border: 1px solid #ddd; padding: 4px; text-align: center; background-color: #f2f2f2; width: 20%;">Impressions</th>
            </tr>`;
    
    let foundLowImpressionCampaign = false;
    
    while (childAccounts.hasNext()) {
        let childAccount = childAccounts.next();
        Logger.log('Iteration through child accounts completed');
      
        let childAccountName = childAccount.getName();
        Logger.log('Child Account Name: ' + childAccountName);
      
        let childAccountId = childAccount.getCustomerId();
        Logger.log('Child Account ID: ' + childAccountId);
        
        // Select Campaigns
        AdsManagerApp.select(childAccount);
        let campaignIterator = AdsApp.campaigns().get();
        
        // Iterate over campaigns to search for impressions below set threshold
        while (campaignIterator.hasNext()) {
            let campaign = campaignIterator.next();
            // Check if the campaign is enabled
            if (!campaign.isEnabled()) {
                continue;
            }
            let stats = campaign.getStatsFor('TODAY');
            let impressions = stats.getImpressions();
            if (impressions <= config.impressionThreshold) {
                Logger.log('Campaign: ' + campaign.getName() + ' has low impressions: ' + impressions);
                config.emailMessage += `
                    <tr style="background-color: #f8d7da;">
                        <td style="border: 1px solid #ddd; padding: 4px; text-align: center;">Google Ads</td>
                        <td style="border: 1px solid #ddd; padding: 4px; text-align: center;">${childAccountId}</td>
                        <td style="border: 1px solid #ddd; padding: 4px; text-align: center;">${childAccountName}</td>
                        <td style="border: 1px solid #ddd; padding: 4px; text-align: center;">${campaign.getName()}</td>
                        <td style="border: 1px solid #ddd; padding: 4px;text-align: center;">${impressions}</td>
                    </tr>`;
                foundLowImpressionCampaign = true;
            }
        }
    }
    
    // Close the table and body tags
    config.emailMessage += `
            </table>
            </body>
            </html>`;
    
    // Send the email alert
    if (foundLowImpressionCampaign) {
        MailApp.sendEmail({
            to: config.emailAddresses,
            subject: config.emailSubject,
            htmlBody: config.emailMessage
        });
        Logger.log('Sent email alert to ' + config.emailAddresses);
    } else {
        Logger.log('No campaigns with low impressions found.');
    }
    
    Logger.log('Script completed.');
}
