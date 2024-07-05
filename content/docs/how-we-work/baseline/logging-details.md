---
title: Logging
weight: 13
description: We can't fix what we can't see. Logging is the most fundamental aspect of observability in how our applications run so that we fix a problem, even proactively. For this, we rely on something more sophisticated than simply logging into the database or syslog. Our tool of choice for this purpose is Sentry.
---

# Logging

We can't fix what we can't see. Logging is the most fundamental aspect of observability in how our applications run so that we fix a problem, even proactively. For this, we rely on something more sophisticated than simply logging into the database or syslog. Our tool of choice for this purpose is [Sentry](https://axelerant.sentry.io/).

Any application that you build must be configured to write logs to Sentry. This is fairly straightforward as Sentry has SDKs in a number of languages and frameworks. For Drupal, use the [Raven](https://www.drupal.org/project/raven) module to pull in the integration and also configure what should be logged.

## Sentry Setup

We need to create a project on Sentry and then use the details to set up the integration.

{{< tabs "sentry" >}}
{{< tab "Sentry Project" >}}

### Creating a project on Sentry

Follow these steps only if the project doesn't already exist.

1. Log in using Google to [Sentry's Axelerant portal](https://axelerant.sentry.io/).
2. Go to Projects -> [Create Project](https://axelerant.sentry.io/projects/new/).
3. Select the appropriate framework. Use "PHP" for Drupal.
4. Set your preferred alert frequency. We configure alerts on Slack.
5. Name the project on Sentry with the same name as the project. "Team" can remain `#axelerant` unless there is a specific need for a separate team.
6. Click the "Create project" button. Use the DSN in configuring the integration for your respective framework.
{{< /tab >}}
{{< tab "Drupal" >}}

### Drupal integration through Raven

1. Install the Raven module. `ddev composer require drupal/raven`.
2. Enable the Raven module. `ddev drush en -y raven`.
3. Go to Raven configuration settings at `/admin/config/development/logging`. You should see a new section called "Sentry". DO NOT set the DSN here. Configure the options you need as you wish. You may enable JavaScript error handler as well.
4. In the PHP section, set the warning levels to at least "Warning" and above. Drupal generates a lot of `INFO` logs which would exhaust our quota.
5. In "Ignored channels", at least have these two channels: `access denied` and `page not found`. This removes a lot of typical URL scanning attempts from the logs. Actual 404s can be checked in other places such as Analytics.
6. Here is an [example Raven configuration file](https://github.com/contrib-tracker/backend/blob/main/config/sync/raven.settings.yml) from contrib-tracker.
7. Set the DSN through `settings.php`. For platform.sh, you can also create a variable named `drupalsettings:raven.settings:client_key` and set it to the DSN. The default platform.sh integration (`settings.platformsh.php`) loads this correctly.
{{< /tab >}}
{{< /tabs >}}

## Routine Monitoring

### Monitoring Alerts in Sentry

1. **Access the Issues Dashboard:**
   - Use the Issues tab in Sentry to view all logged errors and alerts. This dashboard provides a comprehensive overview of all logged events, grouped by the type and frequency of occurrence.

2. **Set Up Alert Rules:**
   - Navigate to **Project Settings** > **Alerts** to configure alert rules and receive notifications for specific issues. Define conditions such as event frequency, error severity, and affected users.
   - Set up alerts to notify you when an issue is seen more than 30 times per hour. They can create more alerts as needed.

For more details, refer to the [Sentry Alert Rules Documentation](https://docs.sentry.io/product/alerts/create-alerts/).

### Configure Slack Notifications

**Follow the [Sentry Slack Integration Documentation](https://docs.sentry.io/product/integrations/notification-incidents/slack/)** to set up a Slack notification. Use your project's `#eng-` channel or `#feed-` channel to send notifications. In case you're not sure which channel to use, check with the team.

### Creating Tickets from Alerts

1. **Review the Alert Details:**
   - Access the alert details page to view detailed information, including stack traces, affected users, and the frequency of occurrences. This detailed context helps in understanding the issue better and aids in faster resolution.
   - **Error Context:** Review the contextual data provided by Sentry, such as the environment (production, staging), user actions leading to the error, and system state. This information is critical for diagnosing and resolving issues efficiently. For more details, refer to the [Sentry Issue Details Documentation](https://docs.sentry.io/product/issues/issue-details/).

2. **Integrate Sentry with Your Ticketing System** (e.g., Jira, GitHub Issues):
   - Select the ticketing system (in our case commonly - Jira) in the **Project Settings** > **Integrations** to integrate Sentry with your ticketing system. Follow the prompts to authenticate and authorize Sentry to access your Jira instance. It is vital to Configure the integration settings, such as default project and issue type, to streamline ticket creation. For more details, refer to the [Sentry Jira Integration Documentation](https://docs.sentry.io/product/integrations/issue-tracking/jira/).

3. **Create a Ticket:**
   - **Manually Creating a Ticket:**
     - **Create an Issue** in the alert details view to manually create a ticket by writing all relevant information provided by Sentry to ensure the issue is well-documented.

   - **Automatically Creating Tickets:**
     - Configure automatic ticket creation in **Project Settings** > **Alerts** by setting up alert rules to trigger ticket creation by specifying the conditions (e.g., error type, frequency) and actions (create a Jira ticket) for automatic ticket creation.

4. **Managing Tickets in Jira:**
   - Ensure tickets are assigned to the appropriate team or individual in Jira. Use Jira’s workflow management tools to track the progress of the ticket from creation to resolution.
   - **Tracking and Reporting:** Use Jira’s reporting features to track the status of logged issues. Generate reports to identify trends, recurring issues, and areas for improvement.
   - **Comments and Updates:** Utilize Jira’s commenting system to add updates, discuss potential solutions, and collaborate with team members directly within the ticket.

## Things to Remember

We apply these practices to ensure effective logging, monitoring, and incident management in our Drupal applications:

- Log significant user actions and interactions using Drupal's built-in functions and custom modules.
- Enable and review database query logging using `settings.php` and the Database Logging module (`dblog`).
- Log all API requests, responses, and third-party service interactions using `Guzzle` middleware and capturing successful and failed requests.
- For Sentry, set the logging threshold to Error or Critical to filter and prioritize issues effectively and avoid sending debug and info messages.
- Schedule regular log review sessions with the team to identify and address recurring issues.
- Implement log retention policies and configure log rotation for efficient log storage and performance.
- Fine-tune alert rules to minimize noise and focus on critical issues.
- Continuously monitor and adjust alert rules based on feedback and changing application behavior.
- Use Sentry’s integration capabilities to automatically create tickets for high-priority issues.
- Explore automation tools to manage alerts and tickets, including auto-assigning and status updates.
- Foster collaboration between development, operations, and support teams using Sentry’s collaboration features.
- Develop and maintain incident response plans, conducting regular drills and reviews.
