# MCBiome

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.world.MCBiome
```

## Методы
### Геотерапия

Тип возврата: число с плавающей точкой

```zenscript
myMCBiome.getTemperature(pos as crafttweaker.api.util.BlockPos);
```

| Параметр | Тип                                                          | Описание             |
| -------- | ------------------------------------------------------------ | -------------------- |
| пос      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Описание отсутствует |



## Свойства

| Название          | Тип     | Имеет Getter | Имеет Setter |
| ----------------- | ------- | ------------ | ------------ |
| категория         | String  | true         | false        |
| глубина           | float   | true         | false        |
| не Дождь          | boolean | true         | false        |
| не снег           | boolean | true         | false        |
| понижение         | float   | true         | false        |
| Высокая влажность | boolean | true         | false        |
| тип дождя         | String  | true         | false        |
| шкала             | float   | true         | false        |
| водяной цвет      | int     | true         | false        |
| водяный цвет      | int     | true         | false        |

