---
layout: blog
title: "Sneak Peak: Our vimrc"
date: 2016-11-29 05:10:00 +0530
tag: ["Development Tools", "Vim", "vimrc", "Sneak Peak"]
permalink: /blogs/sneak-peak-into-our-vimrc
meta: sneak-peak-into-our-vimrc.png
author: niksmac
subtitle: "A series of articles to get on with our dotfiles and the development environment at
Lightrains Tech"
---

This is series of articles explaining our development Environment. This time we will be discussing
about `vimrc` which is a configuration file that we can use to manage our Vim settings.

You can find the file
[here](https://github.com/lightrainstech/dotfiles/blob/master/vim/vimrc.symlink).

### Basic Vim Settings

 - `set number` It enables line number in vim
 - `set relativenumber` Enables relative numbers in vim. Means Vim will adjust line numbers based on
your current cursor position.
 - `set linebreak` Break lines at word if you have enabled wraplines.
 - `set showbreak=+++` Identify breaked lines with *+++*
 - `set textwidth=100` Line wrap (number of cols)
 - `set showmatch` Highlight matching brace
 - `set hlsearch`  Highlight all search results
 - `set smartcase` Enable smart-case search
 - `set ignorecase`  Always case-insensitive
 - `set incsearch` Searches for strings incrementally
 - `set autoindent`  Auto-indent new lines
 - `set smartindent` Enable smart-indent
 - `set smarttab`  Enable smart-tabs
 - `set softtabstop=4` Number of spaces per Tab
 - `autocmd BufRead,BufNewFile *.md setlocal spell` Enables spell check for markdown files, ending with extension md
 - `set complete+=kspell` Enables spelling auto complete.

### Advanced Settings
