# Mana Infusion

Das ManaInfusion Paket wird zum Hinzufügen oder Entfernen von Rezepten nach/zum Botania ManaPool.

## Anruf

Sie können das ManaInfusion Paket mit `mods.botania.ManaInfusion` aufrufen

## Alle registrierten Rezepte finden

Alle registrierten ManaInfusion Rezepte finden Sie unter [`/ct botania infusions`](/Mods/Modtweaker/Botania/Commands/).

## Rezeptzusatz

```zenscript
//mods.botania.ManaInfusion.addInfusion(IItemStack output, IIngredient input, int mana);
mods.botania.ManaInfusion.addInfusion(<minecraft:grass>, <ore:stone>, 1000);

//mods.botania.ManaInfusion.addAlchemy(IItemStack output, IIngredient input, int mana);
mods. otania.ManaInfusion.addAlchemy(<minecraft:gold_ore>, <ore:stone>, 5000);

//mods.botania.ManaInfusion.addConjuration(IItemStack output, IIngredient input, int mana);
mods.botania.ManaInfusion.addConjuration(<minecraft:stone>, <minecraft:stone>, 1000);
```

## Rezept-Entfernung

```zenscript
//mods.botania.ManaInfusion.removeRecipe(IIngredient output);
mods.botania.ManaInfusion.removeRecipe(<minecraft:leather>);
mods.botania.ManaInfusion.removeRecipe(<minecraft:redstone> * 2);
```