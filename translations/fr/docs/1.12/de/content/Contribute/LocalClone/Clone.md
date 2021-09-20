# Clonage

## Récapitulatif

Cette page vous montre comment cloner votre "forked repository" sur votre ordinateur local.

## Prerequisites

Vous devriez avoir [forked le repository CrT-wiki](/Contribute/SetupGithub/) et vous devez avoir [Git installé](/Contribute/LocalClone/InstallingGit/).

## Premiers pas

First you need to create a folder on your local computer where you want the wiki to be cloned to.  
Then you need to open either your command prompt or git bash in that folder.  
I'm going to use git Bash but the same procedure should work for the CMD as well.

Pour ouvrir git bash il suffit de naviguer dans le dossier et de cliquer avec la touche droite de la souris:  
![Menu contextuel de l'explorateur avec l'option gitBash sélectionné](/Contribute/LocalClone/assets/ExplorerContextMenu_GitBash.png)

## Clonez votre fork.

After you have opened git Bash in the folder, you need to get the repo url.  
You can find this url when checking your fork on GitHub:

![Localisation de l'url du repository](/Contribute/LocalClone/assets/GitHub_CloneLink.png)

Vous devez utiliser cette URL. We will be using HTTPS for the cloning, if you know how to set up SSH you probably don't need this guide.  
You can also click on the button to copy the string to your clipboard.

Maintenant vous devez exécuter la commande `git clone <repo-Url>`:

![la commande Clone](/Contribute/LocalClone/assets/GitBash_CloneCommand.png) ![Commande de clonage réussie](/Contribute/LocalClone/assets/GitBash_CloneCommandSuccess.png)

Now you should have a new folder named `CraftTweaker-Documentation` in your directory.  
Let's navigate to it and issue a `git status`:

![Change le dossier et fait un status git.](/Contribute/LocalClone/assets/GitBash_Clone_GitStatus.png)

## How to continue

Maintenant que vous avez un clone local du wiki, vous pouvez commencer à créer et éditer des fichiers et éventuellement [créer un commit](/Contribute/LocalClone/CreateCommit/).