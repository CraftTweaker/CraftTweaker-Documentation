# Une première sur les interfaces fonctionnelles

Selon la spécification Java Language pour Java 8, une interface fonctionnelle en Java est :

> Une interface fonctionnelle est une interface qui n'a qu'une seule méthode abstraite (en dehors des méthodes de `Object`), et représente donc un contrat de fonction unique. Cette méthode « unique » peut prendre la forme de méthodes abstraites multiples avec des signatures équivalentes héritées de superinterfaces ; dans ce cas, les méthodes héritées représentent logiquement une méthode unique.
> 
> Pour une interface I, let `M` être l'ensemble de `méthodes abstraites` qui sont membres de moi qui n'ont pas la même signature que toute `méthode publique` méthode d'instance de la classe `objet`. Ensuite, je suis une *interface fonctionnelle* s'il existe une méthode `m` dans `M` pour laquelle les deux suivants sont vraies :
> 
> - La signature de `m` est une sous-signature ([§8.4.2](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4.2)) de la signature de chaque méthode dans `M`.
> - `m` est retourne-type-substituable ([§8.4.5](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4.5)) pour chaque méthode dans `M`.
> 
> [Source](https://docs.oracle.com/javase/specs/jls/se8/html/jls-9.html#jls-9.8)

ZenScript, étant un langage de programmation de type Java qui interagit avec un backend Java, a une définition similaire.

## Une simplification
La définition ci-dessus est trop précise et compliquée, ce qui doit être attendu à partir d'une spécification formelle du langage. Une version plus simplifiée pour le développeur pourrait être la suivante:

> Une interface `I` est appelée une interface fonctionnelle ** si elle ne définit qu'une seule méthode abstraite.

Cette définition est également acceptée par ZenScript lui-même.

## L’utilisation pratique
Jusqu'à présent, la documentation ci-dessus s'est davantage appuyée sur "quoi" plutôt que sur "pourquoi". Les interfaces fonctionnelles peuvent ressembler à un gimmick , mais elles sont particulièrement utiles, car dans ZenScript, elles permettent *des fonctions pures* (i. . les choses que vous créez avec la fonction ``) à passer au code Java sans nécessiter d'étranges shenanigans. C'est quelque chose que nous définissons comme "lambda".

Des exemples d'applications de ces interfaces sont les [Fonctions de recettes](/Vanilla/Recipes/Crafting/Recipe_Functions/) qui peuvent être passées à des recettes pour modifier dynamiquement la sortie ou l'entrée : `IRecipeFunction` et `IRecipeAction` sont en deux interfaces fonctionnelles.

## Le problème et sa solution
Les interfaces fonctionnelles disponibles dans le langage ZenScript sont toutes trop spécifiques. D'une part, cela permet des fonctions finement conçues pour certains paramètres ; d'autre part, cela limite sévèrement les possibilités de ce que peut être fait par le développeur.

Pour cette raison, le projet ZenScriptX a décidé de fournir un ensemble d'interfaces fonctionnelles de but général qui peuvent recevoir un nombre défini de paramètres d'entrée et de sortie autre chose. permettant une interopérabilité plus facile avec les API basées sur Java. Une liste complète des interfaces fonctionnelles disponibles peut être trouvée [sur cette page](/Mods/Boson/Functions/List/), avec tous leurs arguments et types de retour.

## Un avertissement rapide
Notez que dans cette documentation, nous avons principalement fait référence à l'interopérabilité entre ZenScript et Java. Ceci est dû au fait que ZenScript fournit déjà la prise en charge de fonctions plus élevées (i.e. stocker les fonctions dans une variable, les appelant, les passant en tant que paramètres, etc.) sans avoir besoin d'aucune interface fonctionnelle entre les deux. Pour cette raison, le code suivant serait invalide dans ZenScript :

```zenscript
val fun as Function = function (input as IIngredient) as IItemStack {
    if (input instanceof IItemStack) return input input as IItemStack;
    retourne null ;
} en tant que fonction ;

print(fun. pply(<minecraft:stick>).commandString); # ne compile pas
```

Cela se produit parce que les méthodes fonctionnelles ne sont pas exposées à ZenScript, mais seulement au backend Java. Pour trouver un exemple d'utilisation réelle de telles interfaces fonctionnelles, reportez-vous à la page de documentation [Séquences](/Mods/Boson/Sequences/Docs/).


