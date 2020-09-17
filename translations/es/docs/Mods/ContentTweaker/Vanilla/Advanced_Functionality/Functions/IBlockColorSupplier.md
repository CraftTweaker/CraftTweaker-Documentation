# Proveedor de IBlockColor

La función IBlockColorSupplier puede utilizarse para proporcionar el [Objeto de Color](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) que se utilizará para lo que sea.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.IBlockColorSupplier;`

## Parámetros

La función IBlockColorSupplier es una función con los siguientes parámetros.

- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) estado → el estado de bloqueo del bloque cuyo color está siendo solicitado.
- [IBlockAccess](/Vanilla/World/IBlockAccess/) acceso → el acceso al bloque cuyo color está siendo solicitado.
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → la posición del bloque cuyo color está siendo solicitado.
- int tintIndex → el índice de tinte, use eso como desee. La función necesita devolver un [objeto de color](/Mods/ContentTweaker/Vanilla/Types/Color/Color/).

## Ejemplos

```zenscript
#loader contenttweaker

import mods.contenttweaker.IBlockColorSupplier;
import mods.contenttweaker.BlockState;
import mods.contenttweaker.BlockPos;
import mods.contenttweaker.Color;

import crafttweaker. orld.IBlockAccess;

función getBlockColor(estado como BlockState, acceso como IBlockAccess, pos como BlockPos, tintIndex as int) as Color {
  //Devuelve un color lime
    return Color. romInt(0x00FF00);
}
```