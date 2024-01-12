# NbtContents

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.content.type.NbtContents;
```


## Methods

:::group{name=getNbtPath}

Return Type: string

```zenscript
// NbtContents.getNbtPath() as string

myNbtContents.getNbtPath();
```

:::

:::group{name=getSeparator}

Return Type: [Component](/vanilla/api/text/Component)?

```zenscript
// NbtContents.getSeparator() as Component?

myNbtContents.getSeparator();
```

:::

:::group{name=isInterpreting}

Return Type: boolean

```zenscript
// NbtContents.isInterpreting() as boolean

myNbtContents.isInterpreting();
```

:::


## Properties

|      Name      |                   Type                    | Has Getter | Has Setter |
|----------------|-------------------------------------------|------------|------------|
| isInterpreting | boolean                                   | true       | false      |
| nbtPath        | string                                    | true       | false      |
| separator      | [Component](/vanilla/api/text/Component)? | true       | false      |

