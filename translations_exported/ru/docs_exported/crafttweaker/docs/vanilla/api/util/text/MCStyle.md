# MCСтиль

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.util.text.MCStyle
```

## Constructors
```zenscript
новый crafttweaker.api.util.text.MCStyle();
```

## Methods
### equals

Return type: boolean

```zenscript
myMCStyle.equals(другие как объект);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| other    | Object | Описание отсутствует |


### getBold

Return type: boolean

```zenscript
myMCStyle.getBold();
```

### getFontId

Тип возврата: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
myMCStyle.getFontId();
```

### Вставка

Return type: String

```zenscript
myMCStyle.getInsertion();
```

### getItalic

Return type: boolean

```zenscript
myMCStyle.getItalic();
```

### getObfuscated

Return type: boolean

```zenscript
myMCStyle.getObfuscated();
```

### getStrikethrough

Return type: boolean

```zenscript
myMCStyle.getStrikethrough();
```

### Подчеркнуто

Return type: boolean

```zenscript
myMCStyle.getUnderlined();
```

### hashCode

Return type: int

```zenscript
myMCStyle.hashCode();
```

### isEmpty

Будь то этот стиль пуст (наследует все от родителя).

Return type: boolean

```zenscript
myMCStyle.isEmpty();
```

### объединение Стиля

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.mergeStyle(style as crafttweaker.api.util.text.MCStyle);
```

| Параметр | Тип                                                                  | Description          |
| -------- | -------------------------------------------------------------------- | -------------------- |
| стиль    | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | Описание отсутствует |


### Установлен Жирным

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setBold(boldIn как Boolean);
```

| Параметр | Тип     | Description          |
| -------- | ------- | -------------------- |
| boldIn   | Boolean | Описание отсутствует |


### задающий цвет

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(форматирование как crafttweaker.api.text.TextFormatting);
```

| Параметр       | Тип                                                                           | Description          |
| -------------- | ----------------------------------------------------------------------------- | -------------------- |
| форматирование | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | Описание отсутствует |



Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(цвет как int);
```

| Параметр | Тип | Description          |
| -------- | --- | -------------------- |
| цвет     | int | Описание отсутствует |


### setFontId

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFontId(расположение как crafttweaker.api.util.MCResourceLocation);
```

| Параметр       | Тип                                                                              | Description          |
| -------------- | -------------------------------------------------------------------------------- | -------------------- |
| местоположение | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Описание отсутствует |


### установленное форматирование

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFormatting(форматирование как crafttweaker.api.text.TextFormatting);
```

| Параметр       | Тип                                                                           | Description          |
| -------------- | ----------------------------------------------------------------------------- | -------------------- |
| форматирование | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | Описание отсутствует |


### вставка

Задать текст, который будет вставлен в чат, когда щёлкнут по компоненту

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setInsertion(вставка как строка);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| вставка  | String | Описание отсутствует |


### setItalic

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setItalic(курсив как Boolean);
```

| Параметр | Тип     | Description          |
| -------- | ------- | -------------------- |
| italic   | Boolean | Описание отсутствует |


### setObfuscated

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setObfuscated(обфусцирован как Boolean);
```

| Параметр   | Тип     | Description          |
| ---------- | ------- | -------------------- |
| obfuscated | Boolean | Описание отсутствует |


### setStrikethrough

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setStrikethrough(забастовка как Boolean);
```

| Параметр      | Тип     | Description          |
| ------------- | ------- | -------------------- |
| strikethrough | Boolean | Описание отсутствует |


### подчёркнуто

Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(подчеркивается как Boolean);
```

| Параметр    | Тип     | Description          |
| ----------- | ------- | -------------------- |
| подчеркнуто | Boolean | Описание отсутствует |



Тип возврата: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(подчеркивается как boolean);
```

| Параметр    | Тип     | Description          |
| ----------- | ------- | -------------------- |
| подчеркнуто | boolean | Описание отсутствует |


### toString

Return type: String

```zenscript
myMCStyle.toString();
```


