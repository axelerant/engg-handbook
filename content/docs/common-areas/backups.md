---
title: Backups
weight: 4
description: Taking regular backups of your website can help you in effectively managing the downtime situation.
---

# Backups

The saying - "Always have a backup plan" stands true and is an integral part of web application management too. Although a lot of measures can be taken to avoid the downtime of a website but it is hard to predict whether we will ever come across this situation or not. We should be well prepared for anything. Hence, having a back up plan or in other words, taking regular backups of your website can help you in effectively managing the downtime situation. The website backups allows you to back up your site and related database via FTP, SFTP, FTPS, or SSH key to a secure cloud location.

## Importance of taking the backup of your site

These are some of the alarming cases that can be mitigated if the site resources are regularly backed up:

- Incorrect database updates after a release.
- Accidental content deletion.
- Virus attacks.

## Types of website backups -

### Full backup

In this type of backup all the information and resources of a website are copied over to the secondary target storage. The full backup ensures that files, databases, and scripts are backed up all the once. Generally, it is recommended to take the backup of the site at regular intervals. For example, some servers use automated scripts to perform the backup on a set day and time. Based on the website's scale, you can decide whether to perform a full, differential, or incremental backup.

### Differential backup

Full backups can take long time to complete the backup as it ensures that everything is copied to the secondary target storage. The differential backup reduces the time & resources used to take the backup by backing up only the changes made since the last FULL backup.

### Incremental backup

In some cases the differential backup has the potential of getting bigger and can take longer time to restore as well. To overcome this, incremental backup was introduced. In this case, the backup is performed only for the changes made since the last backup. Incremental backup only backup what was changed since the last backup.

The selection of backup strategy may depend upon following factors -

- Scale of the website & it's content.
- Frequency of the changes made.
- Resource size

## When should we perform a site backup?

It is recommended that the site backup should be performed in the following situations -

- Before production deployment.
- Before running database upgrades or performing a single database update operation.
- In case of a Drupal website, before performing the Drupal core upgrade
- Before performing content migrations.
- It should be the part of a "go-live" checklist.

This would help in reducing the risk of losing important data of the website & would also help in bringing back the previous updated version of the website in case of a downtime.

## How to take a backup of a Drupal website -

If you google about ways for backing up a Drupal website, you will find a lot of articles that would contain a step wise guide to backup a drupal website. The common solution in every article is to use the [backup & migrate drupal module](https://www.drupal.org/project/backup_migrate).

### Backup & Migrate Drupal Module -

With Backup and Migrate you can dump some or all of your database tables to a file download or save to a file on the server or offsite, and to restore from an uploaded or previously saved database dump. You can choose which tables and what data to backup and cache data is excluded by default. For setup follow the Drupal provided setup guide [here](https://www.drupal.org/docs/contributed-modules/backup-and-migrate/setup-guide-for-backup-and-migrate#:~:text=The%20Backup%20and%20Migrate%20module,well%20as%20automatic%20scheduled%20backups.)
