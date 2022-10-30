# MutableComponent

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.MutableComponent;
```


## Implemented Interfaces
MutableComponent implements the following interfaces. That means all methods defined in these interfaces are also available in MutableComponent

- [Component](/vanilla/api/text/Component)

## Methods

:::group{name=append}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
MutableComponent.append(component as Component) as MutableComponent
```

| Parameter | Type | Description |
|-----------|------|-------------|
| component | [Component](/vanilla/api/text/Component) | No Description Provided |


:::

:::group{name=append}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
MutableComponent.append(content as string) as MutableComponent
```

| Parameter | Type | Description |
|-----------|------|-------------|
| content | string | No Description Provided |


:::

:::group{name=setStyle}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
MutableComponent.setStyle(style as Style) as MutableComponent
```

| Parameter | Type | Description |
|-----------|------|-------------|
| style | [Style](/vanilla/api/text/Style) | No Description Provided |


:::

:::group{name=withStyle}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
MutableComponent.withStyle(formatting as ChatFormatting[]) as MutableComponent
```

| Parameter | Type | Description |
|-----------|------|-------------|
| formatting | [ChatFormatting](/vanilla/api/text/ChatFormatting)[] | No Description Provided |


:::

:::group{name=withStyle}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
MutableComponent.withStyle(style as Style) as MutableComponent
```

| Parameter | Type | Description |
|-----------|------|-------------|
| style | [Style](/vanilla/api/text/Style) | No Description Provided |


:::

:::group{name=withStyle}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
MutableComponent.withStyle(styleOperator as Function<Style,Style>) as MutableComponent
```

| Parameter | Type | Description |
|-----------|------|-------------|
| styleOperator | Function&lt;[Style](/vanilla/api/text/Style),[Style](/vanilla/api/text/Style)&gt; | No Description Provided |


:::


