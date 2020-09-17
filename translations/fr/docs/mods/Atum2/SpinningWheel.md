# Roue Tournante

## Paquet
`mods.atum.SpinningWheel;`

## Ajout d'une recette

`mods.atum.SpinningWheel.addRecipe(entrée, sortie, rotations);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `rotations` Tout nombre au-dessus de 0

Ajoute une recette avec l'entrée & sortie spécifiée, qui prend les rotations spécifiées pour compléter la recette

```zenscript
mods.atum.SpinningWheel.addRecipe(<item:atum:scroll>, <item:minecraft:string>, 3);
```

## Suppression d'une recette

### Supprimer les recettes par sortie

`mods.atum.SpinningWheel.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Supprime toutes les recettes où le résultat de sortie est le [IItemStack](/vanilla/api/items/IItemStack) fourni.

```zenscript
mods.atum.SpinningWheel.removeRecipeByOutput(<item:atum:linen_thread>);
```

### Supprimer les recettes par sortie & Entrée

`mods.atum.SpinningWheel.removeRecipeByOutputInput(sortie, entrée);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Supprime la recette spécifique, avec la sortie & entrée spécifiée

```zenscript
mods.atum.SpinningWheel.removeRecipeByOutputInput(<item:atum:linen_thread>, <item:atum:flax>);
```

### Autres méthodes de suppression

Voir [Gestionnaires de recettes](/recipes/recipe_managers) pour d'autres façons de supprimer les recettes de roue tournante
