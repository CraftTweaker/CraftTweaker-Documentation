# IItemUseFinish

The IItemUseFinish function can be added to an [item](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) and will be triggered only when a user finishes using the item (e.g. finishes eating).

## Importazione del pacchetto

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.IItemUseFinish;`

## Parametri

The IItemRightClickFunction is a function with the following parameters:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → The item that is used
- [mondo IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) → Il mondo in cui si trova il giocatore
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) entity → The entity using the item

La funzione deve restituire un [IItemStack](/Vanilla/Items/IItemStack/).

## Esempio

```zenscript
zsItem.onItemUseFinish = function(stack, world, player) {
    stack.damage(1, player);
    return stack;
};
```