# Google Ads Script: Daily Campaign Visibility Checks

## Overview

This Google Ads script monitors campaigns for low impressions and sends an email alert if any campaign falls below a specified impression threshold for the current day.

## Configuration

Before using the script, ensure you configure the following parameters in the `config` object:

```javascript
let config = {
  impressionThreshold: 10, // Change Impr. Threshold as per your requirement
  emailAddresses: "your-email@example.com", // Separate multiple email addresses with a comma
  emailSubject: "Daily Campaign Visibility Checks",
  emailMessage: "The following campaigns have received low impressions below the Impression Threshold of " + 
                config.impressionThreshold + " impressions:\n\n"
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
