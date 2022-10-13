::requiredMod[Atum 2]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/atum}

# Quern

## Aggiungere una Ricetta

`<recipetype:atum:quern>.addRecipe(input, output, rotations);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `rotations` Any number above 0

Adds a recipe with the specified input & output, that takes the specified rotations to complete querning

```zenscript
<recipetype:atum:quern>.addRecipe(<item:atum:fertile_soil>, <item:atum:fertile_soil_pile>, 3);
```

## Rimuovere una RIcetta

### Rimuovere Ricette in base al Prodotto

`<recipetype:atum:quern>.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Rimuove tutte le ricette il cui prodotto è l'[IItemStack](/vanilla/api/items/IItemStack) dato.

```zenscript
<recipetype:atum:quern>.removeRecipeByOutput(<item:atum:emmer_flour>);
```

### Remove Recipes by Output & Input

`<recipetype:atum:quern>.removeRecipeByOutputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Removes the specific recipe, with the specified output & input

```zenscript
<recipetype:atum:quern>.removeRecipeByOutputInput(<item:atum:emmer_flour>, <item:atum:emmer>);
```

### Other removal methods

See [Recipe Managers](/recipes/recipe_managers) for other ways to remove Quern recipes
