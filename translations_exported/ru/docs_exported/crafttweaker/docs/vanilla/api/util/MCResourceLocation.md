# Расположение MCResource-ресурсов

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.util.MCResourceLocation
```

## Implemented Interfaces
MCResourceLocation реализует следующие интерфейсы. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructors
```zenscript
new crafttweaker.api.util.MCResourceLocation(пространство имён как String, путь как String);
```
| Параметр          | Тип    | Description          |
| ----------------- | ------ | -------------------- |
| пространство имён | String | Описание отсутствует |
| path              | String | Описание отсутствует |



## Methods
### сравнить

Return type: int

```zenscript
myMCResourceLocation.compareTo(p_compareTo_1_ как crafttweaker.api.util.MCResourceLocation);
```

| Параметр           | Тип                                                                              | Description          |
| ------------------ | -------------------------------------------------------------------------------- | -------------------- |
| p_сравнить с _1_ | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Описание отсутствует |


### equals

Return type: boolean

```zenscript
myMCResourceLocation.equals(другие как объект);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| other    | Object | Описание отсутствует |


### getNamespace

Return type: String

```zenscript
myMCResourceLocation.getNamespace();
```

### getPath

Return type: String

```zenscript
myMCResourceLocation.getPath();
```

### hashCode

Return type: int

```zenscript
myMCResourceLocation.hashCode();
```

### toString

Return type: String

```zenscript
myMCResourceLocation.toString();
```


## Свойства

| Название          | Тип    | Имеет Getter | Имеет Setter |
| ----------------- | ------ | ------------ | ------------ |
| commandString     | String | true         | false        |
| пространство имён | String | true         | false        |
| path              | String | true         | false        |

