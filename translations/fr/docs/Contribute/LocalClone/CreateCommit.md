# Créer un commit

## Pré-requis

Vous devez avoir [Cloné le dépôt sur votre disque local](/Contribute/LocalClone/Clone).  
Vous devez également avoir déjà modifié quelque chose dans votre clone local.

## Que ferons-nous

Pour apprendre, nous allons créer un fichier nommé `Test. d` qui sera disponible dans `AdvancedFunctions/Secret/Test` et l'ajouter à mkdocs.yml.

Les captures d'écran sont prises à partir d'un éditeur Sublime Text 3 (non enregistré parce que sur une VM), mais vous pouvez utiliser l'éditeur que vous voulez créer/modifier les fichiers.  
C'est l'un des avantages de travailler localement ^^.

Screenshots of the example files: ![Test.md](/Contribute/LocalClone/assets/Example1_TestMD.png) ![mkdocs.yml](/Contribute/LocalClone/assets/Example1_mkdocsYML.png)

## Statut Git et Git add/stage

La commande `statut git` vous indique quels fichiers ont été changés.  
Dans notre exemple, cela nous montre ceci:

![Appel de statut Git](/Contribute/LocalClone/assets/Example1_Bash_GitStatus.png)

Comme vous pouvez le voir, nous avons deux sections, des fichiers modifiés et des fichiers non suivis. Les fichiers modifiés sont des fichiers dont le contenu diffère de l'index (git en connaît une autre version que celle que vous avez actuellement sur votre ordinateur).  
Les fichiers non suivis sont des fichiers qui n'existent pas encore dans l'index (git ne les connaît pas encore).

Dans les deux cas, vous pouvez dire à git de *stage* les fichiers en utilisant soit `git add` ou `git stage`: ![Appel de statut Git](/Contribute/LocalClone/assets/Example1_Bash_GitStatus2.png)

Maintenant les fichiers sont mis en scène pour être livrés et donc imprimés en vert. Avis, que si vous modifiiez l'un de ces fichiers maintenant, vous devrez relancer la commande add car elle n'ajoute que l'état actuel à la zone de diffusion.

## Commit Git

Maintenant que vous avez ajouté les fichiers, vous devez créer une livraison.  
Cela peut être fait en utilisant la commande `git commit`.

Lorsque vous émettez cette commande, tous les états de fichiers qui sont actuellement staged seront combinés et ajoutés à l'index.  
Cela signifie que vous pouvez créer une livraison qui change plus d'un fichier (l'éditeur en ligne de quelque chose de GH n'est pas capable).  
Habituellement vous voudrez créer un commit par secteur logique, donc si vous voulez créer une PR qui ajoute de la documentation pour ModA, ModB et ModC, vous pouvez créer un commit qui ajoute ModA, un qui ajoute ModB et un ModC qui ajoute un ModC.

### Paramétrage des identifiants git

If this is the first time you create a commit using git you will see this message: ![Appel de statut Git](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_CredentialError.png)

Cela signifie que git ne sait pas qui vous êtes, donc il ne sait pas qui l'auteur de la livraison est censé être. Laissons donc les commandes indiquées dans le message d'erreur :

    git config --global user.email "votreEmail"
    git config --global user.name "votreNom"
    

Pour l'e-mail, utilisez celui qui a été ajouté à votre compte GH.  
Pour le nom, vous pouvez utiliser tout sauf essayer d'utiliser le nom de votre compte GH.

### Définition du titre/message du commit

If your credentials are set correctly, you will get a screen like this: ![Fenêtre de message Git commit](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_Message1.png)

Ceci provient de l'éditeur de texte que GitBash utilise pour cela.  
Pour entrer en mode insertion (pour que vous puissiez écrire quelque chose), appuyez sur la touche INSERT.  
Vous pouvez maintenant écrire votre titre de commit (première ligne) et le message de commit (tout ce qui suit cela).  
Vous pouvez utiliser la clé Entrée pour créer une nouvelle ligne et tout ce qui commence par un `#` sera ignoré.

Ne vous inquiétez pas de la couleur, ce n'est pas votre préoccupation pour le moment.  
Pour quitter le mode INSERT, appuyez sur ESC.

Maintenant, vous devez dire à l'éditeur que vous êtes terminé.  
Vous pouvez le faire en tapant `:x` et en appuyant sur ENTRÉE.

Here's a screen of what this may look like just before pressing enter to leave the editor: ![Fenêtre de message Git commit](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_Message2.png)

### Définition du message/titre du commit en utilisant -m

Si vous n'aimez pas l'éditeur de bash ou si vous avez du mal à vous souvenir des touches à presser, vous pouvez également utiliser le paramètre `-m "message"`. Vous pouvez ouvrir le `"` et le laisser sans correspondance pour pouvoir créer des sauts de ligne. Terminez en tapant la machine `"`.  
Comme dans l'éditeur, tout ce qui se trouve en dessous de la première ligne est considéré comme faisant partie du message de livraison.

The same commit message as above could be achieved by doing: ![Git commit en utilisant -m](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_MessageParameter.png)

## Comment continuer

Maintenant que vous savez comment créer des commits, vous pouvez [les envoyer à votre fork](/Contribute/LocalClone/Push/).