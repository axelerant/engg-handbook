# Axelerant Engineering Handbook

![Build status](https://github.com/axelerant/engg-handbook/actions/workflows/pages.yml/badge.svg)

This handbook for Axelerant Engineering is written using [Hugo](https://gohugo.io/getting-started/quick-start/). If you want to just get to the content, go straight to the [hosted site](https://axelerant.github.io/engg-handbook). If you want to edit the content, go to the [content](content/) directory and edit the post you want. You can also [open this repository in Gitpod](https://gitpod.io/#https://github.com/axelerant/engg-handbook).

## Contributing

The easiest way to edit content is from within GitHub itself. Find the Markdown file you want to edit in Github and click on the Edit button (it's an icon shaped like a pencil). While this is very quick, you can only edit one file at a time.

If you want to edit multiple files or have a preview before you commit, then click the button below to start a new development environment on Gitpod. You need a Gitpod account and you will be able to edit all the files in an IDE similar to VS Code running in your browser. Click on the button below to get started.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/axelerant/engg-handbook)

### Local development

If the above doesn't work for you or you'd rather you do this locally, you need Hugo. Follow the [instructions in the documentation](https://gohugo.io/getting-started/installing/) to install Hugo.

Clone this repository and run [Hugo as a server](https://gohugo.io/getting-started/quick-start/#step-5-start-the-hugo-server) inside the repository directory.

```bash
git clone --recursive git@github.com:axelerant/engg-handbook.git
hugo server -D
```

The above command, if it works correctly, will give you a link to view the generated site (typically [http://localhost:1313/](http://localhost:1313/)). You can now edit your files and see the changes immediately reflected in the browser. Once you're done, commit and push. Once it is merged into the main branch, your changes will be live.
