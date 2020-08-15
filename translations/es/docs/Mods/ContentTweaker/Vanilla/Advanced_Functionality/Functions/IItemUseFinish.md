# ItemUseFinalizar

La función ItemUseFinish puede ser añadida a un artículo [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) y solo se activará cuando un usuario finalice usando el artículo (e. . acaba de comer).

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.IItemUseFinish;`

## Parámetros

La función ItemRight es una función con los siguientes parámetros:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → El elemento que se utiliza
- [Mundo](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) mundo → El mundo en el que está el jugador
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) entidad → La entidad usando el elemento

La función necesita devolver un [ItemStack](/Vanilla/Items/IItemStack/).

## Ejemplo

```zenscript
zsItem.onItemUseFinish = function(stack, world, player) {
    stack.damage(1, player);
    return stack;
};
```