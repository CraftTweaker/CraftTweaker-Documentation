::requiredMod[Atum 2]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/atum}

# Spinning Wheel

## Aggiungere una Ricetta

`<recipetype:atum:spinning_wheel>.addRecipe(input, output, rotations);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `rotations` Any number above 0

Adds a recipe with the specified input & output, that takes the specified rotations to complete the recipe

```zenscript
<recipetype:atum:spinning_wheel>.addRecipe(<item:atum:scroll>, <item:minecraft:string>, 3);
```

## Rimuovere una RIcetta

### Rimuovere Ricette in base al Prodotto

`<recipetype:atum:spinning_wheel>.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Rimuove tutte le ricette il cui prodotto è l'[IItemStack](/vanilla/api/items/IItemStack) dato.

```zenscript
<recipetype:atum:spinning_wheel>.removeRecipeByOutput(<item:atum:linen_thread>);
```

### Remove Recipes by Output & Input

`<recipetype:atum:spinning_wheel>.removeRecipeByOutputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Removes the specific recipe, with the specified output & input

```zenscript
<recipetype:atum:spinning_wheel>.removeRecipeByOutputInput(<item:atum:linen_thread>, <item:atum:flax>);
```

### Other removal methods

See [Recipe Managers](/recipes/recipe_managers) for other ways to remove Spinning Wheel recipes
