::requiredMod[Atum 2]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/atum}

# Spinning Wheel

## Tarif Ekleme

`<recipetype:atum:spinning_wheel>.addRecipe(input, output, rotations);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `rotations` Any number above 0

Girilen input ve output değerlerine göre bir tarif oluşturur. Verilen rotation değerine göre tarifi tamamlar.

```zenscript
<recipetype:atum:spinning_wheel>.addRecipe(<item:atum:scroll>, <item:minecraft:string>, 3);
```

## Bir Tarifi Kaldırma

### Çıkışa göre Tarif Kaldırma

`<recipetype:atum:spinning_wheel>.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Girilen [IItemStack](/vanilla/api/items/IItemStack) çıktısının olduğu bütün tarifleri kaldırır.

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
