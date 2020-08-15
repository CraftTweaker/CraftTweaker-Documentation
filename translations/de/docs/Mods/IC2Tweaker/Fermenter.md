# Fermenter

## Paket

`importieren mods.ic2.Fermenter;`

## Methoden

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Ausgabe** Die fermentierte Flüssigkeit
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input fluid
- **Int Hitze** Die für die Gärung benötigte Wärme

## Addition

```zenscript
mods.ic2.Fermenter.addRecipe(ILiquidStack-Ausgabe, ILiquidStack-Eingabe, Int Wärme);

mods.ic2.Fermenter.addRecipe(<liquid:lava> * 1000, <liquid:water> * 2000, 23333);
```