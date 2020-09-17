# Commencer avec des scripts

CraftTweaker utilise un langage de script personnalisé appelé `ZenScript`, ZenScript est lu depuis `. s` fichiers stockés dans le dossier `<gamedir>/scripts` , Si vous ne savez pas où se trouve ce dossier, exécutez simplement `scripts /ct` quand dans le jeu et le dossier s'ouvrira.

ZenScript est un langage de script "haut en bas", ce qui signifie que `Importe` doit être en haut du fichier, `Les déclarations de variables` doivent être en haut du fichier, cependant il n'y a aucune restriction à cela, une variable `` peut être définie n'importe où dans un script, Cependant, il ne sera pas accessible aux lignes au-dessus de la déclaration de la `Variable`.


Les fichiers de script ont le préfixe `.zs` , assurez-vous que ce n'est pas `.zs.txt`!

## Que sont les scripts

Les scripts sont stockés dans `<gamedir>/scripts` et sont chargés lorsque le joueur rejoint un monde, comme les versions précédentes de CraftTweaker (à l'exception de 1. 2), les scripts peuvent être rechargés, exécutez simplement `/reload`.

Les scripts sont chargés deux fois lorsque vous entrez dans un monde en mode solo, une fois du côté `Serveur` , puis du côté `Client` si vous avez un `println()` dans votre script, vous le verrez deux fois, puisqu'il s'exécute deux fois.

Cela ne veut pas dire que les modifications sont appliquées deux fois par contre, les modifications apportées par les scripts peuvent être accompagnées, donc certaines modifications, comme la localisation des paramètres, ne fonctionne que du côté du client, mais l'ajout de recettes n'est fait que du côté du serveur.

Lorsque vous rejoignez un serveur, le serveur envoie ses scripts au client, et le client exécute ces scripts. Cela signifie qu'un client sans aucun script, peut rejoindre un serveur et obtenir les changements (utile si vous avez besoin de désactiver un élément sur le serveur, mais ne voulez pas forcer les clients à télécharger des fichiers supplémentaires!)


### Écriture de votre premier script

Pour commencer avec des scripts, vous pouvez créer un fichier très basique, appelé `Bonjour. s` dans le dossier `<gamedir>/scripts>` ; Si vous ne savez pas où se trouve le dossier, exécutez simplement `scripts /ct` et il devrait s'ouvrir !

Dans `hello.zs` mettez la ligne suivante

```zenscript
println("Bonjour le monde !");
```

Chargez maintenant Minecraft et jetez un coup d'œil au /logs/crafttweaker `<gamedir>. og` file (ou exécutez `/ct log` pour ouvrir le fichier dans votre éditeur de texte par défaut).

Le fichier `crafttweaker.log` se trouve dans `<gamedir>/logs` et peut être lu par n'importe quel programme qui peut lire des fichiers en texte brut.

Il est recommandé d'utiliser Notepad++, Sublime Text ou VSCode pour éditer les fichiers de script, mais n'importe quel programme le fera.

Lorsque vous choisissez un programme à utiliser pour éditer des scripts, jetez un œil à ce que les surligneurs Syntax sont disponibles, la plupart des éditeurs de texte ont ZenScript mettant en évidence le support à travers l'utilisation d'un plugin.



### Le fichier crafttweaker.log

Le fichier `crafttweaker.log` utilise une syntaxe spécifique dans sa sortie, cette syntaxe est :

```
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

En utilisant l'exemple ci-dessus, la sortie serait:

```
[14:58:06.697][DONE][SERVER][INFO] Bonjour le monde !
```

La syntaxe est utilisée à des fins de débogage et la seule fois que la syntaxe n'est pas utilisée, est pour les dumps de commandes, auquel cas il ne fait qu'imprimer le message, c'est fait donc copier coller les informations dumped est plus facile.

### Commentaires

Les commentaires peuvent être utilisés pour rendre vos fichiers de script plus lisibles et plus faciles à comprendre!

ZenScript supporte 3 types de commentaires, être:

Une seule ligne: `// Je suis une seule ligne de commentaire!`

Ligne unique alternative : `# Je suis aussi un commentaire d'une seule ligne !`

Multiligne :
```
/* Je suis 
un commentaire
multiligne ! */
```

Il suffit de noter que les commentaires `#` sont également utilisés pour les préprocesseurs (lien TODO vers les préprocesseurs quand ils sont documentés), alors qu'ils sont encore des commentaires valables, ils pourraient causer des effets secondaires indésirables. 