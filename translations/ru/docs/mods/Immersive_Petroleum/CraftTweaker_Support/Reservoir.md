# Водохранилище

## удалить

| Название    | Тип    |
| ----------- | ------ |
| Имя рецепта | String |

Пример:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.remove(String recipeName);

mods.immersivepetroleum.ReservoirRegistry.remove("водоносный горизонт");
```

## удалить все

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

| Название            | Тип                                         |
| ------------------- | ------------------------------------------- |
| Жидкость            | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |
| Минимальный размер  | int                                         |
| Максимальный размер | int                                         |
| Скорость пополнения | int                                         |
| Вес                 | int                                         |

### Вес

Вес - Вес Веса Шанс на чанк, содержащий конкретный жидкий резервуар. Вес считается как в X в Тотале.

Таким образом, если у вас есть 5 значений резервуара в: 5, 5, 6, 8, 10

Тогда каждая соответствующая запись будет иметь взвешенный шанс:
```
5 в 34
5 в 34
6 в 34
8 в 34
10 в 34
```

Пример:
```zenscript
// new mods.immersivepetroleum.ReservoirBuilder(IFluidStack fluid, int minSize, int maxSize, int traceAmount, int traceType);

new mods.immersivepetroleum.ReservoirBuilder(<fluid:minecraft:lava>, 1000, 5000, 0, 20);
```

## дополнительные размеры

| Название          | Тип            |
| ----------------- | -------------- |
| Черный список     | Boolean        |
| Названия размеров | Список строк[] |

Пример:
```zenscript
// builderInstance.addDimensions(boolean isBlacklist, String[] dimensionNames);

builderInstance.addDimensions(false, ["minecraft:overworld"]);
```

## addBiomes

| Название        | Тип            |
| --------------- | -------------- |
| Черный список   | Boolean        |
| Названия биомов | Список строк[] |

Пример:
```zenscript
// builderInstance.addBiomes(boolean isBlacklist, String[] biomeNames);

builderInstance.addBiomes(false, ["minecraft:plains"]);
```

## сборка

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
