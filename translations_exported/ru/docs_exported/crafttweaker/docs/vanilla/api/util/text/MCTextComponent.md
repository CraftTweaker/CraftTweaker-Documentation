# Компонент MCTextcomponent

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.util.text.MCTextComponent
```

## Methods
### добавление

Тип возврата: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendSibling(компонент как crafttweaker.api.util.text.MCTextComponent);
```

| Параметр  | Тип                                                                                  | Description          |
| --------- | ------------------------------------------------------------------------------------ | -------------------- |
| компонент | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Описание отсутствует |


### appendText

Тип возврата: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendText(текст в виде строки);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| текст    | String | Описание отсутствует |


### copyRaw

Тип возврата: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.copyRaw();
```

### глубокое копирование

Тип возврата: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.deepCopy();
```

### getString

Return type: String

```zenscript
myMCTextComponent.getString();
```

### getStringTruncated

Return type: String

```zenscript
myMCTextComponent.getStringTruncated(maxLen как int);
```

| Параметр | Тип | Description          |
| -------- | --- | -------------------- |
| maxLen   | int | Описание отсутствует |


### getUnformattedComponentText

Return type: String

```zenscript
myMCTextComponent.getUnformattedComponentText();
```

### setStyle

Тип возврата: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.setStyle(style as crafttweaker.api.util.text.MCStyle);
```

| Параметр | Тип                                                                  | Description          |
| -------- | -------------------------------------------------------------------- | -------------------- |
| стиль    | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | Описание отсутствует |



## Свойства

| Название                 | Тип                                                                                                            | Имеет Getter | Имеет Setter |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| форматированный текст    | String                                                                                                         | true         | false        |
| братья                   | Список&lt;[crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | true         | false        |
| unformattedComponentText | String                                                                                                         | true         | false        |

## Операторы
### ADD

```zenscript
myMCTextComponent + компонент как crafttweaker.api.util.text.MCTextComponent
```

| Параметр  | Тип                                                                                  | Description          |
| --------- | ------------------------------------------------------------------------------------ | -------------------- |
| компонент | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Описание отсутствует |
### CAT

```zenscript
myMCTextComponent ~ компонент как crafttweaker.api.util.text.MCTextComponent
```

| Параметр  | Тип                                                                                  | Description          |
| --------- | ------------------------------------------------------------------------------------ | -------------------- |
| компонент | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Описание отсутствует |
### ШЛ

```zenscript
myMCTextComponent << компонент как crafttweaker.api.util.text.MCTextComponent
```

| Параметр  | Тип                                                                                  | Description          |
| --------- | ------------------------------------------------------------------------------------ | -------------------- |
| компонент | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | false            |

