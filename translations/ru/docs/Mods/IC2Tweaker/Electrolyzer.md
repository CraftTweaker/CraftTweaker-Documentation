# Электролизер

## Пакет

`import mods.ic2.Electrolyzer;`

## Методы

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/)[] выводит** массив всех выводов. Каждый слот соответствует направлению Down-Up-North-Юго-Запад-Восток. Перекрытие нуля может быть опущено.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input
- **внутренняя мощность** Потребление энергии, измеряемое в ЕС/тике
- **@Optional int time** Time cost. По умолчанию до 200, если не указано.

## Сложение

```zenscript
mods.ic2.Electrolyzer.addRecipe(ILiquidStack[] outputs, ILiquidStack input, int power, @Optional int time);

mods.ic2.Electrolyzer.addRecipe([<liquid:lava> * 1000, <liquid:water> * 500, null, null, null, null], <liquid:water> * 1000, 30);
```