# IMaterial

Un objeto IMaterial representa el material del que está hecho un bloque.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar crafttweaker.block.IMaterial;`

## ZenGetters/ZenMethods sin parámetros

| ZenGetter                | Método                          | Tipo de devolución |
| ------------------------ | ------------------------------- | ------------------ |
| blocksLight              | blocksLight()                   | pluma              |
| bloquesMovimiento        | blocksMovement()                | pluma              |
| canQuemar                | getCanBurn()                    | pluma              |
| mobilityFlag             | getMobilityFlag()               | cadena             |
| líquido                  | isLiquid()                      | pluma              |
| opaco                    | isOpaque()                      | pluma              |
| reemplazable             | es reemplazable()               | pluma              |
| solid                    | isSolid()                       | pluma              |
| herramienta no requerida | no se requiere la herramienta() | pluma              |
|                          | setReplaceable()                | IMaterial          |

## ZenMethods con parámetros

### Comprobar si dos IMaterials coinciden

Utiliza un IMaterial.  
Devuelve un bool.

```zenscript
materialObj.matches(IMaterial other);
```

## Obtener materiales de Minecraft de Vanilla

Puedes usar estos métodos para obtener los materiales de minecraft de vainilla

```zenscript
crafttweaker.blocks.IMaterial.air();
crafttweaker.blocks.IMaterial.anvil();
crafttweaker.blocks.IMaterial.barrier();
crafttweaker.blocks.IMaterial.cactus();
crafttweaker.blocks.IMaterial.cake();
crafttweaker.blocks.IMaterial.carpet();
crafttweaker.blocks.IMaterial.circuits();
crafttweaker.blocks.IMaterial.clay();
crafttweaker.blocks.IMaterial.cloth();
crafttweaker. locks.IMaterial.coral();
crafttweaker.blocks.IMaterial.craftedSnow();
crafttweaker.blocks.IMaterial.dragonEgg();
crafttweaker.blocks.IMaterial.fire();
crafttweaker.blocks.IMaterial.glass();
crafttweaker.blocks.IMaterial.gourd();
crafttweaker.blocks.IMaterial.grass();
crafttweaker.blocks.IMaterial.ground();
crafttweaker.blocks.IMaterial.ice();
crafttweaker. locks.IMaterial.iron();
crafttweaker.blocks.IMaterial.lava();
crafttweaker.blocks.IMaterial.leaves();
crafttweaker.blocks.IMaterial.packedIce();
crafttweaker.blocks.IMaterial.piston();
crafttweaker.blocks.IMaterial.plants();
crafttweaker.blocks.IMaterial.portal();
crafttweaker.blocks.IMaterial.redstoneLight();
crafttweaker.blocks.IMaterial. ock();
crafttweaker.blocks.IMaterial.sand();
crafttweaker.blocks.IMaterial.snow();
crafttweaker.blocks.IMaterial.sponge();
crafttweaker.blocks.IMaterial.structureVoid();
crafttweaker.blocks.IMaterial.tnt();
crafttweaker.blocks.IMaterial.vine();
crafttweaker.blocks.IMaterial.water();
crafttweaker.blocks.IMaterial.web();
crafttweaker.blocks.IMaterial.wood();
```