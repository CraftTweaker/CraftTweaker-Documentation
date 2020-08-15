# Топливо

Пакет `топлива` позволяет добавлять жидкость к жидкости из плавильного топлива.

## Звонок

Вы можете вызвать пакет Alloy, используя `mods.tconstruct.Fuel`

## Добавить Топливные Рецепты

```zenscript
//mods.tconstruct.Fuel.registerFuel(ILiquidStack топливо, внутренняя продолжительность);
mods.tconstruct.Fuel.registerFuel(<liquid:water> * 2, 300);
```

Параметры:

- [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) топливо → жидкость. Сумма - минимальный прирост за один раз.
- int длительность → Сколько тактов длится потребляемый пион fluidStack.

### Рассмотрите следующее:

- The [ILiquidStack's](/Vanilla/Liquids/ILiquidStack/) amount is the minimal increment that is consumed at once (e.g. the smeltery only consumes 2 mB at once).
- Продолжительность, сколько тиков длится один стек жидкости.
- Вы не можете установить температуру в плавильной плавильне. Используйте [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition/) ZenSetter, чтобы изменить температуру жидкости заранее!