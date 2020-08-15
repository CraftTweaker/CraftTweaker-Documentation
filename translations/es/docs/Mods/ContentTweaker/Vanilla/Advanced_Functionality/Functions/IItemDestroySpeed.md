# ItemDestroySpeed

La función ItemDestroySpeed puede ser añadida a un artículo [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) y determinará la velocidad de rotación del bloque.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.ItemDestroySpeed;`

## Parámetros

ItemDestroySpeed es una función con los siguientes parámetros:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) mutableItemStack → El elemento.
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState → El estado del bloque que está siendo extraído.

La función necesita devolver un valor flotante.