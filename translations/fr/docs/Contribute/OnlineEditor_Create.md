# Créer des fichiers en utilisant l'éditeur en ligne de GitHub

## Exigences

Vous aurez besoin de créer un compte GitHub et [avez forcé le wiki sur votre compte](/Contribute/SetupGithub).

## Introduction

L'éditeur en ligne de GitHub vous permet de modifier et de créer des fichiers en utilisant uniquement votre navigateur.  
Il ne peut pas être aussi polyvalent que [en utilisant une copie locale](/Contribute/LocalClone/CreateCommit/) mais vous n'avez pas besoin de vous inquiéter de la mise en place de [git](/Contribute/LocalClone/InstallingGit/) et tout.

Ce guide vous montrera comment créer un nouveau fichier wiki en utilisant l'éditeur en ligne de github.  
Votre raison principale pour ajouter de nouvelles pages est plus susceptible de remplir les informations manquantes, mais peut-être que vous voulez aussi ajouter un exemple de wiki pour un gestionnaire de mods donné, quelle que soit la raison, n'hésitez pas à livrer les changements et éventuellement [à déposer une Pull Request](/Contribute/PullRequest).

Cependant, n'oubliez pas que vous devez créer la version anglaise, les traductions sont ensuite gérées via [CrowdIn](https://crowdin.com/project/crafttweaker-documentation/) (mais seulement après la fusion du RP).

## Où créer le fichier

Théoriquement, peu importe où vous avez placé votre fichier, mais essayez de faire correspondre le schéma actuel :

- Tous les fichiers doivent être dans le dossier `docs`.
- La structure du fichier doit correspondre aux miettes de la barre de navigation. Exemple: Lors de l'utilisation de la barre de navigation dans le wiki, `ICraftingRecipe` peut être trouvé dans `Vanilla/Recipes/Crafting Table Recipes/ICraftingRecipe`. Le fichier pour ICraftingRecipe peut être trouvé sur `docs/Vanilla/Recipes/Crafting/ICraftingRecipe.md`. Comme vous pouvez le voir, les chemins ne correspondent pas exactement mais ils sont suffisants pour trouver le fichier.
- Toutes les informations pour un mod doivent rester dans un groupe/dossier.

## Créer le fichier

Après avoir localisé avec succès le chemin d'accès de votre futur fichier, accédez au dossier qui contiendra le fichier dans GitHub, s'il existe.  
Ne vous inquiétez pas si elle n'existe pas, vous pouvez toujours créer le fichier.

Dire que vous voulez créer un fichier appelé `Secret_Information. d` dans `docs/Fonctions Avancées`:  
Trouvez le chemin dans GitHub et cliquez sur `Créer un nouveau fichier` ![Bouton de création de fichier](/Contribute/assets/OnlineEditor_CreateFileButton.png)

On vous présente maintenant la nouvelle page de l'éditeur de fichiers.  
Tout d'abord, vous pouvez voir le chemin du fichier qui sera créé. Si nous voulons que le fichier soit créé exactement dans le répertoire qui est affiché dans le chemin, nous avons seulement besoin de fournir un titre de fichier et une extension. Rappelez-vous que tous les fichiers d'entrée du wiki devraient avoir l'extension `.md` , puisque ce wiki utilise markdown.

Si vous voulez que le fichier soit créé dans un sous-dossier (éventuellement inexistant), ou même dans plusieurs dossiers en bas du chemin, vous pouvez utiliser `/` pour séparer les noms de dossier (comme vous pouvez déjà le voir dans le chemin donné).

L'éditeur vous permet de créer le fichier comme vous le souhaitez, et aussi d'afficher directement un aperçu du formatage compilé.

Si la syntaxe des fichiers est nouvelle pour vous, le wiki utilise MarkDown. Il devrait y avoir beaucoup de tutoriels à trouver en utilisant Google (ou vous pourriez en ajouter un directement ici à ce wiki si vous le souhaitez).

## Ajouter le fichier à l'index

Après avoir créé le fichier et validé la création (voir ci-dessous), vous devrez également ajouter le fichier à l'index afin qu'il puisse être affiché dans la barre de navigation plus tard.

Cet index est le fichier `mkdocs.yml`.

Ce fichier contient tout ce qui est nécessaire pour créer le wiki, et vous devez vous assurer de ne pas le casser (bien que nous vous dirons si votre PR casse une construction si cela devait arriver) !

Tout ce que vous avez à faire est d'ajouter votre fichier et vos catégories à la liste `pages` .  
Le format est assez simple :

- Les entrées commencent par un `-`
- Puis vient le nom (affiché, anglais) du groupe ou de l'entrée, suivi d'un `:`
- Si vous créez un groupement (par exemple `Vanilla` ou `Mods`), procédez sur la ligne suivante, avec deux espaces.
- Si vous créez une référence réelle à un fichier de page, ajoutez-le sur la même ligne, après le `:` et un espace. Assurez-vous de l'envelopper en guillemets simples `'` pour vous assurer que la compilation fonctionne comme prévu. Le chemin est relatif au dossier `docs` , donc `docs/Vanilla/Commands.md` devient `Vanilla/Commands.md`.

Pour des exemples, vérifiez le fichier [actuel mkdocs.yml sur github](https://github.com/CraftTweaker/CraftTweaker-Documentation/blob/master/mkdocs.yml). Vous pouvez également éditer ce fichier et ajouter votre propre exemple ici.

## Enregistrer/Valider les modifications

*Remarque : Cette description provient du guide de modification des fichiers mais les mêmes principes s'appliquent, n'hésitez pas à la remplacer par votre propre version si nécessaire*

Après avoir créé le contenu du fichier, vous devez informer GitHub que vous souhaitez enregistrer vos modifications.

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

Une fois que vous avez validé vos modifications, vous pouvez continuer et [modifier](/Contribute/OnlineEditor_Edit) ou créer plus de fichiers en utilisant l'éditeur en ligne.  
Après avoir fait toutes vos modifications, vous pouvez [déposer une Pull Request](/Contribute/PullRequest).