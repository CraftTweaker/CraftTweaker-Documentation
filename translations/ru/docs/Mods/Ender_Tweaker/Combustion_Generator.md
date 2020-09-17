# Генератор сжигания

## Пакет

`import mods.enderio.CombustionGen;`

## Методы

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) топливо** топливо жидкости для добавления.
- **int powerPerCycleRF** Количество энергии, создаваемой на тик в машине базовой линии.
- **int totalBurnTime** Общее время сжигания одного ведра топлива.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) охлаждающий** Жидкий охладитель для добавления.
- **float degreesCoolingPerMB** Сколько тепла в генераторе может один mB дополнительного охлаждающего поглощения, пока он не нагревает все дороги?

## Добавить топливо

```zenscript
mods.enderio.CombustionGen.addFuel(ILiquidStack топливо, int powerPerCycleRF, int totalBurnTime);

mods.enderio.CombustionGen.addFuel(<liquid:lava>, 25, 40);
```

## Добавить охладитель

```zenscript
mods.enderio.CombustionGen.addCoolant(ILiquidStack жидкость охлаждается, float degreesCoolingPerMB);

mods.enderio.CombustionGen.addCoolant(<liquid:liquid_sunshine>, 100);
```

## Снимите топливо

```zenscript
mods.enderio.CombustionGen.removeFuel(ILiquidStack fuel);

mods.enderio.CombustionGen.removeFuel(<liquid:fire_water>);
```

## Удалить охладитель

```zenscript
mods.enderio.AlloySmelter.removeCoolant(ILiquidStack);

mods.enderio.AlloySmelter.removeCoolant(<liquid:water>);
```