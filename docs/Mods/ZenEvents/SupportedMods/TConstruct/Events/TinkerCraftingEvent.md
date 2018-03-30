# TinkerCraftingEvent

The TinkerCraftingEvent is fired some tinkering was performed.  
Now, since there are many types of toolcrafting, there are multiple Events and thus multiple event handlers as well.

## Implementing EventClasses
The TinkerCraftingEvents all implement the following EventClasses and thus are able to use all functionality they provide as well: 

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable)

## Event Class
You will need to cast the event in the function header as one of these classes:  
```
//Superclass, all TinkerCrafting Events are this class.
mods.tconstruct.TinkerCraftingEvent

//Specific subclasses.
//In most cases you won't need the superclass but only those:
mods.tconstruct.ToolCraftingEvent
mods.tconstruct.ToolModifyEvent
mods.tconstruct.ToolPartReplaceEvent
mods.tconstruct.ToolPartCraftingEvent
```  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.

## ZenSetter/Getter

Empty table fields mean that the getter/setter does not exist!


| ZenGetter Name   | ZenSetter Name   | Type                                                                       |
|------------------|------------------|----------------------------------------------------------------------------|
| player           |                  | [IPlayer](/Vanilla/Players/IPlayer)                                        |
| item             |                  | [IItemStack](/Vanilla/Items/IItemStack) (can return null)                  |
| message          |                  | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase) (can return null) |
| canceled         | canceled         | bool                                                                       |

## ZenMethod

`event.setCanceled(String localizedName)` Cancels the event and sets the given message as error message for the player.

## SubEvent Getters

| ZenGetter Name         | Type                                           | Crafting | Modify | PartReplace | PartCrafting |
|------------------------|------------------------------------------------|:--------:|:------:|:-----------:|:------------:|
| toolParts              | List<[IItemStack](/Vanilla/Items/IItemStack)\> | ✔        |        | ✔           |              |
| toolBeforeModification | [IItemStack](/Vanilla/Items/IItemStack)        |          | ✔      |             |              |
| toolBeforeModification | [IItemStack](/Vanilla/Items/IItemStack)        |          |        |             |              |