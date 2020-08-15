# Extractor

## Importing the Package
`mods.techreborn.extractor`

## Добавление рецептов
```zenscript
mods.techreborn.extractor.addRecipe(IItemStack output, IIngredient input1, int ticktime, int euTick);
```

## Удаление рецептов
```zenscript
mods.techreborn.extractor.removeInputRecipe(IIngredient ingredient);
mods.techreborn.extractor.removeRecipe(IItemStack output);
mods.techreborn.extractor.removeAll();
```