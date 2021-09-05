# IItemInteractWithEntity

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.functions.IItemInteractWithEntity;
```


## Methods

:::group{name=apply}

Return Type: [ActionResultType](/vanilla/api/util/ActionResultType)

```zenscript
IItemInteractWithEntity.apply(stack as MCItemStackMutable, player as MCPlayerEntity, target as MCLivingEntity, hand as MCHand) as ActionResultType
```

| Parameter | Type                                                        | Description             |
| --------- | ----------------------------------------------------------- | ----------------------- |
| stack     | [MCItemStackMutable](/vanilla/api/items/MCItemStackMutable) | No Description Provided |
| player    | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)        | No Description Provided |
| target    | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity)        | No Description Provided |
| hand      | [MCHand](/vanilla/api/util/MCHand)                          | No Description Provided |


:::


