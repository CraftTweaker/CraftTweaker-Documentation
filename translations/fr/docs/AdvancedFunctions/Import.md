# Fonction d'importation

Au lieu de taper tout le temps le nom de la fonction, vous pouvez simplement importer une fonction pour répondre à vos besoins. Utile lors de l'utilisation des fonctions de modération.

## Note sur les importations antérieures à 1.12

Avec CraftTweaker 1.12, beaucoup de code a changé.  
Avant, toutes les fonctions internes étaient appelées en utilisant `minetweaker.package.function`. Maintenant, `minetweaker` a été remplacé par `crafttweaker`, alors maintenant il sait `crafttweaker.name.function`!

Si vous rencontrez un quelconque problème d'importation avec les scripts de ce wiki, vous pouvez vérifier si votre version MC est inférieure à 1.12.

## Importation basique

Les importations doivent être déclarées en haut d'un script. Vous devrez déclarer séparément les importations pour chaque script. Faites attention à ne pas importer deux fonctions avec le même nom, utilisez la fonction AS pour cela

```zenscript
//Cela importera la fonction de masquage depuis JEI
import mods.jei.JEI.removeAndHide;

//Et cela importera le package JEI
import mods.jei. EI ;

//removeAndHide est une fonction, donc nous pouvons juste l'utiliser
removeAndHide(<minecraft:dirt>);

//JEI est un paquet, donc nous devons spécifier quelle fonction de celui-ci nous voulons utiliser
JEI. ide(<minecraft:diamond>);
```

## Importer en tant que

Parfois, vous voulez importer deux fonctions avec le même nom ou simplement garder votre style de script meilleur en utilisant des noms personnalisés. Lorsque vous ajoutez l'instruction AS à la fin de l'importation, vous pouvez spécifier le nom que l'import doit écouter.

```zenscript
//Ceci importera la fonction de masquage de JEI et la rendra disponible sous le nom "h"
import mods.jei.JEI. Identifiez en tant que h;

//Et cela importera la fonction removeAndHide de JEI et le rendra disponible sous le nom de "rh"
mods d'importation. ei.JEI.removeAndHide as rh;

h(<minecraft:dirt>);
rh(<minecraft:diamond>);
```