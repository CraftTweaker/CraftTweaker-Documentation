# Commencer avec des scripts

CraftTweaker utilise un langage de script personnalisé appelé `ZenScript`, ZenScript est lu depuis `. s` fichiers stockés dans le dossier `<gamedir>/scripts`.

ZenScript est un langage de script "haut en bas", ce qui signifie que `Importe` doit être en haut du fichier, `Les déclarations de variables` doivent être en haut du fichier, cependant il n'y a aucune restriction à cela, une variable `` peut être définie n'importe où dans un script, Cependant, il ne sera pas accessible aux lignes au-dessus de la déclaration de la `Variable`.

## Introduction

Vous êtes déjà entré dans la construction d'un modpack et vous avez alors constaté que le simple lancement d'un paquet de mods ne vous a pas donné une expérience intégrée ? Comme les mods sont développés relativement indépendamment les uns des autres, l'un peut se sentir suralimenté par rapport à l'autre. Ou vous pouvez croire qu'il y aurait une meilleure recette pour certains de ces objets. Ou peut-être souhaiteriez-vous retirer un objet du jeu sans avoir à supprimer tout le mod. Ou vous pouvez découvrir que certaines entrées de dictionnaire de minerais ont trop ou trop peu d'éléments. Maintenant, vous pouvez faire tout cela - chacun avec une instruction unique à MineTweaker.

En plus de la fonctionnalité de base fournie pour supporter le minecraft Vanilla, les bibliothèques d'intégration de mod sont fournies avec le mod pour vous permettre non seulement de modifier les recettes de vanilla, mais aussi les recettes de la machine de mods et le comportement de modération.

## Scripts

Les scripts sont stockés dans `<minecraftdir>/scripts` et sont chargés dans la phase de `Préinitialisation` de Minecraft, Contrairement aux versions précédentes de CraftTweaker, les scripts ne peuvent pas être rechargés, cela est dû aux changements que Mojang a faits en 1. 2 et il n'y a pas de solution de contournement. Aussi, les scripts doivent être sur **les deux, le serveur ET l'instance client** pour fonctionner

Les fichiers de script ont le préfixe `.zs` et peuvent être compressés dans un `.zip` qui sera également lu.

### Écriture de votre premier script

Pour commencer avec des scripts, vous pouvez créer un fichier très basique, appelé `hello.zs` dans le dossier `<minecraftdir>/scripts>`.

Dans `hello.zs` mettez la ligne suivante

```zenscript
print("Bonjour le monde !");
```

Chargez maintenant Minecraft et jetez un coup d'œil au fichier `crafttweaker.log`.

Le fichier `crafttweaker.log` est situé dans `<minecraftdir>` et peut être lu par n'importe quel programme qui peut lire des fichiers en texte brut.

Il est recommandé d'utiliser Notepad++ ou Sublime Text pour éditer les fichiers de script, mais n'importe quel programme le fera.

### Le fichier crafttweaker.log

Le fichier `crafttweaker.log` utilise une syntaxe spécifique dans sa sortie, cette syntaxe est :

    [LOADERSTAGE][SIDE][TYPE] <message>
    

En utilisant l'exemple ci-dessus, la sortie serait:

    [PREINITIALIZATION][CLIENT][INFO] Bonjour le monde !
    

La syntaxe est utilisée à des fins de débogage et la seule fois que la syntaxe n'est pas utilisée, est pour les dumps de commandes, dans ce cas, il affiche simplement le message, c'est fait pour que la copie coller les dumps soit plus facile.

### Commentaires

Les commentaires peuvent être utilisés pour rendre vos fichiers de script plus lisibles et plus faciles à comprendre!

ZenScript supporte 3 types de commentaires, être:

Une seule ligne: `// Je suis une seule ligne de commentaire!`

Ligne unique alternative : `# Je suis aussi un commentaire d'une seule ligne !`

Multiligne :

    /* Je suis 
    un commentaire
    multiligne ! */