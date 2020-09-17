# Zaklęcie

## Pakiet

`import mods.enderio.Enchanter;`

## Metody

**- [IenchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) wyjście** Zaklęcie wyjściowe.

**- [IIngredient](/Vanilla/Variable_Types/IIngredient/) wprowadź** element, który użył do stworzenia tego zaklęcia.

**- int amountPerLevel** Liczba elementów wejściowych na poziom zaklęcia.

**- podwójny kalkulator** Używany do modyfikowania, jak kosztowny jest przepis.

## Dodanie

```zenscript
mods.enderio.Enchanter.addRecipe(IEnchantmentDefinition output, IIngredient input, int amountPerLevel, double costMultiplier);

mods.enderio.Enchanter.addRecipe(<enchantment:minecraft:sharpness>, <minecraft:prismarine_shard>, 32, 60);
```

## Usuwanie

```zenscript
mods.enderio.Enchanter.removeRecipe(IEnchantmentDefinition output);

mods.enderio.Enchanter.removeRecipe(<enchantment:minecraft:sharpness>);
```