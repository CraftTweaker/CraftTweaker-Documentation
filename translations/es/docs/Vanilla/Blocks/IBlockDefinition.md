# Definición de IBlock

Los objetos IBlockDefinition proporcionan información adicional sobre los bloques.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.block.IBlockDefinition;`

## Llamando a un objeto IBlockDefinition

* Usando la `definición` ZenGetter en un objeto [IBlock](/Vanilla/Blocks/IBlock/).

## Llamando a una lista IBlockDefinition

* Usando `game.blocks` para obtener una lista de todas las definiciones de bloque en el juego.

## ZenGetters/ZenSetters

| ZenGetter            | Ajuste                      | ¿Qué hace                                             | Tipo                                                     |
| -------------------- | --------------------------- | ----------------------------------------------------- | -------------------------------------------------------- |
|                      | puede aparecer en el bloque | Devuelve si una entidad puede aparecer en este bloque | pluma                                                    |
| creativaTab          | creativaTab                 |                                                       | [Pestaña ICreativa](/Vanilla/CreativeTabs/ICreativeTab/) |
| estado por defecto   |                             |                                                       | [Estado de IBlock](/Vanilla/Blocks/IBlockState/)         |
|                      | por defecto Slipperiness    |                                                       | flotante                                                 |
| id                   |                             | Devuelve el ID del bloque                             | cadena                                                   |
| nombre de pantalla   |                             | Devuelve el nombre del bloque                         | cadena                                                   |
|                      | dureza                      |                                                       | int                                                      |
| nivel de cosecha     |                             | Devuelve el nivel de cosecha del bloque               | int                                                      |
| cosechar herramienta |                             | Devuelve la herramienta de cosecha del bloque         | cadena                                                   |
|                      | ligereza                    |                                                       | int                                                      |
|                      | nivel de luz                |                                                       | int                                                      |
|                      | resistencia                 |                                                       | int                                                      |
| unlocalizedName      |                             | Devuelve el nombre no localizado del bloque           | cadena                                                   |
| tickRandomly         | tickRandomly                |                                                       | pluma                                                    |

## Métodos

### Establecer bloque irrompible

No utiliza ningún parámetro.  
Devuelve nada.  
Hace lo mismo que `dureza = -1;`

```zenscript
defObj.setUnbreakable();
```

### Obtén una tarifa de tickrate en un mundo específico

Usa un objeto [IWorld](/Vanilla/World/IWorld/) .  
Devuelve un int.

```zenscript
defObj.getTickRate(mundo IWorld);
```

### Evalúa si el bloque puede colocarse en otro bloque

Usa un objeto [IWorld](/Vanilla/World/IWorld/) , un objeto [IBlockPos](/Vanilla/World/IBlockPos/) y, dependiendo del método utilizado, también un objeto [IFacing](/Vanilla/World/IFacing/) .  
Devuelve un bool.

```zenscript
defObj.canPlaceBlockOnSide(mundo IWorld, IBlockPos pos, IFacing facing);
defObj.canPlaceBlockAt(mundo IWorld, IBlockPos pos);
```

### Consigue el resbaladizo del bloque

Usa un [IBlockState](/Vanilla/Blocks/IBlockState/), un objeto [IBlockAccess](/Vanilla/World/IBlockAccess/) , un [IBlockPos](/Vanilla/World/IBlockPos/) y un objeto [Itity](/Vanilla/Entities/IEntity/) opcional.  
Devuelve un float.

```zenscript
defObj.getSlipperiness(IBlockState state, IBlockAccess access, IBlockPos pos, @Optional Itity entity);
```

### Establecer el nivel de cosecha del bloque

Utiliza una string y un int.  
Devuelve vacío (nada).

```zenscript
defObj.setHarvestLevel(clase de herramientas de cadena, nivel int);
```

### Obtener un estado de bloque por metadatos

Utiliza un int.  
Devuelve un [IBlockState](/Vanilla/Blocks/IBlockState/).

```zenscript
defObj.getStateFromMeta(int meta);
```