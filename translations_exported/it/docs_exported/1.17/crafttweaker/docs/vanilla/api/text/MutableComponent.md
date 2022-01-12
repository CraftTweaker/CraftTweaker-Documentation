# MutableComponent

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.MutableComponent;
```


## Interfacce Implementate
MutableComponent implements the following interfaces. That means all methods defined in these interfaces are also available in MutableComponent

- [Component](/vanilla/api/text/Component)

## Metodi

:::group{name=append}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
MutableComponent.append(component as Component) as MutableComponent
```

| Parametro | Tipo                                     | Descrizione             |
| --------- | ---------------------------------------- | ----------------------- |
| component | [Component](/vanilla/api/text/Component) | No Description Provided |


:::

:::group{name=append}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
MutableComponent.append(content as string) as MutableComponent
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| contenuto | string | No Description Provided |


:::

:::group{name=setStyle}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
MutableComponent.setStyle(style as Style) as MutableComponent
```

| Parametro | Tipo                             | Descrizione             |
| --------- | -------------------------------- | ----------------------- |
| stile     | [Style](/vanilla/api/text/Style) | No Description Provided |


:::

:::group{name=withStyle}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
MutableComponent.withStyle(formatting as ChatFormatting[]) as MutableComponent
```

| Parametro     | Tipo                                                 | Descrizione             |
| ------------- | ---------------------------------------------------- | ----------------------- |
| formattazione | [ChatFormatting](/vanilla/api/text/ChatFormatting)[] | No Description Provided |


:::

:::group{name=withStyle}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
MutableComponent.withStyle(style as Style) as MutableComponent
```

| Parametro | Tipo                             | Descrizione             |
| --------- | -------------------------------- | ----------------------- |
| stile     | [Style](/vanilla/api/text/Style) | No Description Provided |


:::

:::group{name=withStyle}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
MutableComponent.withStyle(styleOperator as Function<Style,Style>) as MutableComponent
```

| Parametro     | Tipo                                                                                          | Descrizione             |
| ------------- | --------------------------------------------------------------------------------------------- | ----------------------- |
| styleOperator | Function&lt;[Style](/vanilla/api/text/Style),[Style](/vanilla/api/text/Style)&gt; | No Description Provided |


:::


