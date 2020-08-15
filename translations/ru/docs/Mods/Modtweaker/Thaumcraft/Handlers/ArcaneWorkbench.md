# Мистический верстак

Этот пакет позволяет добавлять и удалять рецепты в/из Arcane Workbench.

## Импорт пакета

Вы можете [импортировать](/AdvancedFunctions/Import/) пакет и его методы для облегчения извлечения методов.

```zenscript
import mods.thaumcraft.ArcaneWorkbench;
```

## Добавление рецептов

```zenscript
//mods.thaumcraft.ArcaneWorkbench.registerShapedRecipe(String name, String research, int vis, CTAspectStack[] aspectList, IItemStack outpuput, IIngredient[][] input);
mods. haumcraft.ArcaneWorkbench. egisterShapedRecipe("test", "", 20, [<aspect:aer>, <aspect:ignis>, <aspect:terra>], <minecraft:diamond>, [[<minecraft:dirt>], [<minecraft:stick>], [<minecraft:grass>]);


//моды. haumcraft.ArcaneWorkbench.registerShapelessRecipe(String name, String research, int vis, CTAspectStack[] aspectList, IItemStack outpuput, IIngredient[] input);
mods. haumcraft.ArcaneWorkbench.registerShapelessRecipe("тесты", "", 20, [<aspect:aqua>, <aspect:ignis>, <aspect:terra>], <minecraft:diamond>, [<minecraft:sand>, <minecraft:stick>, <minecraft:grass>]);
```

## Удаление рецептов

```zenscript
//mods.thaumcraft.ArcaneWorkbench.removeRecipe(String name);
mods.thaumcraft.ArcaneWorkbench.removeRecipe("recipeName");


//mods.thaumcraft.ArcaneWorkbench.removeRecipe(IItemStack);
mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumcraft:goggles>);
```