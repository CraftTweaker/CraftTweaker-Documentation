# Котел

Этот пакет позволяет добавлять и удалять рецепты в/из распятия.

## Импорт пакета

Вы можете [импортировать](/AdvancedFunctions/Import/) пакет и его методы для облегчения извлечения методов.

```zenscript
import mods.thaumcraft.Crucible;
```

## Добавление рецептов

```zenscript
//mods.thaumcraft.Crucible.registerRecipe(String name, String researchKey, IItemStack, IIngredient input, CTAspectStack[]);
mods.thaumcraft.Crucible.registerRecipe("crucibleTest", "", <minecraft:diamond>, <minecraft:stick>, [<aspect:aer>]);
```

## Удаление рецептов

```zenscript
//mods.thaumcraft.Crucible.removeRecipe(String name);
mods.thaumcraft.Crucible.removeRecipe("recipeName");


//mods.thaumcraft.Crucible.removeRecipe(выход IItemStack);
mods.thaumcraft.Crucible.removeRecipe(<minecraft:leather>);
```