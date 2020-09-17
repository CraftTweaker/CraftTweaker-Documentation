# Термоэлектрик
Термоэлектрическая упаковка может быть использована для регистрации или отключения температуры блоков для питания термоэлектрического термоэлектрического генератора. Жидкости, естественно, имеют температуру, поэтому они не регистрируются и не могут быть зарегистрированы. Температуры в Кельвине.

## Вызов пакета
Вы можете вызвать пакет Thermoelectric через `mods.immersiveengineering.Thermoelectric`.

## Добавить источник температуры

| Требуется | Тип             | Тип данных                                          |
| --------- | --------------- | --------------------------------------------------- |
| Требуется | Целевой блок    | [Иингредиент](/Vanilla/Variable_Types/IIngredient/) |
| Требуется | Температура (К) | Целое                                               |

### Пример
```zenscript
//Пример:
mods.immersiveengineering.Thermoelectric.addTemperatureSource(IIngredient source, int temperature);

mods.immersiveengineering.Thermoelectric.addTemperatureSource(<minecraft:obsidian>, 1272);
```


## Удалить источник температуры

| Требуется | Тип          | Тип данных                                          |
| --------- | ------------ | --------------------------------------------------- |
| Требуется | Целевой блок | [Иингредиент](/Vanilla/Variable_Types/IIngredient/) |

### Пример
```zenscript
//Пример:
mods.immersiveengineering.Thermoelectric.removeTemperatureSource(IIngredient source);

mods.immersiveengineering.Thermoelectric.removeTemperatureSource(<minecraft:obsidian>);
```
