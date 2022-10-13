::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Плавильная печь Immersive Engineering

Плавильная печь — это реализация [IRecipeManager](/vanilla/api/managers/IRecipeManager), она содержит все методы, доступные в нем, такие как `removeRecipe()` или `removeAll()`.

## Методы

#### Добавить рецепт

Следующий скрипт добавит рецепт, выдающий 2 золотых слитка через 200 тиков после того, как 10 железных слитков и любой предмет с тегом шерсть положены в плавильную печь.

```zenscript
// <recipetype:immersiveengineering:alloy>.addRecipe(string recipePath, IIngredient inputA, IIngredient inputB, int time, IItemStack output)

<recipetype:immersiveengineering:alloy>.addRecipe("spin_iron_to_gold", <item:minecraft:iron_ingot> * 10, <tag:items:minecraft:wool>, 200, <item:minecraft:gold_ingot> * 2);
```

#### Удалить рецепт

Следующий скрипт удалит все рецепты плавильной плечи, выдающие константановый слиток.

```zenscript
// <recipetype:immersiveengineering:alloy>.removeRecipe(output as IItemStack)

<recipetype:immersiveengineering:alloy>.removeRecipe(<item:immersiveengineering:ingot_constantan>);
```