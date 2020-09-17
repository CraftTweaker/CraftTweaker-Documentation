# IWorld

El objeto IWorld contiene información sobre una Dimensión dentro del juego.

## Importar la clase

Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.world.IWorld`

## Extendiendo IBlockProperties

IBlockState extiende [IBlockAccess](/Vanilla/World/IBlockAccess/). Eso significa que todos los métodos disponibles para los objetos [IBlockAccess](/Vanilla/World/IBlockAccess/) también están disponibles para los objetos de IBlockState.

## Crear un objeto IWorld

Normalmente, puede derivar este objeto de entidades u otras funciones. Sin embargo, si necesitas crearlo tú mismo esta es la forma de ir:  
Tenga en cuenta que este método solo debe ser llamado dentro de funciones que están destinadas a ser ejecutadas dentro de minecraft, no durante el círculo de carga.

```zenscript
crafttweaker.world.IWorld.getFromID(int id);
```

## ZenMethods sin parámetros y ZenGetters

| Método             | ZenGetter           | Tipo de devolución                               | Descripción                                                                                                                                                                                                                               |
| ------------------ | ------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| es remoto ()       | remoto              | boolean                                          | Verdadero si el mundo es un cliente "esclavo"; los cambios no serán guardados ni propagados desde este mundo. Por ejemplo, los mundos del servidor tienen este valor como falso, los mundos del cliente tienen este valor como verdadero. |
| isRaining()        | lloviendo           | boolean                                          | Devuelve verdadero si está lloviendo actualmente.                                                                                                                                                                                         |
| isThundering()     | truenos             | boolean                                          | Devuelve verdadero si actualmente es trueno.                                                                                                                                                                                              |
| getMoonPhase()     | fase lunar          | int                                              | Devuelve la fase lunar actual.                                                                                                                                                                                                            |
| isDayTime()        | dayTime             | boolean                                          | Comprueba si es diurna.                                                                                                                                                                                                                   |
| getWorldTime()     | tiempo              | largo                                            | Devuelve el tiempo del mundo.                                                                                                                                                                                                             |
| getDimension()     | dimensión           | int                                              | Devuelve la dimensión mundial.                                                                                                                                                                                                            |
| es SurfaceWorld()  | mundo de superficie | boolean                                          | Devuelve si estás en un mundo superficial o no.                                                                                                                                                                                           |
| getDimensionType() | tipo de dimensión   | Cadena                                           | Devuelve el nombre del tipo de la dimensión.                                                                                                                                                                                              |
| getWorldType()     | worldType           | Cadena                                           | Devuelve el nombre del tipo del mundo.                                                                                                                                                                                                    |
| getWorldInfo()     | mundoInfo           | [IWorldInfo](/Vanilla/World/IWorldInfo/)         | Devuelve la información del mundo. Se puede utilizar para recuperar aún más información sobre el mundo.                                                                                                                                   |
| getProvider()      | proveedor           | [IWorldProvider](/Vanilla/World/IWorldProvider/) | Devuelve el proveedor del mundo. Se puede utilizar para recuperar aún más información sobre el mundo.                                                                                                                                     |

## ZenMethods con parámetros

### Obtener bioma en posición específica

Utilice un [IPosition3f](/Vanilla/Utils/Position3f/) o un objeto [IBlockPos](/Vanilla/World/IBlockPos/) .  
Devuelve un objeto [IBiome](/Vanilla/Biomes/IBiome/).

```zenscript
worldObj.getBiome(IPosition3f position);
worldObj.getBiome(IBlockPos position);
```

### Obtener brillo en una posición específica

Usa tres pistas o un objeto [IBlockPos](/Vanilla/World/IBlockPos/). Devuelve un int.

```zenscript
worldObj.getBrightness(int x, int y, int z);
worldObj.getBrightness(IBlockPos position);
```

### Obtener bloque en una posición específica

Usa tres pistas o un objeto [IBlockPos](/Vanilla/World/IBlockPos/). Devuelve un objeto [IBlock](/Vanilla/Blocks/IBlock/).

```zenscript
worldObj.getBlock(int x, int y, int z);
worldObj.getBlock(IBlockPos position);
```

### Obtener o establecer un blockState en una posición específica

Usa un objeto [IBlockPos](/Vanilla/World/IBlockPos/) y para el setter también un objeto [IBlockState](/Vanilla/Blocks/IBlockState/). Opcionalmente, se puede especificar un objeto [IData](/Vanilla/Data/IData/) para definir datos NBT para la TileEntity del estado de bloque cuando se establece. Getter Devuelve un [IBlockState](/Vanilla/Blocks/IBlockState/), establece un bool.

```zenscript
worldObj.getBlockState(IBlockPos pos);
worldObj.setBlockState(IBlockState state, IBlockPos pos);
worldObj.setBlockState(IBlockState state, IData tileEntityData, IBlockPos pos);
```

### Generar entidad

Utilice un objeto [Itity](/Vanilla/Entities/IEntity/) .  
Devuelve un bool que indica si el spawn fue exitoso.

```zenscript
worldObj.spawnEntity(Entidad Itidad);
```

### Get a raytrace result

Usa dos objetos [IVector3d](/Vanilla/World/IVector3d/) y tres booleanos para obtener un [IRayTraceResult](/Vanilla/World/IRayTraceResult/).  
**Puede ser nulo**

El primer vector describe el punto de partida, el segundo vector la dirección y longitud en la que estamos buscando.  
Sólo el último parámetro es verdadero por defecto.

```zenscript
worldObj.rayTraceBlocks(inician IVector3d, ray IVector3d, @stopOnLiquid, @ignoreBlockWithoutBoundingBox, @Optional(true) boolean returnLastUncollidableBlock)
```

### Consigue el bloque elegido

Utilice un [IBlockPos](/Vanilla/World/IBlockPos/), un [IRayTraceResult](/Vanilla/World/IRayTraceResult/) y un [IPlayer](/Vanilla/Players/IPlayer/).  
Devuelve un [ItemStack](/Vanilla/Items/IItemStack/).  
**Puede ser nulo**

Obtiene el ItemStack que se obtendría escogiendo el bloque en la posición.

```zenscript
worldObj.getPickedBlock(IBlockPos pos, IRayTraceResult rayTraceResult, IPlayer player);
```