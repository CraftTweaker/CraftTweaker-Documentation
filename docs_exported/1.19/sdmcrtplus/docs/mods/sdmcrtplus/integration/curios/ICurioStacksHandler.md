# ICurioStacksHandler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.curios.ICurioStacksHandler;
```


## Methods

:::group{name=getCachedModifiers}

Return Type: Set&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt;

```zenscript
// ICurioStacksHandler.getCachedModifiers() as Set<AttributeModifier>

myICurioStacksHandler.getCachedModifiers();
```

:::

:::group{name=getCosmeticStacks}

Return Type: [IDynamicStackHandler](/mods/sdmcrtplus/integration/curios/IDynamicStackHandler)

```zenscript
// ICurioStacksHandler.getCosmeticStacks() as IDynamicStackHandler

myICurioStacksHandler.getCosmeticStacks();
```

:::

:::group{name=getIdentifier}

Return Type: string

```zenscript
// ICurioStacksHandler.getIdentifier() as string

myICurioStacksHandler.getIdentifier();
```

:::

:::group{name=getPermanentModifiers}

Return Type: Set&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt;

```zenscript
// ICurioStacksHandler.getPermanentModifiers() as Set<AttributeModifier>

myICurioStacksHandler.getPermanentModifiers();
```

:::

:::group{name=getSlots}

Return Type: int

```zenscript
// ICurioStacksHandler.getSlots() as int

myICurioStacksHandler.getSlots();
```

:::

:::group{name=getStacks}

Return Type: [IDynamicStackHandler](/mods/sdmcrtplus/integration/curios/IDynamicStackHandler)

```zenscript
// ICurioStacksHandler.getStacks() as IDynamicStackHandler

myICurioStacksHandler.getStacks();
```

:::

:::group{name=isVisible}

Return Type: boolean

```zenscript
// ICurioStacksHandler.isVisible() as boolean

myICurioStacksHandler.isVisible();
```

:::


## Properties

|        Name        |                                       Type                                       | Has Getter | Has Setter |
|--------------------|----------------------------------------------------------------------------------|------------|------------|
| cachedModifiers    | Set&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt;  | true       | false      |
| cosmeticStacks     | [IDynamicStackHandler](/mods/sdmcrtplus/integration/curios/IDynamicStackHandler) | true       | false      |
| identifier         | string                                                                           | true       | false      |
| isVisible          | boolean                                                                          | true       | false      |
| permanentModifiers | Set&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt;  | true       | false      |
| slots              | int                                                                              | true       | false      |
| stacks             | [IDynamicStackHandler](/mods/sdmcrtplus/integration/curios/IDynamicStackHandler) | true       | false      |

