# IItemUseFinish

The IItemUseFinish function can be added to an [item](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) and will be triggered only when a user finishes using the item (e.g. finishes eating).

## Импорт пакета

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.IItemUseFinish;`

## Parameters

The IItemRightClickFunction is a function with the following parameters:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → The item that is used
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) world → The world the player is in
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) entity → The entity using the item

The function needs to return an [IItemStack](/Vanilla/Items/IItemStack/).

## Example

```JAVA
zsItem.onItemUseFinish = function(stack, world, player) {
    stack.damage(1, player);
    return stack;
};
```