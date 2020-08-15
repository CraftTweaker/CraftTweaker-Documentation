# IItemUseFinish

The IItemUseFinish function can be added to an [item](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) and will be triggered only when a user finishes using the item (e.g. finishes eating).

## Importowanie pakietu

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.IItemUseFinish;`

## Parametry

The IItemRightClickFunction is a function with the following parameters:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → The item that is used
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) Świat → Świat, w którym gracz jest
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) entity → The entity using the item

Funkcja musi zwrócić [IItemStack](/Vanilla/Items/IItemStack/).

## Przykład

```zenscript
zsItem.onItemUseFinish = function(stack, world, player) {
    stack.damage(1, player);
    return stack;
};
```