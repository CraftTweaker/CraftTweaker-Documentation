# Remplir une PullRequest

## Pré-requis

Vous devez avoir créé des fichiers [](/Contribute/OnlineEditor_Create) et/ou [modifiés](/Contribute/OnlineEditor_Edit) dans votre fork du wiki.

## Introduction

Une fois que vous avez créé ou modifié ce que vous essayez de faire, vous devez obtenir les modifications du dépôt original.  
Ce guide vous montrera comment créer une PR pour appliquer vos modifications au wiki actuel.

Une Pull Request (ou PR for short) vous permet d'appliquer vos commits à la base de code originale.  
En d'autres termes, il vous permet de rendre vos modifications visibles pour tous ceux qui visitent le wiki.

## Ouverture de la demande d'ajout

Lorsque vous retournez sur la page GitHub de votre fork, vous remarquerez la barre d'information de la branche.  
Cette barre vous indique comment la version de votre fork diffère de la version originale.

Par exemple, la photo ci-dessous a trois commits qui n'ont pas encore été appliqués au CrT-wiki alors que trois autres commits ont été créés dans le premier qui n'ont pas été appliqués au fork.

![Bouton de demande d'ajout](/Contribute/assets/PullRequest_Compare_PullRequestButton.png)

Si vous cliquez sur le bouton "Demande de tirage", une nouvelle vue s'ouvrira, la vue Comparer s'affiche.  
Dans la plupart des cas, il est déjà correctement défini d'utiliser la branche principale CraftTweaker/CraftTweaker-Documentation comme destination et votre branche en tant que modifications à tirer.

Github vérifiera également qu'il n'y a pas de conflit entre vos modifications et l'état actuel du wiki.  
Dans le cas où il trouverait des inconvenances il vous alertera, bien que vous puissiez toujours créer la RP et demander notre aide pour résoudre les conflits.

Maintenant, il vous suffit de fournir un titre descriptif et une description qui nous informera des changements.

Notez également la case à cocher `Autoriser les modifications depuis les principaux` .  
Cette case à cocher permet aux personnes ayant un accès en écriture au CrT-Repo (e. . Les membres de l'organisation CraftTweaker) pour modifier les fichiers de votre PR afin de résoudre les conflits de fusion, par exemple.

![New PR Tool](/Contribute/assets/PullRequest_Create.png)

En bas vous pouvez vérifier que tous vos changements seront inclus dans le PR.

## Étapes suivantes

Ensuite, quelqu'un de l'organisation CrT ou n'importe quel contributeur peut regarder vos relations publiques et laisser des commentaires généraux ou des suggestions.  
Si quelqu'un de l'organisation CrT fait un examen de relations publiques, vous serez informé de tous les commentaires et si vous devez modifier quelque chose avant de le fusionner.  
Une fois que toutes les suggestions ont été résolues, quelqu'un fusionnera la PR.