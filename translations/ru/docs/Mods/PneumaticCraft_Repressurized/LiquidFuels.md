# Жидкое топливо

Жидкое топливо используется в PneumaticCraft: Repressure in (Advanced) Liquid Compressor для создания сжатого воздуха и (необязательно) в Лампе Керосина для производства света. По умолчанию жидкости, производимые в переработке, определяются как топливо, а также жидкость выше температуры 305 градусов Кельвина.

## Звонок

Вы можете вызвать пакет жидкого топлива, используя `mods.pneumaticcraft.liquidfuel`.

## Удаление

Эта функция дерегистрирует [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `жидкости` в качестве топлива:

```zenscript
mods.pneumaticcraft.liquidfuel.removeFuel(ILiquidStack fluid);
// Пример
mods.pneumaticcraft.liquidfuel.removeFuel(<liquid:lpg>);
```

Эта функция дерегистрирует *все* зарегистрированное топливо:

```zenscript
mods.pneumaticcraft.liquidfuel.removeAllFuels();
```

## Добавление

Для добавления жидкости в реестр топлива могут использоваться следующие функции:

```zenscript
// Регистрируем определенную жидкость как топливо. mlPerBucket определяет количество сжатого воздуха, произведенного на единицу топлива. Для справки 16000mL воздуха изготавливается из кусочка угля в воздушном компрессоре.
mods.pneumaticcraft.liquidfuel.addFuel(ILiquidStack жидкость, двойной mlPerBucket);

// Пример: зарегистрировать воду как топливо, которое производит 16000мл воздуха на корзине.
mods.pneumaticcraft.liquidfuel.addFuel(<liquid:water>, 16000);
```