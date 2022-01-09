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

## Methods

:::group{name=copy}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
// Component.copy() as MutableComponent

myComponent.copy();
```

:::

:::group{name=getContents}

Return Type: string

```zenscript
// Component.getContents() as string

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

| Parameter | Type | Description |
|-----------|------|-------------|
| maxLength | int | No Description Provided |


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

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| contents | string | true | false | No Description Provided |
| siblings | stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt; | true | false | No Description Provided |
| style | [Style](/vanilla/api/text/Style) | true | false | No Description Provided |

