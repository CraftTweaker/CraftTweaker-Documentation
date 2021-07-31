# Spinning Wheel

## Package
`mods.atum.SpinningWheel;`

## Tarif Ekleme

`mods.atum.SpinningWheel.addRecipe(input, output, rotations);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `rotations` Any number above 0

Girilen input ve output değerlerine göre bir tarif oluşturur. Verilen rotation değerine göre tarifi tamamlar.

```zenscript
mods.atum.SpinningWheel.addRecipe(<item:atum:scroll>, <item:minecraft:string>, 3);
```

## Bir Tarifi Kaldırma

### Çıkışa göre Tarif Kaldırma

`mods.atum.SpinningWheel.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Girilen [IItemStack](/vanilla/api/items/IItemStack) çıktısının olduğu bütün tarifleri kaldırır.

```zenscript
mods.atum.SpinningWheel.removeRecipeByOutput(<item:atum:linen_thread>);
```

### Remove Recipes by Output & Input

`mods.atum.SpinningWheel.removeRecipeByOutputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Removes the specific recipe, with the specified output & input

```zenscript
mods.atum.SpinningWheel.removeRecipeByOutputInput(<item:atum:linen_thread>, <item:atum:flax>);
```

### Other removal methods

See [Recipe Managers](/recipes/recipe_managers) for other ways to remove Spinning Wheel recipes
