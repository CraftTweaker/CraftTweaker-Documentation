# EntityLivingEquipmentChange

EntityLivingEquipmentChangeEvent is fired when the Equipment of a Entity changes.
This also includes entities joining the World, as well as being cloned.

`slot` contains the affected [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/).

`item` contains the  [IItemStack](/Vanilla/Items/IItemStack/)  that is equipped now. 

`olditem` contains the  [IItemStack](/Vanilla/Items/IItemStack/)  that was equipped before the EquipmentChange happend.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingEquipmentChangeEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
EntityLivingEquipmentChangeEvent implements the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetters/ZenSetters
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `newItem`       |                 | [IItemStack](/Vanilla/Items/IItemStack/)          |
| `oldItem`       |                 | [IItemStack](/Vanilla/Items/IItemStack/)          |
| `slot`          |                 | [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) |


## ZenGetters/ZenSetters from extensions
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)  |

