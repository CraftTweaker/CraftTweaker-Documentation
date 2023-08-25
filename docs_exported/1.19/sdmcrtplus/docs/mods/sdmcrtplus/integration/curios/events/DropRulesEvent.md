# DropRulesEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.curios.events.DropRulesEvent;
```


## Extending LivingEvent

DropRulesEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in DropRulesEvent

## Methods

:::group{name=getCurioHandler}

Return Type: [ICuriosItemHandler](/mods/sdmcrtplus/integration/curios/ICuriosItemHandler)

```zenscript
// DropRulesEvent.getCurioHandler() as ICuriosItemHandler

myDropRulesEvent.getCurioHandler();
```

:::

:::group{name=getLootingLevel}

Return Type: int

```zenscript
// DropRulesEvent.getLootingLevel() as int

myDropRulesEvent.getLootingLevel();
```

:::

:::group{name=getSource}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
// DropRulesEvent.getSource() as DamageSource

myDropRulesEvent.getSource();
```

:::

:::group{name=isRecentlyHit}

Return Type: boolean

```zenscript
// DropRulesEvent.isRecentlyHit() as boolean

myDropRulesEvent.isRecentlyHit();
```

:::


## Properties

|     Name      |                                     Type                                     | Has Getter | Has Setter |
|---------------|------------------------------------------------------------------------------|------------|------------|
| handler       | [ICuriosItemHandler](/mods/sdmcrtplus/integration/curios/ICuriosItemHandler) | true       | false      |
| isRecentlyHit | boolean                                                                      | true       | false      |
| lootingLevel  | int                                                                          | true       | false      |
| source        | [DamageSource](/vanilla/api/world/DamageSource)                              | true       | false      |

