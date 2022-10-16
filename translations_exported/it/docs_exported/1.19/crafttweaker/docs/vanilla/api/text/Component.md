# Component

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.Component;
```


## Interfacce Implementate
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

| Parametro | Tipo   |
| --------- | ------ |
| nome      | string |


:::

:::group{name=literal}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
Component.literal(content as string) as MutableComponent
```

| Parametro | Tipo   |
| --------- | ------ |
| contenuto | string |


:::

:::group{name=nullToEmpty}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
Component.nullToEmpty(content as string?) as Component
```

| Parametro | Tipo    |
| --------- | ------- |
| contenuto | string? |


:::

:::group{name=score}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
Component.score(name as string, objective as string) as MutableComponent
```

| Parametro | Tipo   |
| --------- | ------ |
| nome      | string |
| objective | string |


:::

:::group{name=selector}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
Component.selector(pattern as string, separator as Component?) as MutableComponent
```

| Parametro | Tipo                                      | Optional |
| --------- | ----------------------------------------- | -------- |
| pattern   | string                                    | no       |
| separator | [Component](/vanilla/api/text/Component)? | sì       |


:::

:::group{name=translatable}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
Component.translatable(content as string, args as string[]) as MutableComponent
```

| Parametro | Tipo     |
| --------- | -------- |
| contenuto | string   |
| args      | string[] |


:::

## Metodi

:::group{name=copy}

Return Type: [MutableComponent](/vanilla/api/text/MutableComponent)

```zenscript
// Component.copy() as MutableComponent

myComponent.copy();
```

:::

:::group{name=getContents}

Return Type: [ComponentContents](/vanilla/api/text/content/ComponentContents)

```zenscript
// Component.getContents() as ComponentContents

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

| Parametro | Tipo |
| --------- | ---- |
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


## Proprietà

| Nome     | Tipo                                                                    | Ha Getter | Ha Setter |
| -------- | ----------------------------------------------------------------------- | --------- | --------- |
| contents | [ComponentContents](/vanilla/api/text/content/ComponentContents)        | sì        | no        |
| siblings | stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt; | sì        | no        |
| stile    | [Style](/vanilla/api/text/Style)                                        | sì        | no        |

