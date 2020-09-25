# Дистиллинг

## удалить

| Название    | Тип    |
| ----------- | ------ |
| Имя рецепта | String |

Пример:
```ZenScript
// mods.immersivepetroleum.DistillationTower.remove(String recipeName);

mods.immersivepetroleum.DistillationTower.remove("oilcracking");
```

## удалить все

| Название | Тип |
| -------- | --- |
|          |     |

Пример:
```ZenScript
mods.immersivepetroleum.DistillationTower.removeAll();
```

# Строитель

## конструктор

| Название | Тип |
| -------- | --- |
|          |     |

Пример:
```zenscript
// new mods.immersivepetroleum.DistillationBuilder();

new mods.immersivepetroleum.DistillationBuilder();
```

## setOutputFluid

| Название       | Тип                                         |
| -------------- | ------------------------------------------- |
| Вывод жидкости | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

Пример:
```zenscript
// builderInstance.setOutputFluids(IFluidStack[] fluidOutputs);

builderInstance.setOutputFluids([<fluid:minecraft:water> * 1]);
```

## addByproduct(IItemStack, Шанс int )

| Название | Тип                                     |
| -------- | --------------------------------------- |
| Пункт 1  | [ItemStack](/Vanilla/Items/IItemStack/) |
| Шанс     | Целое число (0 - 100)                   |

Пример:
```zenscript
// builderInstance.addByproduct(IItemStack item, int chance);

builderInstance.addByproduct(<item:minecraft:cobblestone>, 50);
```

## addByproduct(IItemStack, двойной шанс)

| Название | Тип                                     |
| -------- | --------------------------------------- |
| Пункт 1  | [ItemStack](/Vanilla/Items/IItemStack/) |
| Шанс     | Двойной (0.0 - 1.0)                     |

Пример:
```zenscript
// builderInstance.addByproduct(IItemStack, двойной шанс);

builderInstance.addByproduct(<item:minecraft:stone>, 0.25);
```

## setEnergyAndTime

| Название | Тип               |
| -------- | ----------------- |
| Flux/t   | Целое число (>=1) |
| Тики     | Целое число (>=1) |

Пример:
```zenscript
// builderInstance.setEnergyAndTime(int fluxPerTick, int ticks);

builderInstance.setEnergyAndTime(1024, 1);
```

## setEnergy

| Название   | Тип               |
| ---------- | ----------------- |
| ФлюкПертик | Целое число (>=1) |

Пример:
```zenscript
// builderInstance.setEnergy(int fluxPerTick);

builderInstance.setEnergy(1024);
```

## setTime

| Название | Тип               |
| -------- | ----------------- |
| Тики     | Целое число (>=1) |

Пример:
```zenscript
// builderInstance.setTime(int ticks);

builderInstance.setTime(1);
```

## сборка

| Название    | Тип    |
| ----------- | ------ |
| Имя рецепта | String |

Пример:
```zenscript
// builderInstance.build(String recipeName);

builderInstance.build("example_name");
```

---

Копировать/Вставить примеры:
```zenscript
new DistillationBuilder()
    .setOutputFluids([<fluid:minecraft:water> * 1]) // Array of output fluids
    . etInputFluid(<tag:minecraft:lava>, 500) // Input Fluid Tag и ammount of fluid in mB
    . ddByproduct(<item:minecraft:cobblestone>, 50) // Шанс использовать целое число (0 - 100)
    .addByproduct(<item:minecraft:stone>, 0.25) // Шанс использовать двойной (0. - 1.0)
    .addByproduct(<item:minecraft:obsidian>, 0. 07) // Целое число для удобства, используя двойной даёт больше контроля
    . etEnergyAndTime(1024, 1) // Может быть сделано индивидуально с setEnergy(int) и setTime(int)
    . uild("lava_to_solids");

new DistillationBuilder()
    . etOutFluids([<fluid:minecraft:water> * 500])
    .setInputFluid(<tag:forge:concrete>, 500)
    . ddByproduct(<item:minecraft:gravel>, 0.5)
    .addByproduct(<item:minecraft:sand>, 0.25)
    .addByproduct(<item:minecraft:sand>, 0. 5)
    .addByproduct(<item:minecraft:clay_ball>, 0.125)
    .setEnergy(2048) // 2048 is the Default for Energy.
    .setTime(1) // 1 is the Default for Time.
    build("concrete_reversal");
```
