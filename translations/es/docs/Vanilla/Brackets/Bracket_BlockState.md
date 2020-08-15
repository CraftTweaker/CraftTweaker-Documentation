# BlockState Bracket

El BlockState Bracket Handler te da acceso a los BlockStates en el juego. Solo es posible obtener el registro de BlockStates en el juego, por lo que añadir o eliminar mods puede causar problemas si hace referencia a los estados de bloqueo del mod en un Manejador de Bracket BlockState.

Los BlockStates son referenciados en el BlockState Bracket Handler así:

```zenscript
<blockstate:modid:blockname>
```

Con el modificador `` siendo el modificador del mod en el que se define el bloque y `blockname` siendo el nombre del bloque. Esto devolverá el BlockState por defecto para el bloque especificado.

Para obtener un estado de bloqueo específico con el BlockState Bracket Handler, opcionalmente puede especificar sus propiedades así:

```zenscript
<blockstate:modid:blockname:properties>
```

Donde `propiedades` es un conjunto separado por comas de pares `name=value` para cualquier propiedad que desee especificar en el estado de bloque. Cualquier propiedad que no se especifica se da los mismos valores que en el estado de bloqueo por defecto.

Esto devolverá un Objeto de IBlockState. Consulte [la respectiva entrada de la wiki](/Vanilla/Blocks/IBlockState/) para obtener más información.

Tenga en cuenta que este manejador de corchetes creará una referencia a un estado de bloqueo específico. Si desea poder emparejar con varios estados de bloques, consulte [la entrada de la wiki de IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher).

## Ejemplos

Un ejemplo de BlockState Bracket Handler sería:

```zenscript
//block of dirt
<blockstate:minecraft:dirt>

//oak log, vertical
<blockstate:minecraft:log>
<blockstate:minecraft:log:variant=oak,axis=y>

//spruce log, horizontal a lo largo del eje x
<blockstate:minecraft:log:variant=spruce,axis=x>
```