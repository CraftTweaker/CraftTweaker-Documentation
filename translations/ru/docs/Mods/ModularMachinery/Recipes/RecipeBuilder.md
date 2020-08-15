# Рецепт-строитель

Класс Рецепт имеет только одну цель: создать для вас новый [Рецепт](/Mods/ModularMachinery/Recipes/RecipePrimer/) объект.

## Звонок

Вы можете вызвать пакет пива, используя `mods.modularmachinery.RecipeBuilder`

## Создание рецепта.

Это единственные функции, которые будут найдены в классе, они оба возвращают новый объект [RecipePrimer](/Mods/ModularMachinery/Recipes/RecipePrimer/).

```zenscript
//mods.modularmachinery.RecipeBuilder.newBuilder(tring recipeRegistryName, String associatedMachineRegistryName, int processingTickTime);


//mods.modularmachinery.RecipeBuilder.newBuilder(tring recipeRegistryName, String associatedMachineRegistryName, int processingTickTime, int sortingPriority);


```

```zenscript
элемент вар = <item:minecraft:gold_ingot>;
```