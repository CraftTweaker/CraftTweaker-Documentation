# Modifier les fichiers en utilisant l'éditeur en ligne de GitHub

## Exigences

Vous aurez besoin de créer un compte GitHub et [avez forcé le wiki sur votre compte](/Contribute/SetupGithub).

## Introduction

L'éditeur en ligne de GitHub vous permet de modifier et de créer des fichiers en utilisant uniquement votre navigateur.  
Il ne peut pas être aussi polyvalent que [en utilisant une copie locale](/Contribute/LocalClone/CreateCommit/) mais vous n'avez pas besoin de vous inquiéter de la mise en place de [git](/Contribute/LocalClone/InstallingGit/) et tout.

Ce guide vous montrera comment éditer un fichier déjà existant en utilisant l'éditeur en ligne de github.  
Vous pouvez modifier la page parce que vous avez trouvé une faute de frappe ou que vous voulez inclure un meilleur exemple, quelle que soit la raison, n'hésitez pas à livrer les changements et éventuellement [à déposer une Pull Request](/Contribute/PullRequest).

Cependant, n'oubliez pas que vous ne pouvez modifier que la version anglaise, les traductions sont gérées via [CrowdIn](https://crowdin.com/project/crafttweaker-documentation/).

## Localiser le fichier

Si vous voulez éditer un fichier existant, vous devez d'abord le localiser.

Dans la plupart des cas, vous pouvez trouver le fichier en vérifiant son URL Wiki.

Règle de pouce : Le `#` est le dossier de documentation, tout ce qui suit sont des dossiers imbriqués et éventuellement le fichier.

Par exemple, le fichier créant  
[https://docs.blamejared.com/fr/#AdvancedFunctions/Arrays_and_Loops/](https://docs.blamejared.com/en/#AdvancedFunctions/Arrays_and_Loops/)  
se trouve dans  
`docs/AdvancedFunctions/Arrays_and_Loops.md`

## Modifier le fichier

Après avoir localisé le fichier avec succès, cliquez dessus pour l'ouvrir dans la vue de fichier GitHub.  
Ici vous pouvez voir à quoi ressemblera l'entrée du wiki. mais aucune barre de navigation n'est présente car il ne s'agit que du contenu de l'entrée.

Click on the little pen icon to open the editor: ![Bouton d'édition](/Contribute/assets/OnlineEditor_EditButton.png)

L'éditeur vous permet de modifier votre fichier comme vous le souhaitez, et aussi de voir directement un aperçu avec le formatage compilé. Cet aperçu aura des barres de couleur sur le côté gauche indiquant que:

- Vert : Cette section n'était pas présente sur cette page auparavant.
- Jaune : Cette section était présente sur cette page mais a été modifiée, par exemple une faute de frappe, ou des informations supplémentaires ont été fournies.
- Rouge: Cette section était présente sur cette page avant mais a été supprimée.
- Aucune: Cette section n'a pas été touchée.

Si la syntaxe des fichiers est nouvelle pour vous, le wiki utilise MarkDown. Il devrait y avoir beaucoup de tutoriels à trouver en utilisant Google (ou vous pourriez en ajouter un directement ici à ce wiki si vous le souhaitez).

## Enregistrer/Valider les modifications

Après avoir modifié le fichier, vous devez informer GitHub que vous souhaitez enregistrer vos modifications.

C'est pour cela que la case commit sous votre éditeur est pour:  
Vous ne pouvez pas simplement enregistrer le fichier, vous devez fournir un résumé de ce que vous avez fait (titre de livraison) et éventuellement une courte description où vous pouvez ajouter des informations supplémentaires comme la raison pour laquelle vous avez fait les modifications ou ce qui a été exactement changé.

Par défaut, cela ressemble à peu près à ceci :  
![Boîte de validation par défaut](/Contribute/assets/OnlineEditor_CommitBox_Default.png)

Dans cet exemple, le titre du commit (ou récapitulatif d'édition) est `Mettre à jour Arrays_and_Loops.md`. GitHub ne peut pas savoir ce que vos changements étaient censés faire, donc il essaie quelque chose d'aussi générique que cela.

Vous pouvez ajouter un titre ou une description supplémentaire, mais ce n'est pas nécessaire, mais cela rend plus facile l'examen de votre demande d'ajout plus tard.

Si vous avez plusieurs adresses e-mail enregistrées pour votre compte GitHub, vous pouvez choisir celle dont vous allez créer la livraison. Cela n'aura cependant aucun impact réel sur la contribution.  
Vous pouvez également décider si vous voulez valider directement votre branche principale ou plutôt créer une nouvelle branche pour votre livraison. Dans la plupart des cas, la validation de votre branche principale fonctionne très bien.

A filled out example might look like this: ![Boîte de validation remplie](/Contribute/assets/OnlineEditor_CommitBox_Filled.png)

## Que faire ensuite

Une fois que vous avez validé vos modifications, vous pouvez continuer et éditer ou [Créer](/Contribute/OnlineEditor_Create) plus de fichiers en utilisant l'éditeur en ligne.  
Après avoir fait toutes vos modifications, vous pouvez [déposer une Pull Request](/Contribute/PullRequest).