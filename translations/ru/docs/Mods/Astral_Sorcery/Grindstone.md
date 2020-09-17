# Grindstone

Вы можете использовать CrT для добавления или удаления рецептов из AS grindstone.

## Звонок

Вы можете вызвать пакет InfusionRecipe с помощью `mods.astralsorcery.Grindstone`.

## Удаление

Это удалит первый шлифовальный рецепт, который обнаруживает, что создаёт предоставленный [IItemStack](/Vanilla/Items/IItemStack/) `вывод`.  
Если есть несколько рецептов, возвращающих предоставленный выход, вам нужно вызвать этот метод несколько раз!

```zenscript
//mods.astralsorcery.Grindstone.removeRecipe(IItemStack);
mods.astralsorcery.Grindstone.removeRecipe(<minecraft:redstone>);
```

## Сложение

```zenscript
//mods.astralsorcery.Grindstone.addRecipe(IItemStack input, IItemStack output);
mods.astralsorcery.Grindstone.addRecipe(<minecraft:stone>, <minecraft:gravel>);

//mods.astralsorcery.Grindstone.addRecipe(IItemStack input, IItemStack output, float doubleChance);
mods.astralsorcery.Grindstone.addRecipe(<minecraft:cobblestone>, <minecraft:gravel>, 0.5f);
```