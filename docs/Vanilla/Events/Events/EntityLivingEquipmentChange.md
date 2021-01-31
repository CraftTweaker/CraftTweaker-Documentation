# EntityLivingEquipmentChange

EntityLivingEquipmentChangeEvent is fired when the Equipment of a Entity changes.
This also includes entities joining the World, as well as being cloned.

slot contains the affected EntityEquipmentSlot.
item contains the ItemStack that is equipped now. 
olditem contains the ItemStack that was equipped previously.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingEquipmentChangeEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
EntityLivingEquipmentChangeEvent implements the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetters
The following information can be retrieved from the event:

| ZenGetter   | Return Type                               |
|-------------|-------------------------------------------|
| newItem     | [IItemStack](/Vanilla/Items/IItemStack/)  |
| oldItem     | [IItemStack](/Vanilla/Items/IItemStack/)  |
| slot        | [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/)|
