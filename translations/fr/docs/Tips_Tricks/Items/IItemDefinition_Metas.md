# Utiliser IItemDefinitions pour gagner beaucoup de temps lors de la référence de méta-éléments

## Problème

Disons que nous voulons enlever les recettes de quelques couleurs spécifiques de laine.  
La laine blanche a les métadonnées 0, toutes les couleurs vont de meta 1 à meta 15, donc il y a 16 au total.

Nous voulons enlever les laines avec meta 3 à 12. Que faisons-nous?  
Nous ne pouvons pas nous contenter de les supprimer tous (en d'autres mots, utilisez `<minecraft:wool:*>`), mais nous ne voulons pas non plus écrire 10 fois la même chose.  
Alors que dans cet exemple cela fonctionnerait totalement, à grande échelle, cela devient assez ennuyeux !

## Que savons-nous/avons besoin de savoir

- recipes.remove requiert un objet [Igredient](/Vanilla/Variable_Types/IIngredient/)
- Un [IItemStack](/Vanilla/Items/IItemStack/) peut être utilisé comme [IIngrédient](/Vanilla/Variable_Types/IIngredient/) comme [IItemstack](/Vanilla/Items/IItemStack/) étend [IIngrédient](/Vanilla/Variable_Types/IIngredient/)
- Nous pouvons utiliser [IItemDefinitions](/Vanilla/Items/IItemDefinition/) pour créer [IItemStacks](/Vanilla/Items/IItemStack/)

## Solution

Nous utilisons [IItemDefinitions](/Vanilla/Items/IItemDefinition/) et une plage d'entier et itérons à travers ces dernières.  
Si nous ne pouvons pas utiliser une plage d'ints, nous pouvons également utiliser une table de nombres, mais cela vous demandera de taper tous les nombres requis.  
Vous pouvez également utiliser ceci à l'exception de certains éléments à utiliser.

```zenscript
val itemDef = <minecraft:wool>. efinition;

//fait cela pour <minecraft:wool:3> à <minecraft:wool:12>
pour i dans 3 à 13{
    recettes.remove(itemDef. akeStack(i));
}


val numArray = [3,4,5,6,7,8,9,10,11,12] comme int[];


//<minecraft:wool:3> à <minecraft:wool:12>
pour i dans numArray{
    itemDef. akeStack(i).addTooltip("Un-Craftable");
}

//<minecraft:wool:3> à <minecraft:wool:12>, mais sans 5 et 9
pour i in 3 .. 13{
    if(i != 5 & i != 9){
        itemDef.makeStack(i).addShiftTooltip("Aidez-moi !");
    }
}

```