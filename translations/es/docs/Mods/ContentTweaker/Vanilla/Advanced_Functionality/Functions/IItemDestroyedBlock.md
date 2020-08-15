# ItemDestroyedBlock

La función ItemDestroyedBlock se puede añadir a un [Elemento](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) y se ejecutará cuando intente romper un bloque con el objeto assiciado.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.ItemDestroyedBlock;`

## Parámetros

ItemDestroyedBlock es una función con los siguientes parámetros:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) pila → El artículo.
- [Mundo](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) mundo → El mundo en el que esto ocurre
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState → El estado del bloque que está siendo extraído.
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → ¿Dónde ocurre esto?
- [entidad IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) → Quién/¿Qué minas el bloque?

La función necesita devolver un valor booleano, que es `verdadero` si el proceso blockBreaking es exitoso, y `falso` si lo hace.