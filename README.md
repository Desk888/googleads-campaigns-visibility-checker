Google Ads Script: Daily Campaign Visibility Checks
This Google Ads script monitors campaigns for low impressions and sends an email alert if any campaign falls below a specified impression threshold for the current day.

Overview
This script is designed to automate the monitoring of Google Ads campaigns based on their daily impression metrics. It checks each campaign's impression count for the current day and sends an email notification to specified recipients if any campaign's impressions fall below the configured threshold.

Configuration
Before using the script, ensure you configure the following parameters in the config object:

let config = {
  impressionThreshold: 10, // Change Impr. Threshold as per your requirement
  emailAddresses: "your-email@example.com", // Separate multiple email addresses with a comma
  emailSubject: "Daily Campaign Visibility Checks",
  emailMessage: "The following campaigns have received low impressions below the Impression Threshold of " + 
                impressionThreshold + " impressions:\n\n"
};
impressionThreshold: Specifies the minimum number of impressions below which a campaign is considered to have low visibility.
emailAddresses: Email addresses where the alert notifications will be sent. Separate multiple addresses with commas.
emailSubject: Subject line for the email alert.
emailMessage: Initial content of the email alert message. The script appends campaign details dynamically based on the actual impressions.
Usage
Accessing Google Ads Scripts:

Go to your Google Ads account.
Navigate to "Tools & Settings" -> "Scripts".
Creating a New Script:

Click on the "+" button to create a new script.
Copy and paste the provided script into the editor.
Authorizing the Script:

If prompted, authorize the script to run with your Google Ads account.
Setting up Triggers:

Set up a trigger to schedule the script to run daily at a specific time (e.g., every day at midnight).
Monitoring Script Execution:

View execution logs in the Google Ads Scripts console to monitor script activity and email alerts.
Example Output
If any campaigns have impressions below the specified threshold, the script will send an email similar to the following:


Subject: Daily Campaign Visibility Checks

The following campaigns have received low impressions below the Impression Threshold of 10 impressions:

Campaign: Campaign A - Impressions: 5
Campaign: Campaign B - Impressions: 8
Notes
Ensure that your Google Ads account has the necessary permissions to run scripts and send emails.
Adjust the impressionThreshold value according to your campaign performance goals.
Review and customize the email message content (emailMessage variable) to suit your specific requirements.
