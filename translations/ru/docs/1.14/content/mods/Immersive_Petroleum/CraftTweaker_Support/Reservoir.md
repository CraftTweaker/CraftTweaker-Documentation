# Reservoir

## remove

| Название    | Тип    |
| ----------- | ------ |
| Имя рецепта | String |

Пример:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.remove(String recipeName);

mods.immersivepetroleum.ReservoirRegistry.remove("водоносный горизонт");
```

## removeAll

| Название | Тип |
| -------- | --- |
|          |     |

Пример:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.removeAll();

mods.immersivepetroleum.ReservoirRegistry.removeAll();
```

# Строитель резервуаров

## конструктор

| Название       | Тип        |
| -------------- | ---------- |
| Fluid          | Fluidstack |
| Minimum Size   | int        |
| Maximum Size   | int        |
| Replenish Rate | int        |
| Weight         | int        |

### Weight

Weight is the Weighted Chance of a chunk containing that specific fluid reservoir. The weight is counted as in X in Total.

So if you have 5 Reservoir values at: 5, 5, 6, 8, 10

Then each respective entry will have a weighted chance of:
```
5  in 34
5  in 34
6  in 34
8  in 34
10 in 34
```

Пример:
```zenscript
// new mods.immersivepetroleum.ReservoirBuilder(IFluidStack fluid, int minSize, int maxSize, int traceAmount, int traceType);

new mods.immersivepetroleum.ReservoirBuilder(<fluid:minecraft:lava>, 1000, 5000, 0, 20);
```

## дополнительные размеры

| Название          | Тип            |
| ----------------- | -------------- |
| Blacklist         | Boolean        |
| Названия размеров | Список строк[] |

Пример:
```zenscript
// builderInstance.addDimensions(boolean isBlacklist, String[] dimensionNames);

builderInstance.addDimensions(false, ["minecraft:overworld"]);
```

## addBiomes

| Название        | Тип            |
| --------------- | -------------- |
| Blacklist       | Boolean        |
| Названия биомов | Список строк[] |

Пример:
```zenscript
// builderInstance.addBiomes(boolean isBlacklist, String[] biomeNames);

builderInstance.addBiomes(false, ["minecraft:plains"]);
```

## build

| Название | Тип    |
| -------- | ------ |
| Название | String |

### Предисловие
Базовые резервуары являются строчными, так как переводятся - собственные, должны быть правильно заглавными (напр. "Глубоководный запас").

Пример:
```zenscript
// builderInstance.build(String name);

builderInstance.build("Пример Имя");
```

---

Копировать/Вставить пример:
```ZenScript
new ReservoirBuilder(<fluid:minecraft:lava>, 25000, 100000, 0, 20)
    .addDimensions(false, ["overworld"])
    .addBiomes(false, ["minecraft:desert"])
    .build("Пустынная лава");
```
