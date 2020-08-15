# Acción de IBlock

La función IBlockAction puede añadirse a un bloque [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) y, dependiendo de donde lo hayas añadido, se activará cuando el bloque se coloque o se rompa.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.IBlockAction;`

## Parámetros

El IBlockAction es una función con los siguientes parámetros:

- [Mundo](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) mundo → El mundo en el que está el bloque
- [Posición de IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) → Posición del bloque
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) estado → Contiene información sobre el bloque, como el propio bloque y sus metadatos

¡La función no tiene un valor de retorno!

## Ejemplo

```zenscript
zsBlock.onBlockBreak = function(world, blockPos, blockState){
    print("I WAS PLACED!!!");
}
```