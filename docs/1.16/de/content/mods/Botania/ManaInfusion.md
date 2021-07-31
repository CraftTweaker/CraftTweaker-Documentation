# Botania Mana Infusion

Mana Infusion ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die für IRecipeManager verfügbar sind wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript wird zwei Mana-Infusionsrezepte hinzufügen, die Rezepte werden Folgendes tun:

1) Wenn ein verzauberter Goldener Apfel einem Mana-Pool übergeben wird, wird ein Stück Erde zurückgegeben. 2) Wenn ein Apfel einem Manapool mit einem Diamantenblock darunter gegeben wird, wird ein Diamant zurückgegeben.

```zenscript
// <recipetype:botania:mana_infusion>.addRecipe(String name, IItemStack output, IIngredient input, int mana, @Optional BlockState catalystState)

<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_test", <item:minecraft:dirt>, <item:minecraft:enchanted_golden_apple>, 200);
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_test_catalyst", <item:minecraft:diamond>, <item:minecraft:apple>, 200, <blockstate:minecraft:diamond_block>);
```

#### Remove Recipes

Das folgende Skript wird alle Mana-Infusionsrezepte entfernen, die einen Apfel ausgeben

```zenscript
// <recipetype:botania:mana_infusion>.removeRecipe(IItemStack output);

<recipetype:botania:mana_infusion>.removeRecipe(<item:minecraft:apple>);
```
