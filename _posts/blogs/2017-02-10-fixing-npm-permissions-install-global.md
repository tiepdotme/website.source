---
layout: blog
title: "Fixing npm permissions"
date: 2017-02-10 05:10:00 +0530
tag: ["NodeJS", "npmjs", "Development Tools", "Tools", "Open Source"]
permalink: /blogs/fixing-npm-permissions-install-global
meta: npm-permissions-install-global.png
author: niksmac
subtitle: "You may receive an EACCES error when you try to install a package globally."
---

This indicates that you do not have permission to write to the directories that npm uses to store global packages and commands.

## How bad is it?

```
npm ERR! Linux 3.19.0-49-generic
npm ERR! argv "/usr/bin/nodejs" "/usr/bin/npm" "install" "-g" "hapi"
npm ERR! node v7.5.0
npm ERR! npm  v4.1.2
npm ERR! path /usr/lib/node_modules
npm ERR! code EACCES
npm ERR! errno -13
npm ERR! syscall access

npm ERR! Error: EACCES: permission denied, access '/usr/lib/node_modules'
npm ERR!  { Error: EACCES: permission denied, access '/usr/lib/node_modules'
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'access',
npm ERR!   path: '/usr/lib/node_modules' }
npm ERR!
npm ERR! Please try running this command again as root/Administrator.

npm ERR! Please include the following file with any support request:
npm ERR!     /home/light/npm-debug.log
```

Read [official documentation](https://docs.npmjs.com/getting-started/fixing-npm-permissions)

You can fix this problem using one of three options:

 - Change the permission to npm's default directory.
 - Change npm's default directory to another directory.
 - Install node with a package manager that takes care of this for you.


## How to Fix?

Please check [this gist](https://gist.github.com/niksmac/6c81a7697305c2a466215b4f2110d7bf)

- Run `cd ~`
- Run `wget http://pastebin.com/raw/1ccE6EgF`
- Run `chmod +x fix_npm.sh`
- Run `./fix_npm.sh`

## Official npm Video

<div class="ui embed" data-source="youtube" data-id="bxvybxYFq2o"></div>
