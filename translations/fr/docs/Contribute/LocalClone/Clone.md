# Clone

## Summary

This page shows you how to clone your forked repository to your local computer.

## Prerequisites

You should have [Forked the CrT-wiki repository](/Contribute/SetupGithub/) and you need to have [Git installed](/Contribute/LocalClone/InstallingGit/).

## First steps

First you need to create a folder on your local computer where you want the wiki to be cloned to.  
Then you need to open either your command prompt or git bash in that folder.  
I'm going to use git Bash but the same procedure should work for the CMD as well.

To open git bash just navigate to the folder and click with the right mouse key:  
![Explorer context menu with gitBash option selected](/Contribute/LocalClone/assets/ExplorerContextMenu_GitBash.png)

## Cloning your fork

After you have opened git Bash in the folder, you need to get the repo url.  
You can find this url when checking your fork on GitHub:

![Locating the repo url](/Contribute/LocalClone/assets/GitHub_CloneLink.png)

You need to use that URL. We will be using HTTPS for the cloning, if you know how to set up SSH you probably don't need this guide.  
You can also click on the button to copy the string to your clipboard.

Now you need to run the command `git clone <repo-Url>`:

![Clone command](/Contribute/LocalClone/assets/GitBash_CloneCommand.png) ![Clone command success](/Contribute/LocalClone/assets/GitBash_CloneCommandSuccess.png)

Now you should have a new folder named `Crafttweaker-Documentation` in your directory.  
Let's navigate to it and issue a `git status`:

![Change directory and issue git status](/Contribute/LocalClone/assets/GitBash_Clone_GitStatus.png)

## How to continue

Now that you have a local clone of the wiki you can start creating and editing files and eventually [create a commit](/Contribute/LocalClone/CreateCommit/).