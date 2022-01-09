# MCBlockState

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.block.MCBlockState
```

## Implemented Interfaces
MCBlockState implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Методы
### getAllowedValuesForProperty

Returns List<String>

```zenscript
myMCBlockState.getAllowedValuesForProperty(name as String);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| name     | String | Описание отсутствует |


### getProperties

Returns String[String]

```zenscript
myMCBlockState.getProperties();
```

### getPropertyNames

Returns List<String>

```zenscript
myMCBlockState.getPropertyNames();
```

### getPropertyValue

Returns String

```zenscript
myMCBlockState.getPropertyValue(name as String);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| name     | String | Описание отсутствует |


### hasProperty

Возвращает boolean

```zenscript
myMCBlockState.hasProperty(name as String);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| name     | String | Описание отсутствует |


### withProperty

Возвращает [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlockState.withProperty(name as String, value as String);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| name     | String | Описание отсутствует |
| value    | String | Описание отсутствует |



## Свойства

| Название        | Тип                                                           | Имеет Getter | Имеет Setter |
| --------------- | ------------------------------------------------------------- | ------------ | ------------ |
| block           | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | true         | false        |
| canProvidePower | boolean                                                       | true         | false        |
| commandString   | String                                                        | true         | false        |
| hasTileEntity   | boolean                                                       | true         | false        |
| isSolid         | boolean                                                       | true         | false        |
| isSticky        | boolean                                                       | true         | false        |
| lightLevel      | int                                                           | true         | false        |
| ticksRandomly   | boolean                                                       | true         | false        |

## Утилиты

| Тип результата                                                | Является неявным |
| ------------------------------------------------------------- | ---------------- |
| String                                                        | false            |
| [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | true             |

