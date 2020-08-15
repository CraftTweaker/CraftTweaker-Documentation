# Mana Infusion

Lek ManaInfusion jest używany do dodawania lub usuwania receptury do/z Botania ManaPool.

## Dzwonienie

Możesz wywołać pakiet ManaInfusion używając `mods.botania.ManaInfusion`

## Znajdź wszystkie zarejestrowane przepisy

Wszystkie zarejestrowane receptury ManaInfusion można znaleźć za pomocą [`/ct infusions`](/Mods/Modtweaker/Botania/Commands/).

## Dodanie przepisu

```zenscript
//mods.botania.ManaInfusion.addInfusion(wyjście IItemStack, IIngredient input, int mana);
mods.botania.ManaInfusion.addInfusion(<minecraft:grass>, <ore:stone>, 1000);

//mods.botania.ManaInfusion.addAlchemy(wyjście IItemStack, IIngredient input, mana);
mods. otania.ManaInfusion.addAlchemy(<minecraft:gold_ore>, <ore:stone>, 5000);

//mods.botania.ManaInfusion.addConjuration(IItemStack output, IIngredient Input, int mana);
mods.botania.ManaInfusion.addConjuration(<minecraft:stone>, <minecraft:stone>, 1000);
```

## Usuwanie przepisów

```zenscript
//mods.botania.ManaInfusion.removeRecipe(Wyjście Składników);
mods.botania.ManaInfusion.removeRecipe(<minecraft:leather>);
mods.botania.ManaInfusion.removeRecipe(<minecraft:redstone> * 2);
```