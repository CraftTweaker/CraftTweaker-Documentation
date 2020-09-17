# MCBlockState

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.block.MCBlockState
```

## Реализованные интерфейсы
MCBlockState реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Методы
### getAllowValuesForProperty

Список возвратов<String>

```zenscript
myMCBlockState.getAllowedValuesForProperty(название как строка);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| имя      | String | Описание отсутствует |


### getСвойства

Возвращает строку[String]

```zenscript
myMCBlockState.getProperties();
```

### getPropertyNames

Список возвратов<String>

```zenscript
myMCBlockState.getPropertyNames();
```

### getPropertyValue

Возвращает строку

```zenscript
myMCBlockState.getPropertyValue(название как строка);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| имя      | String | Описание отсутствует |


### имеет Инвестиции

Возвращает boolean

```zenscript
myMCBlockState.hasProperty(название как строка);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| имя      | String | Описание отсутствует |


### с свойствами

Возвращает [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlockState.withProperty(название как строка, значение как строка);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| имя      | String | Описание отсутствует |
| value    | String | Описание отсутствует |



## Свойства

| Название         | Тип                                                           | Имеет Getter | Имеет Setter |
| ---------------- | ------------------------------------------------------------- | ------------ | ------------ |
| блок             | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | true         | false        |
| canProvidePower  | boolean                                                       | true         | false        |
| командная строка | String                                                        | true         | false        |
| hasTileEntity    | boolean                                                       | true         | false        |
| isSolid          | boolean                                                       | true         | false        |
| isSticky         | boolean                                                       | true         | false        |
| lightLevel       | int                                                           | true         | false        |
| ТиксСлучайно     | boolean                                                       | true         | false        |

## Утилиты

| Тип результата                                                | Является неявным |
| ------------------------------------------------------------- | ---------------- |
| String                                                        | false            |
| [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | true             |

