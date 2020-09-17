# Quern

## Paquet
`mods.atum.Quern;`

## Ajout d'une recette

`mods.atum.Quern.addRecipe(entrée, sortie, rotations);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `rotations` Tout nombre au-dessus de 0

Ajoute une recette avec l'entrée & sortie spécifiée, qui prend les rotations spécifiées pour compléter la requête

```zenscript
mods.atum.Quern.addRecipe(<item:atum:fertile_soil>, <item:atum:fertile_soil_pile>, 3);
```

## Suppression d'une recette

### Supprimer les recettes par sortie

`mods.atum.Quern.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Supprime toutes les recettes où le résultat de sortie est le [IItemStack](/vanilla/api/items/IItemStack) fourni.

```zenscript
mods.atum.Quern.removeRecipeByOutput(<item:atum:emmer_flour>);
```

### Supprimer les recettes par sortie & Entrée

`mods.atum.Quern.removeRecipeByOutputInput(sortie, entrée);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Supprime la recette spécifique, avec la sortie & entrée spécifiée

```zenscript
mods.atum.Quern.removeRecipeByOutputInput(<item:atum:emmer_flour>, <item:atum:emmer>);
```

### Autres méthodes de suppression

Voir [Gestionnaires de recettes](/recipes/recipe_managers) pour d'autres façons de supprimer les recettes de Quern
