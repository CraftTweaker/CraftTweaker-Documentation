# ItemGetContainerItem

La función ItemGetContainerItem se puede añadir a un artículo [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) y se ejecutará siempre que el artículo se utilice como ingrediente.  
Se utiliza para determinar, qué quedará en la ranura de fabricación, cuando el objeto se utiliza como tal.  
Piensa en los cubos, por ejemplo: Cada cubo lleno tiene el cubo vacío como contenedor, y cuando se fabrica un cubo lleno, acabarás con uno vacío.  
Esta función se puede utilizar para calcular el containerItem, por lo que puedes ir loco con cosas como NBT-Tags o más.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.ItemGetContainerItem;`

## Parámetros

ItemGetContainerItem es una función con los siguientes parámetros:

- [ItemStack](/Vanilla/Items/IItemStack/) pila → El artículo.

La función necesita devolver un nuevo objeto [ItemStack](/Vanilla/Items/IItemStack/) , o nulo, si el elemento no debe dejar nada atrás.