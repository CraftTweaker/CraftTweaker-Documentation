# CoTItemAdvanced

A registered CoT Item. Used for advanced functionality. like onItemUse, onItemRightClick etc.

 These functions should be run in CraftTweaker scripts, instead of ContentTweaker ones. And they are reloadable. You can get it via advanced item BEP.

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.item.advance.CoTItemAdvanced;
```


## Metodi

:::group{name=setInventoryTick}

Sets what will happen when the item is ticked in an inventory.

Returns: the CoTItemAdvanced, used for method chaining  
Return Type: [CoTItemAdvanced](/mods/contenttweaker/API/item/advance/CoTItemAdvanced)

```zenscript
CoTItemAdvanced.setInventoryTick(func as IItemInventoryTick) as CoTItemAdvanced
```

| Parametro | Tipo                                                                        | Descrizione                    |
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

| Parametro | Tipo                                                                        | Descrizione                                                             |
| --------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| func      | [IItemColorSupplier](/mods/contenttweaker/API/functions/IItemColorSupplier) | an IItemColorSupplier, The tintIndex is `layerX` property of its model. |


:::

:::group{name=setOnHitEntity}

Sets what will happen when a living entity attacks other entities with this item.

Returns: the CoTItemAdvanced, used for method chaining  
Return Type: [CoTItemAdvanced](/mods/contenttweaker/API/item/advance/CoTItemAdvanced)

```zenscript
CoTItemAdvanced.setOnHitEntity(func as IItemHitEntity) as CoTItemAdvanced
```

| Parametro | Tipo                                                                | Descrizione                                                                |
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

| Parametro | Tipo                                                                                  | Descrizione                                                                         |
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

| Parametro | Tipo                                                                  | Descrizione                                                                 |
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

| Parametro | Tipo                                                    | Descrizione                                                          |
| --------- | ------------------------------------------------------- | -------------------------------------------------------------------- |
| func      | [IItemUse](/mods/contenttweaker/API/functions/IItemUse) | an IItemUse function, the function should return an ActionResultType |


:::

:::group{name=setUsingTick}

The Set function will be called each tick while using the item

Returns: the CoTItemAdvanced, used for method chaining  
Return Type: [CoTItemAdvanced](/mods/contenttweaker/API/item/advance/CoTItemAdvanced)

```zenscript
CoTItemAdvanced.setUsingTick(func as IItemUsingTick) as CoTItemAdvanced
```

| Parametro | Tipo                                                                | Descrizione                                                                                                                       |
| --------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| func      | [IItemUsingTick](/mods/contenttweaker/API/functions/IItemUsingTick) | an IItemUsingTick function. The count argument of function is the amount of time in tick the item has been used for continuously. |


:::


