# Représentation de la Caractéristique

Une représentation de la Caractéristique représente un trait de construction des Tinkers.  
Vous pouvez obtenir un tel objet soit à partir du [Trait Builder](/Mods/ContentTweaker/Tinkers_Construct/TraitBuilder/) ou à partir du [gestionnaire de tranches de tranchées](/Mods/ContentTweaker/Tinkers_Construct/Brackets/Bracket_Trait/).

## Importation de la classe

Il peut être nécessaire d'importer la classe si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`import mods.contenttweaker.tconstruct.Trait`

## ZenGetter

| ZenGetter          | Type de texte        |
| ------------------ | -------------------- |
| identifier         | chaîne de caractères |
| Chaîne de commande | chaîne de caractères |

## Ajout d'éléments de trait

Si vous combinez le composant donné avec un outil dans la forge d'un outil, vous pouvez appliquer le trait en tant que modificateur.

```zenscript
//myTrait.addModifierItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(1) int amountMatched));
myTrait.addModifierItem(<item:minecraft:iron_pickaxe>);
myTrait.addModifierItem(<item:minecraft:iron_block>, 4, 2);
```

- L'élément `` est l'élément auquel il est associé. Vous pouvez utiliser les [conditions d'article](/Vanilla/Items/Item_Conditions/) mais pas de transformateurs. 
- `amountNeeded` est le nombre d'éléments qui sont correspondants. Vous pouvez les séparer sur tous les emplacements fournis par la forge d'outils, ce qui vous permet également d'aller au-delà de 64. Dans l'exemple ci-dessus, vous avez besoin de 4 blocs de fer par ajout. La valeur par défaut est 1.
- `amountMatched` est le nombre de points de trait ajoutés par `amountNeeded`. Dans l'exemple ci-dessus quatre blocs de fer donnent deux points de caractéristique. La valeur par défaut est 1.

## Accès aux données de Caractéristiques

Les données de trait sont les données qui appartiennent à un trait et sont itemBound. En tant que tel, vous pouvez fournir la [IItemStack](/Vanilla/Items/IItemStack/) et récupérer l'objet [TraitDataRepresentation](/Mods/ContentTweaker/Tinkers_Construct/TraitDataRepresentation/).

    val myTraitData = myTrait.getData(itemWithTrait);