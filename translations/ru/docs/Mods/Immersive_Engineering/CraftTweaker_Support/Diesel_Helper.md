# Помощник Дизеля

Пакет Diesel Handler может быть использован для изменения IE топлива.

## Вызов пакета

Вы можете вызвать пакет DieselHandler с помощью `mods.immersiveengineering.DieselHandler`.

## Добавить топливо

| Требуется | Тип   | Тип данных                                   |
| --------- | ----- | -------------------------------------------- |
| Требуется | Вывод | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Требуется | Input | Целое                                        |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.DieselHandler.addFuel(ILiquidStack fuel, int time);

mods.immersiveengineering.DieselHandler.addFuel(<liquid:water>, 2000);
```

## Снимите топливо

| Требуется | Тип   | Тип данных                                   |
| --------- | ----- | -------------------------------------------- |
| Требуется | Вывод | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.DieselHandler.removeFuel(ILiquidStack);

mods.immersiveengineering.DieselHandler.removeFuel(<liquid:water>);
```

## Добавить топливо

| Требуется | Тип   | Тип данных                                   |
| --------- | ----- | -------------------------------------------- |
| Требуется | Вывод | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.DieselHandler.addDrillFuel(ILiquidStack);

mods.immersiveengineering.DieselHandler.addDrillFuel(<liquid:water>);
```

## Убрать топливо

| Требуется | Тип   | Тип данных                                   |
| --------- | ----- | -------------------------------------------- |
| Требуется | Вывод | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.DieselHandler.removeDrillFuel(ILiquidStack);

mods.immersiveengineering.DieselHandler.removeDrillFuel(<liquid:water>);
```