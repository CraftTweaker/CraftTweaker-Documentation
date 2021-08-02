# Clonage

## Récapitulatif

Cette page vous montre comment cloner votre "forked repository" sur votre ordinateur local.

## Prerequisites

Vous devriez avoir [forked le repository CrT-wiki](/Contribute/SetupGithub/) et vous devez avoir [Git installé](/Contribute/LocalClone/InstallingGit/).

## Premiers pas

Tout d'abord, vous devez créer un dossier sur votre ordinateur local où vous voulez cloner le wiki.  
Ensuite, vous devez ouvrir votre invite de commande ou git bash dans ce dossier.  
Je vais utiliser git Bash mais la même procédure devrait également fonctionner pour le CMD.

Pour ouvrir git bash il suffit de naviguer dans le dossier et de cliquer avec la touche droite de la souris:  
![Menu contextuel de l'explorateur avec l'option gitBash sélectionné](/Contribute/LocalClone/assets/ExplorerContextMenu_GitBash.png)

## Clonez votre fork.

Une fois que vous avez ouvert git Bash dans le dossier, vous devez récupérer l'url du repository.  
Vous pouvez trouver cette url en vérifiant votre fork sur GitHub :

![Localisation de l'url du repository](/Contribute/LocalClone/assets/GitHub_CloneLink.png)

Vous devez utiliser cette URL. Nous utiliserons HTTPS pour le clonage, si vous savez comment configurer SSH, vous n'avez probablement pas besoin de ce guide.  
Vous pouvez également cliquer sur le bouton pour copier la chaîne dans votre presse-papiers.

Maintenant vous devez exécuter la commande `git clone <repo-Url>`:

![la commande Clone](/Contribute/LocalClone/assets/GitBash_CloneCommand.png) ![Commande de clonage réussie](/Contribute/LocalClone/assets/GitBash_CloneCommandSuccess.png)

Vous devriez maintenant avoir un nouveau dossier nommé `CraftTweaker-Documentation` dans votre répertoire.  
Nous allons y naviguer et émettre un statut `git`:

![Change le dossier et fait un status git.](/Contribute/LocalClone/assets/GitBash_Clone_GitStatus.png)

## How to continue

Maintenant que vous avez un clone local du wiki, vous pouvez commencer à créer et éditer des fichiers et éventuellement [créer un commit](/Contribute/LocalClone/CreateCommit/).