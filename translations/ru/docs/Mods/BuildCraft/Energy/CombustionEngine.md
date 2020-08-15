# Двигатель сгорания

*Требуется Энергия BuildCraft*

Путь к классу: `mods.buildcraft.CombustionEngine`

## Использовано

Чтобы использовать, импортируйте класс с `импортируйте mods.buildcraft.CombustionEngine;` в начале вашего скрипта.

## Добавление чистого топлива

`CombustionEngine.addCleanFuel(жидкость, powerPerTick, timePerBucket);`

- `жидкость` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)> жидкость для использования в качестве топлива
- `powerPerTick` &lt;двойной> Вывод энергии в MJ на такт
- `timePerBucket` &lt;int> Количество тиков, которое 1000 mB (1 bucket) должно быть запущено для

```zenscript
import mods.buildcraft.CombustionEngine;

CombustionEngine.addCleanFuel(<liquid:iron>, 32.0, 1200);
```

## Добавление Грязного топлива

`CombustionEngine.addDirtyFuel(lFuel, powerPerTick, timePerBucket, lResidue);`

- `lFuel` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)> жидкость, используемая в качестве топлива
- `powerPerTick` &lt;двойной> Вывод энергии в MJ на такт
- `timePerBucket` &lt;int> Количество тиков, которое 1000 mB (1 bucket) должно быть запущено для
- `lОстаток` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)> Остаточная жидкость, на единицу топлива

```zenscript
import mods.buildcraft.CombustionEngine;

CombustionEngine.addDirtyFuel(<liquid:iron>, 32.0, 1200, <liquid:water>);
```
