# Расположение MCResource-ресурсов

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.util.MCResourceLocation
```

## Реализованные интерфейсы
MCResourceLocation реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Конструкторы
```zenscript
new crafttweaker.api.util.MCResourceLocation(пространство имён как String, путь как String);
```
| Параметр          | Тип    | Описание             |
| ----------------- | ------ | -------------------- |
| пространство имён | String | Описание отсутствует |
| путь              | String | Описание отсутствует |



## Методы
### сравнить

Тип возврата: int

```zenscript
myMCResourceLocation.compareTo(p_compareTo_1_ как crafttweaker.api.util.MCResourceLocation);
```

| Параметр           | Тип                                                                              | Описание             |
| ------------------ | -------------------------------------------------------------------------------- | -------------------- |
| p_сравнить с _1_ | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Описание отсутствует |


### равно

Тип возврата: логическое значение

```zenscript
myMCResourceLocation.equals(другие как объект);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| другой   | Объект | Описание отсутствует |


### getNamespace

Тип возврата: строка

```zenscript
myMCResourceLocation.getNamespace();
```

### getPath

Тип возврата: строка

```zenscript
myMCResourceLocation.getPath();
```

### hashCode

Тип возврата: int

```zenscript
myMCResourceLocation.hashCode();
```

### toString

Тип возврата: строка

```zenscript
myMCResourceLocation.toString();
```


## Свойства

| Название          | Тип    | Имеет Getter | Имеет Setter |
| ----------------- | ------ | ------------ | ------------ |
| командная строка  | String | true         | false        |
| пространство имён | String | true         | false        |
| путь              | String | true         | false        |

