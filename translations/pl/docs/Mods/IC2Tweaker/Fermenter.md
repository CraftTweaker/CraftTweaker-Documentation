# Fermentator

## Pakiet

`importuje mods.ic2.Fermenter;`

## Metody

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) wyjście** fermentowany płyn
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input fluid
- **int heat** Ilość ciepła wymagana do fermentacji

## Dodanie

```zenscript
mods.ic2.Fermenter.addRecipe(ILiquidStack output, ILiquidStack, ciepło int);

mods.ic2.Fermenter.addRecipe(<liquid:lava> * 1000, <liquid:water> * 2000, 23333);
```