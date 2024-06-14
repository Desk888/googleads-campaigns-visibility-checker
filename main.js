// Configurations
let config = {
    impressionThreshold: 10, // Change Impr. Threshold
    emailAddresses: "Enter email address here", // Separate email addresses with a comma
    emailSubject: "Daily Campaign Visibility Checks",
    emailMessage: "The following campaigns have received low impressions below the Impression Threshold of " + 
                  impressionThreshold + " impressions:\n\n"
  };
  
  function main() {
    // Select Campaigns
    let campaignIterator = AdsApp.campaigns().get();
  
    // Iterate over campaigns to search for impressions below set threshold
    while (campaignIterator.hasNext()) {
      let campaign = campaignIterator.next();
      let stats = campaign.getStatsFor('TODAY');
      let impressions = stats.getImpressions();
  
      if (impressions <= config.impressionThreshold) {
        config.emailMessage += 'Campaign: ' + campaign.getName() + ' - Impressions: ' + impressions + '\n';
      }
    }
  
    // Send the email
    if (config.emailMessage.length > 'The following campaigns have received low impressions below the Impression Threshold of ' + 
                                    config.impressionThreshold + ' impressions:\n\n'.length) {
      MailApp.sendEmail(config.emailAddresses.split(','), config.emailSubject, config.emailMessage);
      Logger.log('Sent email alert to ' + config.emailAddresses);
    } else {
      Logger.log('No campaigns with low impressions found.');
    }
  }
  
