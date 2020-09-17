# Bandera de movilidad

La interfaz IMobilityFlag te permite obtener [las banderas móviles](/Vanilla/Blocks/IBlockState/) de IBlockState.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar crafttweaker.block.IMobilityFlag;`

## Métodos

#### Partidas

Puedes comprobar si dos objetos IMobilityFlag son iguales:  
Devuelve un bool.

```zenscript
flagOne.matches(other);
```

## Enumeraciones

La interfaz MobilityFlag tiene 5 métodos estáticos, cada uno devolviendo el objeto IMobilityFlag dado.

```zenscript
crafttweaker.block.MobilityFlag.normal()
crafttweaker.block.MobilityFlag.destroy()
crafttweaker.block.MobilityFlag.block()
crafttweaker.block.MobilityFlag.ignore()
crafttweaker.block.MobilityFlag.pushOnly()
```