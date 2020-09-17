# Recettes Avancées

## Paquet

```zenscript
Importer mods.ic2.AdvRecipes ;
```

## Types de recettes
Il y a plusieurs types de recettes :

### Recettes formées
Les recettes formées sont des recettes, là où elles sont importantes, dans quel emplacement. Par exemple, vous ne pouvez pas simplement organiser 7 piles différentes de lingots de fer pour créer des jambières de fer. La forme importe, donc c'est une recette formée.

### Recettes sans forme
Les recettes sans forme sont des recettes, où seuls les objets que vous mettez dans la matière de la grille d'artisanat, alors que la forme n'est pas importante. Par exemple, le bleu et le jaune créent une teinture verte. Cette recette ne se soucie pas de l'endroit où vous avez mis quel objet.

## Ajouter des recettes

### Ajouté à Shaped
```zenscript
mods.ic2.AdvRecipes.addShaped(sortie, entrées);
```

Cela crée une recette formée pour la sortie `` en utilisant `entrées` en tant qu'Ingrédients.

`output` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[]\[\\] (see below)

`les entrées` sont un Ingrédient [dimensionnel](/Vanilla/Variable_Types/IIngredient/) 2 tableaux.  
Donc la recette des Jambières de Fer serait écrite sous la forme de `[[fer,fer,fer],[fer,fer,fer,fer,] ull, fer]]`  
Si cela semble confus, essayez de scinder les tableaux en un tableau par ligne
```zenscript
fer val = <minecraft:iron_ingot>;
jambières val = <minecraft:iron_leggings>;

Recettes Avancées. ddShaped(leggings,
 [[iron * 5,iron * 7,iron * 5],
  [iron * 3,null,iron * 3],
  [iron,null,iron]]);
```

### addShapeless
```zenscript
mods.ic2.AdvRecipes.addShapeless(sortie, entrées)
```

Cela crée une recette empilée sans forme pour la sortie `` en utilisant `entrées` comme Ingrédients.

`la sortie` est une [IItemStack](/Vanilla/Items/IItemStack/)  
`les entrées` sont un [Ingrédient](/Vanilla/Variable_Types/IIngredient/)[] (par exemple [ [<minecraft:dye:1>,<minecraft:dye:2>])

### addHidden
```zenscript
mods.ic2.AdvRecipes.addHiddenShapeless(sortie IItemStack, IIngredient[] ingredients);
mods.ic2.AdvRecipes.addHiddenShaped(sortie IItemStack, IIngredient[][] ingredients);
```

Cela crée une recette empilée ou sans forme pour la sortie `` en utilisant `entrées` comme Ingrédients cachés. 
