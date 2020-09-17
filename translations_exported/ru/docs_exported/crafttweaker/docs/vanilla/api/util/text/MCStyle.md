# MCСтиль

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.util.text.MCStyle
```

## Конструкторы
```zenscript
новый crafttweaker.api.util.text.MCStyle();
```

## Методы
### равно

Тип возврата: логическое значение

```zenscript
myMCStyle.equals(другие как объект);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| другой   | Объект | Описание отсутствует |


### getBold

Тип возврата: логическое значение

```zenscript
myMCStyle.getBold();
```

### getFontId

Тип возврата: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
myMCStyle.getFontId();
```

### Вставка

Тип возврата: строка

```zenscript
myMCStyle.getInsertion();
```

### getItalic

Тип возврата: логическое значение

```zenscript
myMCStyle.getItalic();
```

### getObfuscated

Тип возврата: логическое значение

```zenscript
myMCStyle.getObfuscated();
```

### getStrikethrough

Тип возврата: логическое значение

```zenscript
myMCStyle.getStrikethrough();
```

### Подчеркнуто

Тип возврата: логическое значение

```zenscript
myMCStyle.getUnderlined();
```

### hashCode

Тип возврата: int

```zenscript
myMCStyle.hashCode();
```

### isEmpty

Будь то этот стиль пуст (наследует все от родителя).

Тип возврата: логическое значение

```zenscript
myMCStyle.isEmpty();
```

### объединение Стиля

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.mergeStyle(style as crafttweaker.api.util.text.MCStyle);
```

| Параметр | Тип                                                                  | Описание             |
| -------- | -------------------------------------------------------------------- | -------------------- |
| стиль    | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | Описание отсутствует |


### Установлен Жирным

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setBold(boldIn как Boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| boldIn   | Boolean | Описание отсутствует |


### задающий цвет

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(форматирование как crafttweaker.api.text.TextFormatting);
```

| Параметр       | Тип                                                                           | Описание             |
| -------------- | ----------------------------------------------------------------------------- | -------------------- |
| форматирование | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | Описание отсутствует |



Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(цвет как int);
```

| Параметр | Тип | Описание             |
| -------- | --- | -------------------- |
| цвет     | int | Описание отсутствует |


### setFontId

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFontId(расположение как crafttweaker.api.util.MCResourceLocation);
```

| Параметр       | Тип                                                                              | Описание             |
| -------------- | -------------------------------------------------------------------------------- | -------------------- |
| местоположение | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Описание отсутствует |


### установленное форматирование

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFormatting(форматирование как crafttweaker.api.text.TextFormatting);
```

| Параметр       | Тип                                                                           | Описание             |
| -------------- | ----------------------------------------------------------------------------- | -------------------- |
| форматирование | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | Описание отсутствует |


### вставка

Задать текст, который будет вставлен в чат, когда щёлкнут по компоненту

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setInsertion(вставка как строка);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| вставка  | String | Описание отсутствует |


### setItalic

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setItalic(курсив как Boolean);
```

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| italic   | Boolean | Описание отсутствует |


### setObfuscated

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setObfuscated(обфусцирован как Boolean);
```

| Параметр   | Тип     | Описание             |
| ---------- | ------- | -------------------- |
| obfuscated | Boolean | Описание отсутствует |


### setStrikethrough

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setStrikethrough(забастовка как Boolean);
```

| Параметр      | Тип     | Описание             |
| ------------- | ------- | -------------------- |
| strikethrough | Boolean | Описание отсутствует |


### подчёркнуто

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(подчеркивается как Boolean);
```

| Параметр    | Тип     | Описание             |
| ----------- | ------- | -------------------- |
| подчеркнуто | Boolean | Описание отсутствует |



Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(подчеркивается как boolean);
```

| Параметр    | Тип     | Описание             |
| ----------- | ------- | -------------------- |
| подчеркнуто | boolean | Описание отсутствует |


### toString

Тип возврата: строка

```zenscript
myMCStyle.toString();
```


