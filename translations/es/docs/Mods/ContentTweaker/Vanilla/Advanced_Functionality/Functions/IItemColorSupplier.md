# IItemColorSupplier

La función ItemColorSupplier se puede utilizar para proporcionar el [Objeto de Color](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) que se utilizará para lo que sea.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.IItemColorSupplier;`

## Parámetros

La función ItemColorSupplier es una función con los siguientes parámetros.

- [ItemStack](/Vanilla/Items/IItemStack/) itemStack → el elemento cuyo color está siendo solicitado.
- int tintIndex → el índice de tinte, use eso como desee. La función necesita devolver un [objeto de color](/Mods/ContentTweaker/Vanilla/Types/Color/Color/).