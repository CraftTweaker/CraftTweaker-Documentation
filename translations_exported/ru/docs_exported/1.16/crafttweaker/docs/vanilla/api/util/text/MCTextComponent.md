# Компонент MCTextcomponent



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.text.MCTextComponent;
```


## Static Methods

:::group{name=createStringTextComponent}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.createStringTextComponent(text as string) as MCTextComponent
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| текст    | string | No Description Provided |


:::

:::group{name=createTranslationTextComponent}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.createTranslationTextComponent(translationKey as string) as MCTextComponent
```

| Параметр       | Тип    | Описание                |
| -------------- | ------ | ----------------------- |
| translationKey | string | No Description Provided |


:::

:::group{name=createTranslationTextComponent}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.createTranslationTextComponent(translationKey as string, args as Object[]) as MCTextComponent
```

| Параметр       | Тип      | Описание                |
| -------------- | -------- | ----------------------- |
| translationKey | string   | No Description Provided |
| args           | Object[] | No Description Provided |


:::

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| string         | false            |

## Методы

:::group{name=appendSibling}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.appendSibling(component as MCTextComponent) as MCTextComponent
```

| Параметр  | Тип                                                                 | Описание                |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| component | [Компонент MCTextcomponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


:::

:::group{name=appendText}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.appendText(text as string) as MCTextComponent
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| текст    | string | No Description Provided |


:::

:::group{name=copyRaw}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
// MCTextComponent.copyRaw() as MCTextComponent

MCTextComponent.createStringTextComponent("Hello World!").copyRaw();
```

:::

:::group{name=deepCopy}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
// MCTextComponent.deepCopy() as MCTextComponent

MCTextComponent.createStringTextComponent("Hello World!").deepCopy();
```

:::

:::group{name=getString}

Return Type: string

```zenscript
// MCTextComponent.getString() as string

MCTextComponent.createStringTextComponent("Hello World!").getString();
```

:::

:::group{name=getStringTruncated}

Return Type: string

```zenscript
MCTextComponent.getStringTruncated(maxLen as int) as string
```

| Параметр | Тип | Описание                |
| -------- | --- | ----------------------- |
| maxLen   | int | No Description Provided |


:::

:::group{name=getStyle}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
// MCTextComponent.getStyle() as MCStyle

MCTextComponent.createStringTextComponent("Hello World!").getStyle();
```

:::

:::group{name=getTranslationKey}

If this is a Translation Text Component, return the actual translation key used for localization. If this is not a Translation Text Component, returns an empty string.

Returns: the translation key or an empty string.  
Return Type: string

```zenscript
// MCTextComponent.getTranslationKey() as string

MCTextComponent.createStringTextComponent("Hello World!").getTranslationKey();
```

:::

:::group{name=getUnformattedComponentText}

Return Type: string

```zenscript
// MCTextComponent.getUnformattedComponentText() as string

MCTextComponent.createStringTextComponent("Hello World!").getUnformattedComponentText();
```

:::

:::group{name=setStyle}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.setStyle(style as MCStyle) as MCTextComponent
```

| Параметр | Тип                                       | Описание                |
| -------- | ----------------------------------------- | ----------------------- |
| стиль    | [MCСтиль](/vanilla/api/util/text/MCStyle) | No Description Provided |


:::


## Операторы

:::group{name=ADD}

```zenscript
myMCTextComponent + component as MCTextComponent
```

:::

:::group{name=CAT}

```zenscript
myMCTextComponent ~ component as MCTextComponent
```

:::

:::group{name=SHL}

```zenscript
myMCTextComponent << component as MCTextComponent
```

:::


## Свойства

| Название                 | Тип                                                                                      | Имеет Getter | Имеет Setter | Описание                                                                                                                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------- | ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formattedText            | string                                                                                   | true         | false        | No Description Provided                                                                                                                                                               |
| siblings                 | stdlib.List&lt;[MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | true         | false        | No Description Provided                                                                                                                                                               |
| стиль                    | [MCСтиль](/vanilla/api/util/text/MCStyle)                                                | true         | false        | No Description Provided                                                                                                                                                               |
| translationKey           | string                                                                                   | true         | false        | If this is a Translation Text Component, return the actual translation key used for localization. <br />  If this is not a Translation Text Component, returns an empty string. |
| unformattedComponentText | string                                                                                   | true         | false        | No Description Provided                                                                                                                                                               |

