---
title: Incident Management
weight: 15
description: Managing incidents in production systems is a critical aspect of maintaining system reliability and ensuring continuous service availability. Effective incident management not only focuses on resolving issues as they arise but also on taking steps to prevent future occurrences.
---

# Incident Management

Managing incidents in production systems is a critical aspect of maintaining system reliability and ensuring continuous service availability. Effective incident management not only focuses on resolving issues as they arise but also on taking steps to prevent future occurrences.

Below, we explore the key areas of incident management: Proactive Actions, Corrective Actions, and Preventive Actions.

## Proactive Actions

Proactive actions involve steps taken before incidents occur to minimize the likelihood of issues and to mitigate their impact if they do arise. These actions are about anticipating problems and preparing systems and teams to handle potential incidents efficiently.

1. **Monitoring and Alerts**: Implement continuous monitoring of production systems to detect anomalies early. Set up automated alerts for any deviations from normal performance parameters.

2. **Training and Preparedness**: Regularly train the team on incident response procedures, including simulations and mock drills to ensure readiness for actual incidents. This can include reviewing Runbooks regularly, performing actions as per the Runbook and also identifying any gaps.

3. **Keeping the hosting provider informed**: In case of any major events where we expect more traffic we must keep the hosting provider informed so that they can provide necessary support in case of any failures. It is also important to document the various ways by which we get support from managed hosting providers.

4. **Fixing Errors in logs**: Review the error logs and fix them before they cause any issues in Production. This is where [Logging]({{< relref "baseline/logging-details" >}}) plays a crucial role in collating and pointing out errors that are important from a large set of errors in log files.

## Corrective Actions

Corrective actions are the immediate steps taken to resolve an incident once it has occurred. The goal is to restore normal service as quickly as possible while minimizing the impact on the business and users.

1. **Incident Containment**: Once an incident is identified, take steps to contain the impact, such as isolating affected components or redirecting traffic to healthy parts of the system.

2. **Immediate Fixes**: Apply immediate fixes or workarounds to restore service. This may involve rolling back recent changes, restarting services, or applying patches.

3. **Communication**: Keep stakeholders informed throughout the incident management process, including users, business leaders, and other relevant teams. Transparency is key to maintaining trust during a crisis.

4. **Asking for help**: It is important to take a call and ask for more help from the next level/escalation team member available on-call or the project team themselves. Delaying asking for help in this situation would lead to a violation of any available Service Level Agreement(SLA) with the client. That said, it is important to retrospect on what were the reasons we could not handle it and work on the same so that we do not end up having more than one person working on incidents each time.

## Preventive Actions

Preventive actions focus on learning from past incidents to prevent their recurrence and to continuously improve the resilience of production systems. These actions are about building a culture of continuous improvement.

1. **Post-Incident Reviews**: Conduct post-incident reviews to evaluate the effectiveness of the incident response and to identify opportunities for improvement. Document lessons learned and share them with the team. This includes performing a detailed Root Cause Analysis (RCA) on the incident to identify the root cause of the incident by gathering logs, system data, and other evidence to understand what went wrong.

2. **Implementation of Long-Term Fixes**: Based on the findings from the Root Cause Analysis (RCA), implement long-term fixes to address the underlying issues that caused the incident.

3. **Automation of Routine Tasks**: Automate repetitive tasks, such as system checks, backups, and updates, to reduce the chances of human error leading to incidents.

4. **Regular Updates and Patching**: Keep systems up-to-date with the latest patches, updates, and security fixes. This helps in preventing incidents caused by known vulnerabilities.

5. **Continuous Improvement**: Foster a culture of continuous improvement by encouraging the team to regularly review processes, tools, and technologies to identify areas for optimization.

By focusing on these three areas, we ensure that production environments are resilient, reliable, and capable of quickly recovering from incidents with minimal disruption.

## Frequently Asked Questions (FAQ)

{{< details "Can we submit RCA even when the problem is solved?" >}}
Yes, since it is important to review the root cause of the problem and also validate if the solution provided is a short-term fix or long-term solution.
{{< /details >}}

{{< details "What are the items we need to do as part of RCA?" >}}
We have an [RCA template](https://axelerant.atlassian.net/wiki/templates?space=AH&template=4043309277) available which can be used here.
{{< /details >}}

{{< details "Who should prepare RCA reports?" >}}
Anyone from the team who has information about the incident and is closest to context needs to prepare the RCA and review it with the TL and PM.
{{< /details >}}

{{< details "Which RCA technique should we use?" >}}
5 WHY, however, you can use any other technique as well as per the need.
{{< /details >}}

{{< details "How much time can I spend on corrective actions?" >}}
As per the SOW, we get pre-approved hours (PM can provide the specifics for each project) for the corrective actions. However, if it takes more than that, then the reasons could be:

- We worked on preventive measures along with corrective ones.
- There was not enough proactive work/tools in place like Newrelic, etc., and it took more time in the investigation.
- Corrective actions themselves take more than 8 hours.

In all of the cases above, regular time logging, tracking and timely communication (as highlighted above) play a crucial role in making sure we solve the issue within the optimal time frame.
{{< /details >}}
