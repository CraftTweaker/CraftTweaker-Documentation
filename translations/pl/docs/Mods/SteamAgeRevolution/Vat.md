# Vat

Vat to maszyna, która przekształca wejścia i płyny na płyn wyjściowy.

## Pakiet
`Mods.steamagerevolution.Vat`

## Metody

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) wyjście** wynik przepisu.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) wejście** Płynne wejście przepisu.
- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wejścia** Przedmioty do wprowadzenia receptury.
- **int craftTime** Czas tworzenia maszyny do przetworzenia

## Dodawanie

```zenscript
mods.steamagerevolution.Vat.addRecipe(ILiquidStack[] wejścia, IIngredient[] wejściItems, ILiquidStack output, int craftTime);
mods.steamagerevolution.Vat.addRecipe([<liquid:tin>*144, <liquid:copper>*144], [<ore:coal>, <ore:cobblestone>], <liquid:steel>*288, 200, 200);
```

## Usuwanie

```zenscript
mods.steamagerevolution.Vat.removeRecipe(ILiquidStack);
mods.steamagerevolution.Vat.removeRecipe(<liquid:lava>);

mods.steamagerevolution.Vat.removeAll();
```
