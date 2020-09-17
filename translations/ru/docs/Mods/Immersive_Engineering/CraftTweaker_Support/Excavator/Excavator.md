# Экскаватор

## Вызов пакета

Вы можете вызвать пакет экскаватора, используя `mods.immersiveengineering.Excavator`.

## Добавить минерал

| Требуется | Тип                   | Тип данных |
| --------- | --------------------- | ---------- |
| Требуется | Название              | string     |
| Требуется | Минеральный вес       | int        |
| Требуется | Неудачный шанс        | double     |
| Требуется | Ores                  | строка[]   |
| Требуется | Шансы                 | удвоить[]  |
| Optional  | Белый список размеров | int []     |
| Optional  | Черный список         | boolean    |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.Excavator.addMineral(String name, int mineralWeight, double failChance, String[] ores, double[] chances, @Optional int[] dimensionWhitelist, @Optional boolean blacklist);

mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0. 05, ["Защита", "Рудные алмазы"], [0.005, 0.01]);
mods.immersiveengineering.Excavator.addMineral("Железная руда", 50, 0.005, ["Железное", "Рудая"], [0.005, 0. 1], [1, 0, -1]);
mods.immersiveengineering.Excavator.addMineral("Железный Ore", 50, 0.005, ["Рудный", "Рудный"], [0.005, 0.01], [1, 0, -1], true);
```

## Удалить минерал

| Требуется | Тип      | Тип данных |
| --------- | -------- | ---------- |
| Требуется | Название | String     |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.Excavator.removeMineral(String name);

mods.immersiveengineering.Excavator.removeMineral("Iron Ore");
```