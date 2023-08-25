# CurioDropsEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.curios.events.CurioDropsEvent;
```


## Extending LivingEvent

CurioDropsEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in CurioDropsEvent

## Methods

:::group{name=getCurioHandler}

Return Type: [ICuriosItemHandler](/mods/sdmcrtplus/integration/curios/ICuriosItemHandler)

```zenscript
// CurioDropsEvent.getCurioHandler() as ICuriosItemHandler

myCurioDropsEvent.getCurioHandler();
```

:::

:::group{name=getDrops}

Return Type: Collection&lt;[ItemEntity](/vanilla/api/entity/type/item/ItemEntity)&gt;

```zenscript
// CurioDropsEvent.getDrops() as Collection<ItemEntity>

myCurioDropsEvent.getDrops();
```

:::

:::group{name=getLootingLevel}

Return Type: int

```zenscript
// CurioDropsEvent.getLootingLevel() as int

myCurioDropsEvent.getLootingLevel();
```

:::

:::group{name=getSource}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
// CurioDropsEvent.getSource() as DamageSource

myCurioDropsEvent.getSource();
```

:::

:::group{name=isRecentlyHit}

Return Type: boolean

```zenscript
// CurioDropsEvent.isRecentlyHit() as boolean

myCurioDropsEvent.isRecentlyHit();
```

:::


## Properties

|     Name      |                                     Type                                     | Has Getter | Has Setter |
|---------------|------------------------------------------------------------------------------|------------|------------|
| drops         | Collection&lt;[ItemEntity](/vanilla/api/entity/type/item/ItemEntity)&gt;     | true       | false      |
| handler       | [ICuriosItemHandler](/mods/sdmcrtplus/integration/curios/ICuriosItemHandler) | true       | false      |
| isRecentlyHit | boolean                                                                      | true       | false      |
| lootingLevel  | int                                                                          | true       | false      |
| source        | [DamageSource](/vanilla/api/world/DamageSource)                              | true       | false      |

