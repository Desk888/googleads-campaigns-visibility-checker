# Daily Campaign Visibility Checks

This script performs daily visibility checks on Google Ads campaigns and sends an email alert if any campaigns have received low impressions below a specified threshold.

## Getting Started

These instructions will help you set up and run the script to perform daily campaign visibility checks.

### Prerequisites

- Google Ads account
- Google Apps Script project
- Access to the MailApp service for sending email alerts

### Configuration

1. Open the script in your Google Apps Script project.
2. In the `config` object, set the following variables:
   - `impressionThreshold`: The minimum number of impressions a campaign should have. If a campaign's impressions fall below this threshold, it will be included in the email alert. Default value is '5'.
   - `emailAddresses`: The email addresses to which the alert should be sent. Multiple email addresses can be specified by separating them with commas.

### Usage

1. Run the `main` function to start the script.
2. The script will retrieve the campaigns from the connected Google Ads account and check their visibility.
3. If any campaigns have received impressions below the specified threshold, an email alert will be sent to the configured email addresses.
4. The script will log the progress and completion status in the Google Apps Script logger.

## Functionality

The script performs the following steps:

1. Selects the current Google Ads account and retrieves the account name.
2. Sets the email subject dynamically based on the account name.
3. Initializes the email message with an HTML table structure.
4. Iterates over all the campaigns in the account.
5. For each enabled campaign, retrieves the impression statistics for the current day.
6. If the number of impressions is less than or equal to the specified `impressionThreshold`, the campaign is considered to have low visibility and is added to the email message.
7. After iterating through all campaigns, the script closes the HTML table and body tags.
8. If any campaigns with low visibility are found, the script sends an email alert to the specified email addresses.
9. If no campaigns with low visibility are found, the script logs a message indicating that no low impression campaigns were found.

## Email Alert Format

The email alert includes the following information:

- Subject: "Daily Campaign Visibility Checks for: [Account Name]"
- Body:
  - Heading: "Daily Campaign Visibility Checks"
  - Paragraph: "The following campaigns have received low impressions below the Impression Threshold of [Impression Threshold] impressions:"
  - Table:
    - Header:
      - Engine
      - Account Name
      - Campaign Name
      - Impressions
    - Rows (for each low visibility campaign):
      - Engine: "Google Ads"
      - Account Name: The name of the Google Ads account
      - Campaign Name: The name of the campaign
      - Impressions: The number of impressions received by the campaign

## Built With

- Google Apps Script
- Google Ads API
- MailApp service

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc.

Feel free to customize the README file further based on your specific project requirements and add any additional sections or information as needed.
