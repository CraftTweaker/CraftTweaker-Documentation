# SelectorContents

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.content.type.SelectorContents;
```


## Implemented Interfaces
SelectorContents implements the following interfaces. That means all methods defined in these interfaces are also available in SelectorContents

- [ComponentContents](/vanilla/api/text/content/ComponentContents)

## Methods

:::group{name=getPattern}

Return Type: string

```zenscript
// SelectorContents.getPattern() as string

mySelectorContents.getPattern();
```

:::

:::group{name=getSeparator}

Return Type: [Component](/vanilla/api/text/Component)?

```zenscript
// SelectorContents.getSeparator() as Component?

mySelectorContents.getSeparator();
```

:::


## Properties

|   Name    |                   Type                    | Has Getter | Has Setter |
|-----------|-------------------------------------------|------------|------------|
| pattern   | string                                    | true       | false      |
| separator | [Component](/vanilla/api/text/Component)? | true       | false      |

