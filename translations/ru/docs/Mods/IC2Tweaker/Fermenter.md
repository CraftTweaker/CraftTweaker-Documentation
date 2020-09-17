# Ферментер

## Пакет

`import mods.ic2.Fermenter;`

## Методы

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) выход** ферментированная жидкость
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input fluid
- **int heat** количество тепла, требуемое для ферментации

## Сложение

```zenscript
mods.ic2.Fermenter.addRecipe(ILiquidStack), вход ILiquidStack, int heat);

mods.ic2.Fermenter.addRecipe(<liquid:lava> * 1000, <liquid:water> * 2000, 23333);
```