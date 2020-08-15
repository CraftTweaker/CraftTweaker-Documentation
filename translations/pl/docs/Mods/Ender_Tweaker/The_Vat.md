# Kadza

## Pakiet

`import mods.enderio.Vat;`

## Metoda

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) wyjście** - Płyn wyjściowy (prawy zbiornik).

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) wejście** - Płyn wejściowy (lewy zbiornik).

**[Składnik](/Vanilla/Variable_Types/IIngredient/)[] slot 1Solids** - Przedmioty, które mogą trafić do gniazda 1.

**float[] slot1Mults** - Mnożniki przedmiotów w slocie 1. Musi być taka sama jak slot1Solids

**[Składnik](/Vanilla/Variable_Types/IIngredient/)[] slot 2Solids** - Przedmioty, które mogą trafić do gniazda 2.

**float[] slot2Mults** - Mnożniki przedmiotów w slocie 2. Musi być taka sama jak slot2Solids.

**@Optional int energyCost** - Ile FE używa receptury. Domyślnie 5000.

## Dodanie

```zenscript
mods.enderio.Vat.addRecipe(ILiquidStack output, ILiquidStack input, IIngredient[] slot1Solids, float[] slot1Mults, IIngredient[] slot2Solids, float[] slot2Mults, @Optional int energyCost);

mods. nderio.Vat.addRecipe(<liquid:lava>, <liquid:water>, [<minecraft:glowstone_dust>], [5], [<minecraft:fire_charge>], [10], 500);
```

## Usuwanie

```zenscript
mods.enderio.Vat.removeRecipe(ILiquidStack);

mods.enderio.Vat.removeRecipe(<liquid:ender_distillation>);
```