# SlotContext

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.curios.SlotContext;
```


## Extending Record

SlotContext extends Record. That means all methods available in Record are also available in SlotContext

## Methods

:::group{name=getEntity}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// SlotContext.getEntity() as LivingEntity

mySlotContext.getEntity();
```

:::

:::group{name=getIdentifier}

Return Type: string

```zenscript
// SlotContext.getIdentifier() as string

mySlotContext.getIdentifier();
```

:::

:::group{name=getIndex}

Return Type: int

```zenscript
// SlotContext.getIndex() as int

mySlotContext.getIndex();
```

:::

:::group{name=isCosmetic}

Return Type: boolean

```zenscript
// SlotContext.isCosmetic() as boolean

mySlotContext.isCosmetic();
```

:::

:::group{name=isVisible}

Return Type: boolean

```zenscript
// SlotContext.isVisible() as boolean

mySlotContext.isVisible();
```

:::


## Properties

|    Name    |                       Type                       | Has Getter | Has Setter |
|------------|--------------------------------------------------|------------|------------|
| entity     | [LivingEntity](/vanilla/api/entity/LivingEntity) | true       | false      |
| identifier | string                                           | true       | false      |
| index      | int                                              | true       | false      |
| isCosmetic | boolean                                          | true       | false      |
| isVisible  | boolean                                          | true       | false      |

