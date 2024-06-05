# NeoForgeBracketHandlers

This class contains the "simple" NeoForge Bracket handlers from CraftTweaker.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.bracket.NeoForgeBracketHandlers;
```


## Static Methods

:::group{name=getAttachmentType}

Return Type: [AttachmentType](/neoforge/api/attachment/AttachmentType)

```zenscript
NeoForgeBracketHandlers.getAttachmentType(tokens as string) as AttachmentType
```

| Parameter |  Type  |
|-----------|--------|
| tokens    | string |


:::

:::group{name=getToolType}

Return Type: [ToolAction](/neoforge/api/tool/ToolAction)

```zenscript
NeoForgeBracketHandlers.getToolType(tokens as string) as ToolAction
```

| Parameter |  Type  |
|-----------|--------|
| tokens    | string |


:::

