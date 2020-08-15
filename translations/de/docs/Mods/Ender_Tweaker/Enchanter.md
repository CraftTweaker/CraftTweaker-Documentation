# Verzauberer

## Paket

`importieren mods.enderio.Enchanter;`

## Methoden

**- [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) Ausgabe** Die Ausgabe Verzauberung.

**- [IIngredient](/Vanilla/Variable_Types/IIngredient/) Eingabe** Das Element, mit dem diese Verzauberung entstanden ist.

**- int amountPerLevel** Die Anzahl der Eingaben pro Stufe der Verzauberung.

**- doppelter KostenMultiplikator** verwendet, um zu ändern, wie teuer das Rezept ist.

## Addition

```zenscript
mods.enderio.Enchanter.addRecipe(IEnchantmentDefinition output, IIngredient input, int amountPerLevel, double costMultiplier);

mods.enderio.Enchanter.addRecipe(<enchantment:minecraft:sharpness>, <minecraft:prismarine_shard>, 32, 60);
```

## Entfernen

```zenscript
mods.enderio.Enchanter.removeRecipe(IEnchantmentDefinition output);

mods.enderio.Enchanter.removeRecipe(<enchantment:minecraft:sharpness>);
```