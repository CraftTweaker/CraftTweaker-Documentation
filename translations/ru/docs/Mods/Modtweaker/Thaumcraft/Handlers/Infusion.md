# Инфузия

Этот пакет позволяет добавлять и удалять рецепты в/из Инфузии.

## Импорт пакета

Вы можете [импортировать](/AdvancedFunctions/Import/) пакет и его методы для облегчения извлечения методов.

```zenscript
import mods.thaumcraft.Infusion;
```

## Добавление рецептов

```zenscript
//mods.thaumcraft.Infusion.registerRecipe(String name, String research, IItemStack, int instability, CTAspectStack[] aspects, IIngredient centralItem, IIngredient[] recipe);
mods. haumcraft.Infusion.registerRecipe("testName", "", <minecraft:diamond>, 20, [<aspect:aer>, <aspect:ignis>], <minecraft:grass>, [<minecraft:stick>, <minecraft:dirt>]);
```

## Удаление рецептов

```zenscript
//mods.thaumcraft.Infusion.removeRecipe(String name);
mods.thaumcraft.Infusion.removeRecipe("recipeName");


//mods.thaumcraft.Infusion.removeRecipe(IItemStack);
mods.thaumcraft.Infusion.removeRecipe(<thaumcraft:mirror_essentia>);
```