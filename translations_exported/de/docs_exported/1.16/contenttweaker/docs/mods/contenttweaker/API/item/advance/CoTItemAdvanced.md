# CoTItemAdvanced

A registered CoT Item. Used for advanced functionality. like onItemUse, onItemRightClick etc.

 These functions should be run in CraftTweaker scripts, instead of ContentTweaker ones. And they are reloadable. You can get it via advanced item BEP.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.item.advance.CoTItemAdvanced;
```


## Methoden

:::group{name=setInventoryTick}

Sets what will happen when the item is ticked in an inventory.

Returns: the CoTItemAdvanced, used for method chaining  
Return Type: [CoTItemAdvanced](/mods/contenttweaker/API/item/advance/CoTItemAdvanced)

```zenscript
CoTItemAdvanced.setInventoryTick(func as IItemInventoryTick) as CoTItemAdvanced
```

| Parameter | Type                                                                        | Beschreibung                   |
| --------- | --------------------------------------------------------------------------- | ------------------------------ |
| func      | [IItemInventoryTick](/mods/contenttweaker/API/functions/IItemInventoryTick) | an IItemInventoryTick function |


:::

:::group{name=setItemColorSupplier}

The item's color.

Returns: the CoTItemAdvanced, used for method chaining  
Return Type: [CoTItemAdvanced](/mods/contenttweaker/API/item/advance/CoTItemAdvanced)

```zenscript
CoTItemAdvanced.setItemColorSupplier(func as IItemColorSupplier) as CoTItemAdvanced
```

| Parameter | Type                                                                        | Beschreibung                                                            |
| --------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| func      | [IItemColorSupplier](/mods/contenttweaker/API/functions/IItemColorSupplier) | an IItemColorSupplier, The tintIndex is `layerX` property of its model. |


:::

:::group{name=setItemUseAction}

Sets the use action of this Item.

 By default, if this item is a food, the use action will be "EAT".

Returns: the CoTItemAdvanced, used for method chaining  
Return Type: [CoTItemAdvanced](/mods/contenttweaker/API/item/advance/CoTItemAdvanced)

```zenscript
CoTItemAdvanced.setItemUseAction(func as IItemUseActionSupplier) as CoTItemAdvanced
```

| Parameter | Type                                                                                | Beschreibung                                                             |
| --------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| func      | [IItemUseActionSupplier](/mods/contenttweaker/API/functions/IItemUseActionSupplier) | an IItemUseFinish function, the function should return the new ItemStack |


:::

:::group{name=setItemUseDuration}

How long it takes to use or consume an item.

 By default, if the use finish function is defined or the item is a food, it will be 32.

Returns: the CoTItemAdvanced, used for method chaining  
Return Type: [CoTItemAdvanced](/mods/contenttweaker/API/item/advance/CoTItemAdvanced)

```zenscript
CoTItemAdvanced.setItemUseDuration(func as IItemUseDurationSupplier) as CoTItemAdvanced
```

| Parameter | Type                                                                                    | Beschreibung                         |
| --------- | --------------------------------------------------------------------------------------- | ------------------------------------ |
| func      | [IItemUseDurationSupplier](/mods/contenttweaker/API/functions/IItemUseDurationSupplier) | an IItemUseDurationSupplier function |


:::

:::group{name=setOnHitEntity}

Sets what will happen when a living entity attacks other entities with this item.

Returns: the CoTItemAdvanced, used for method chaining  
Return Type: [CoTItemAdvanced](/mods/contenttweaker/API/item/advance/CoTItemAdvanced)

```zenscript
CoTItemAdvanced.setOnHitEntity(func as IItemHitEntity) as CoTItemAdvanced
```

| Parameter | Type                                                                | Beschreibung                                                               |
| --------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| func      | [IItemHitEntity](/mods/contenttweaker/API/functions/IItemHitEntity) | an IItemHitEntity function, the function return whether can attack or not. |


:::

:::group{name=setOnInteractWithEntity}

Sets what will happen when a player interacts (right-clicks) an entity with this item.

Returns: the CoTItemAdvanced, used for method chaining  
Return Type: [CoTItemAdvanced](/mods/contenttweaker/API/item/advance/CoTItemAdvanced)

```zenscript
CoTItemAdvanced.setOnInteractWithEntity(func as IItemInteractWithEntity) as CoTItemAdvanced
```

| Parameter | Type                                                                                  | Beschreibung                                                                        |
| --------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| func      | [IItemInteractWithEntity](/mods/contenttweaker/API/functions/IItemInteractWithEntity) | an IItemInteractWithEntity function, the function should return an ActionResultType |


:::

:::group{name=setOnItemRightClick}

Sets what will happen when the player right clicks with the item. If the item is food, then you cannot use this method as the food mechanics also use this method.

Returns: the CoTItemAdvanced, used for method chaining  
Return Type: [CoTItemAdvanced](/mods/contenttweaker/API/item/advance/CoTItemAdvanced)

```zenscript
CoTItemAdvanced.setOnItemRightClick(func as IItemRightClick) as CoTItemAdvanced
```

| Parameter | Type                                                                  | Beschreibung                                                                |
| --------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| func      | [IItemRightClick](/mods/contenttweaker/API/functions/IItemRightClick) | an IItemRightClick function, the function should return an ActionResultType |


:::

:::group{name=setOnItemUse}

Sets what will happen when the player uses this item on a block

Returns: the CoTItemAdvanced, used for method chaining  
Return Type: [CoTItemAdvanced](/mods/contenttweaker/API/item/advance/CoTItemAdvanced)

```zenscript
CoTItemAdvanced.setOnItemUse(func as IItemUse) as CoTItemAdvanced
```

| Parameter | Type                                                    | Beschreibung                                                         |
| --------- | ------------------------------------------------------- | -------------------------------------------------------------------- |
| func      | [IItemUse](/mods/contenttweaker/API/functions/IItemUse) | an IItemUse function, the function should return an ActionResultType |


:::

:::group{name=setOnItemUseFinish}

Sets what will happen when the player finishes using this Item (like when finishing eating).

 Not called when the player stops using this Item before the action is complete

Returns: the CoTItemAdvanced, used for method chaining  
Return Type: [CoTItemAdvanced](/mods/contenttweaker/API/item/advance/CoTItemAdvanced)

```zenscript
CoTItemAdvanced.setOnItemUseFinish(func as IItemUseFinish) as CoTItemAdvanced
```

| Parameter | Type                                                                | Beschreibung                                                             |
| --------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| func      | [IItemUseFinish](/mods/contenttweaker/API/functions/IItemUseFinish) | an IItemUseFinish function, the function should return the new ItemStack |


:::

:::group{name=setUsingTick}

The Set function will be called each tick while using the item

Returns: the CoTItemAdvanced, used for method chaining  
Return Type: [CoTItemAdvanced](/mods/contenttweaker/API/item/advance/CoTItemAdvanced)

```zenscript
CoTItemAdvanced.setUsingTick(func as IItemUsingTick) as CoTItemAdvanced
```

| Parameter | Type                                                                | Beschreibung                                                                                                                      |
| --------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| func      | [IItemUsingTick](/mods/contenttweaker/API/functions/IItemUsingTick) | an IItemUsingTick function. The count argument of function is the amount of time in tick the item has been used for continuously. |


:::


