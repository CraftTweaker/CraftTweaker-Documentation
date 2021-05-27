# IItemRightClick

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.functions.IItemRightClick;
```


## Methoden

:::group{name=apply}

Return Type: [ActionResultType](/vanilla/api/util/ActionResultType)

```zenscript
IItemRightClick.apply(item as MCItemStackMutable, playerEntity as MCPlayerEntity, world as MCWorld, hand as MCHand) as ActionResultType
```

| Parameter    | Type                                                        | Beschreibung            |
| ------------ | ----------------------------------------------------------- | ----------------------- |
| item         | [MCItemStackMutable](/vanilla/api/items/MCItemStackMutable) | No Description Provided |
| playerEntity | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)        | No Description Provided |
| world        | [MCWorld](/vanilla/api/world/MCWorld)                       | No Description Provided |
| hand         | [MCHand](/vanilla/api/util/MCHand)                          | No Description Provided |


:::


