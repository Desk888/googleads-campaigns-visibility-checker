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
