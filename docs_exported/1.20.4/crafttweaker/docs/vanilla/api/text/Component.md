# Component

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.Component;
```


## Implemented Interfaces
Component implements the following interfaces. That means all methods defined in these interfaces are also available in Component

- [Message](/vanilla/api/text/Message)
- [FormattedText](/vanilla/api/text/FormattedText)

## Static Methods

:::group{name=empty}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
// Component.empty() as MutableComponent

Component.empty();
```

:::

:::group{name=keybind}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
Component.keybind(name as string) as MutableComponent
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=literal}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
Component.literal(content as string) as MutableComponent
```

| Parameter |  Type  |
|-----------|--------|
| content   | string |


:::

:::group{name=nullToEmpty}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
Component.nullToEmpty(content as string?) as Component
```

| Parameter |  Type   |
|-----------|---------|
| content   | string? |


:::

:::group{name=score}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
Component.score(name as string, objective as string) as MutableComponent
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |
| objective | string |


:::

:::group{name=selector}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
Component.selector(pattern as string, separator as Component?) as MutableComponent
```

| Parameter |                   Type                    | Optional |
|-----------|-------------------------------------------|----------|
| pattern   | string                                    | false    |
| separator | [Component](/vanilla/api/text/Component)? | true     |


:::

:::group{name=translatable}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
Component.translatable(content as string, args as Component[]) as MutableComponent
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| content   | string                                     |
| args      | [Component](/vanilla/api/text/Component)[] |


:::

:::group{name=translatable}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
Component.translatable(content as string, args as string[]) as MutableComponent
```

| Parameter |   Type   |
|-----------|----------|
| content   | string   |
| args      | string[] |


:::

## Methods

:::group{name=copy}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
// Component.copy() as MutableComponent

myComponent.copy();
```

:::

:::group{name=getContents}

Return Type: **invalid**

```zenscript
// Component.getContents() as invalid

myComponent.getContents();
```

:::

:::group{name=getSiblings}

Return Type: stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt;

```zenscript
// Component.getSiblings() as stdlib.List<Component>

myComponent.getSiblings();
```

:::

:::group{name=getString}

Return Type: string

```zenscript
Component.getString(maxLength as int) as string
```

| Parameter | Type |
|-----------|------|
| maxLength | int  |


:::

:::group{name=getStyle}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
// Component.getStyle() as Style

myComponent.getStyle();
```

:::

:::group{name=plainCopy}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
// Component.plainCopy() as MutableComponent

myComponent.plainCopy();
```

:::


## Properties

|   Name   |                            Type                             | Has Getter | Has Setter |
|----------|-------------------------------------------------------------|------------|------------|
| contents | **invalid**                                                 | true       | false      |
| siblings | stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt; | true       | false      |
| style    | [Style](/vanilla/api/text/Style)                            | true       | false      |

