# Le concept

La boucle est un vieux concept et une des bases de la programmation : répéter le même ensemble d'actions sur un groupe d'éléments , tout en filtrant certains d'entre eux ou en convertissant des sets. Ou même trouver le premier élément dans une liste qui satisfait une certaine condition ou un nombre d'éléments dans un ensemble récursivement.

En programmation procédurale et impérative, la plupart de cela a été fait avec de simples vieux `pour les boucles` et une série d'instructions conditionnelles avec leur relative `continuez` et `brisez`. Bien que cela puisse paraître plus simple à suivre, cela nécessite beaucoup de code pour des opérations simples telles que le filtrage et peut produire des chaînes d'imbrication qui peuvent durer plus longtemps. De plus, il n'exprime pas l'intention à moins que le code ne la spécifie avec des commentaires.

Considérez le code ZenScript suivant :

```zenscript
var nbtForMc = false;

pour la recette dans les recettes. sera {
    if (recipe.shaped) {
        sortie val = recettes. utput;
        si (! sNull(output)) {
            if (output. efinition.owner == "minecraft") {
                val hasData = output. étiquette;
                if (hasData) {
                    nbtForMc = true;
                    pause;
                }
            }
        }
    }
}
```

Ce que fait ce code n'est pas évident d'un premier coup d'œil et demande à l'utilisateur de lire la logique pour comprendre. Considérez cet équivalent construit via des séquences:

```zenscript
val nbtForMc = <sequence:ICraftingRecipe>(recettes.all)
    .filter(function (recettes) { return recipe. haped; })
    .map(function (recipe) { return recipe.output; })
    . ilterNot(function (output) { return isNull(output); })
    .filter(function (output) { return output. efinition.owner == "minecraft"; })
    .any(function (output) { return output.hasTag; });
```

Ce code fait exactement la même chose et non seulement il est plus concis, mais transmet aussi plus de sens qu'une chaîne d'instructions imbriquées `si` sont imbriquées. Certes, cela ne semble pas être une amélioration générale, en raison de la simplicité du code en question, mais cela peut s'avérer utile pour des éléments de logique plus complexes.

Un autre pro du code ci-dessus est que l'évaluation n'est pas effectuée jusqu'au `aucun appel` , ce qui signifie que la séquence peut être étendue via des appels de méthodes supplémentaires au fil du temps et qu'elle ne sera pas résolue tant qu'une méthode "terminale" n'est pas appelée (i. . une méthode qui ne renvoie pas une `Séquence` elle-même). Cela s'avère extrêmement utile car il n'est pas nécessaire d'évaluer les recettes entières de `. Tout le tableau`.

Pour démarrer et tirer parti des séquences, vous pouvez consulter à la fois la [documentation de classe](/Mods/Boson/Sequences/Docs/) et la [comment obtenir une](/Mods/Boson/Sequences/Obtaining/) pages de documentation.
