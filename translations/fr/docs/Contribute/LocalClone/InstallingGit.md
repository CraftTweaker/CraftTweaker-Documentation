# Installing Git

Pour que vous puissiez [cloner votre dépôt forked](/Contribute/LocalClone/Clone/) vous devrez installer git.  
Git est un système de contrôle de version distribué (c'est ce que GitHub, BitBucket et d'autres services de contrôle de version).

## Obtention de Git

Vous pouvez vérifier si git est installé en ouvrant l'invite de commande et en exécutant la commande `git`.  
Si vous obtenez la page d'utilisation, vous l'avez installée et pouvez sauter cette page.  
Si vous n'obtenez pas la page d'utilisation, soit vous ne l'avez pas installée soit vous ne l'avez pas ajoutée à votre PATH (voir ci-dessous). Dans un cas comme celui-ci, vous devrez installer git ou l'ajouter à votre chemin d'accès :  
![CMD Demander à la commande git d'émission sans que git ne soit installé](/Contribute/LocalClone/assets/CMD_noGit.png)

### Téléchargement et installation de Git

Si vous n'avez pas git installé, vous pouvez télécharger l'installateur depuis [leur page officielle](https://git-scm.com/downloads/).  
Choisissez votre système d'exploitation, téléchargez l'installateur, exécutez-le et suivez les instructions.  
Si vous n'êtes pas sûr sur quelles options vérifier, laissez-les par défaut.  
Si vous ne pouvez pas continuer après la configuration de votre éditeur de texte préféré, revenir en arrière d'une page et aller de nouveau vers la page dans certains cas, cela fera apparaître le bouton `suivant`.

### Ajout de Git à votre PATH

Après avoir installé Git, il devrait être ajouté à votre PATH. Si ce n'est pas le cas, essayez d'abord de fermer et d'ouvrir l'invite de commande.  
S'il vous dit toujours qu'il ne connaît pas git, redémarrez votre ordinateur.  
S'il vous dit toujours qu'il ne connaît pas git, vous devrez peut-être l'ajouter à votre chemin.

Je ne couvrirai pas comment l'ajouter en détail, tout ce que vous avez à faire est d'ajouter le répertoire où vous avez installé git en tant que chemin.  
Si vous par exemple avez installé Git vers `C:\Program Files\Git` vous devrez ajouter `C:\Program Files\Git\cmd` à votre chemin.  
Redémarrez ensuite votre invite de commande ou votre ordinateur.

Techniquement, ce n'est pas nécessaire mais cela facilite certaines commandes.

## Comment continuer

Maintenant que vous avez installé git, vous pouvez cloner [votre dépôt forked](/Contribute/LocalClone/Clone/).