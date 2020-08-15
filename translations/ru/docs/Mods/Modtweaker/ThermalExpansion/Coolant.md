# Охлаждающий

Менеджер Coolant не принадлежит какой-либо конкретной машине, а управляет охлаждающими значениями для всех других машин.  
Например, Динамо Энергии использует охлаждающие значения, так же как и Динамо-Динамо-Магматик с предоставлением усиления Иентропического Резервуара.

## Импортировать пакет

Чтобы сократить вызовы методов, вы можете [импортировать](/AdvancedFunctions/Import/) пакет так:

```zenscript
import mods.thermalexpansion.Coolant;
```

## Добавить охладитель

Используйте это для регистрации нового охлаждающего менеджера .  
CoolantRF должен быть неотрицательным, а охлаждающий коэффициент должен быть от 1 до 100 (включительно).  
Если эти диапазоны не будут достигнуты, охладитель не будет зарегистрирован!

```zenscript
//mods.thermalexpansion.Coolant.addCoolant(ILiquidStack fluid, int coolantRf, int coolantFactor);
mods.thermalexpansion.Coolant.addCoolant(<liquid:lava>, 0, 1);


//Это два из значений TE использования по умолчанию:
//моды. hermalexpansion.Coolant.addCoolant(<liquid:water>, 250000, 20);
//mods.thermalexpansion.Coolant.addCoolant(<liquid:cryotheum>, 3000000, 60);
```

## Удалить охладитель

Используйте это для дерегистрации существующего хладагента от менеджера.

```zenscript
//mods.thermalexpansion.Coolant.removeCoolant(ILiquidStack fluid);
mods.thermalexpansion.Coolant.removeCoolant(<liquid:water>);
```