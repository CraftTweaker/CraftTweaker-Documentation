# Constructor de bloques

El constructor de bloques está acostumbrado a... bloques de construcción (usted no vio que uno viene, ¿verdad?).<br> Una vez que lo hayas creado, puedes configurar varias propiedades que serán descritas por los métodos separados. <p> También puedes cambiar el tipo de bloque para crear una forma de bloque más especializada (e. , escaleras o bloques que pueden ser girados de la misma manera que los logs). Para decirle a CoT que quieres que el bloque aparezca en el juego, necesitas llamar a [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) y especificar una ruta de ubicación de recurso válida.

Esta clase fue añadida por un mod con mod-id `contenttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
mods.contenttweaker.block.BlockBuilder
```

## Interfaces implementadas
BlockBuilder implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructores
Crea un nuevo BlockBuilder. Recuerda que esto _no_ creará un nuevo bloque en el juego, necesitas llamar a [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) para eso.
```zenscript
new mods.contenttweaker.block.BlockBuilder(material as crafttweaker.api.block.material.MCMaterial);
new mods.contenttweaker.block.BlockBuilder();
new mods.contenttweaker.block.BlockBuilder(<blockmaterial:earth>);
```
| Parámetro | Tipo                                                                                 | Descripción                        | Opcional | Valor por defecto            |
| --------- | ------------------------------------------------------------------------------------ | ---------------------------------- | -------- | ---------------------------- |
| material  | [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial) | El material que tendrá este bloque | verdad   | `<blockmaterial:iron>` |



## Métodos
### construir

Instruye CoT para construir lo que se supone que este constructor está construyendo.

```zenscript
myBlockBuilder.build(resourceLocation as String);
myBlockBuilder.build("my_awesome_block");
```

| Parámetro            | Tipo   | Descripción                              |
| -------------------- | ------ | ---------------------------------------- |
| ubicacin del recurso | Cadena | La ruta de recursos para dar este bloque |


### notSolid

Instruye CoT que este bloque no es sólido.

 Esto es necesario si su modelo no es un bloque completo (16x16x16). También es necesario si el modelo se ve a través (como vidrio). Establece esto si tu bloque crea algunos efectos de rayos-X cuando está colocado.

 Devuelve: `Este constructor, utilizado para encadenar`

Tipo de retorno: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.notSolid();
```

### con HardnessAndResistance

Establece la dureza y resistencia del bloque. A diferencia del otro método, éste sólo acepta un parámetro y utilizará ese valor para ambas propiedades.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(hardnessAndResistance as float);
myBlockBuilder.withHardnessAndResistance(0.5f);
```

| Parámetro             | Tipo     | Descripción                                            |
| --------------------- | -------- | ------------------------------------------------------ |
| hardnessAndResistance | flotante | El valor a establecer para la dureza y la resistencia. |



Establece la dureza y resistencia del bloque. A diferencia del otro método, éste le permite establecer cada propiedad a un valor separado.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(hardnessIn as float, resistanceIn as float);
myBlockBuilder.withHardnessAndResistance(0.5f, 0.5f);
```

| Parámetro   | Tipo     | Descripción                                |
| ----------- | -------- | ------------------------------------------ |
| hardnessIn  | flotante | El valor a establecer para la dureza       |
| resistencia | flotante | El valor a establecer para la resistencia. |


### con nivel de cosecha

Establece el nivel de minería necesario para extraer este bloque

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestLevel(harvestLevel as int);
myBlockBuilder.withHarvestLevel(3);
```

| Parámetro        | Tipo | Descripción                    |
| ---------------- | ---- | ------------------------------ |
| nivel de cosecha | int  | El nivel de cosecha solicitado |


### con HarvestTool

Establece la herramienta necesaria para cosechar este bloque

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestTool(harvestTool as mods.contenttweaker.item.MCToolType);
myBlockBuilder.withHarvestTool(<tooltype:shovel>);
```

| Parámetro            | Tipo                                                                            | Descripción            |
| -------------------- | ------------------------------------------------------------------------------- | ---------------------- |
| cosechar herramienta | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | El tipo de herramienta |


### withItemGroup

Establece el grupo de elementos en el que aparecerá este bloque

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withItemGroup(group as mods.contenttweaker.item.MCItemGroup);
myBlockBuilder.withItemGroup(<itemgroup:building_blocks>);
```

| Parámetro | Tipo                                                                              | Descripción           |
| --------- | --------------------------------------------------------------------------------- | --------------------- |
| grupo     | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | El grupo a establecer |


### withLightValue

Establece el valor de luz del bloque.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLightValue(lightValueIn as int);
myBlockBuilder.withLightValue(15);
```

| Parámetro       | Tipo | Descripción               |
| --------------- | ---- | ------------------------- |
| valor de luz en | int  | El nivel de luz a definir |


### withLootFrom

Le indicará a CoT que reemplace la tabla de botes de este bloque con la del bloque proporcionado. Actualmente esto todavía creará una entrada en la tabla de botes, aunque será ignorada por el juego.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLootFrom(blockIn as crafttweaker.api.block.MCBlock);
myBlockBuilder.withLootFrom(<block:minecraft:diamond>);
```

| Parámetro | Tipo                                                          | Descripción                                  |
| --------- | ------------------------------------------------------------- | -------------------------------------------- |
| blockIn   | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | El bloque cuya tabla de botín debe aplicarse |


### con MaxStackSize

Establece el tamaño máximo de la pila que este bloque puede tener en tu inventario. Será 64 si no se modifica.

 Devuelve: `Este constructor, utilizado para encadenar`

Tipo de retorno: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withMaxStackSize(size as int);
myBlockBuilder.withMaxStackSize(16);
```

| Parámetro | Tipo | Descripción             |
| --------- | ---- | ----------------------- |
| tamaño    | int  | El tamaño a establecer. |


### sin Rareza

Te permite establecer la rareza de este bloque.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withRarity(rarity as String);
myBlockBuilder.withRarity("UNCOMMON");
```

| Parámetro | Tipo   | Descripción |
| --------- | ------ | ----------- |
| rareza    | Cadena | La rareza   |


### sin deslizamiento

Establece el resbaladizo.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withSlipperiness(slipperinessIn como float);
myBlockBuilder.withSlipperiness(0.5f);
```

| Parámetro        | Tipo     | Descripción           |
| ---------------- | -------- | --------------------- |
| deslizamiento en | flotante | El valor a establecer |


### withType

Establece el tipo específico de este bloque. Después de que este método se llama el contexto del constructor cambiará al constructor de tipo más proporcionado. Esto significa que los métodos de este constructor ya no estarán disponibles por lo que cualquier propiedad que desee establecer debe establecerse antes de llamar a este método.

 Devuelve: `Un constructor con el bloque dado.`

Tipo de retorno: T

```zenscript
myBlockBuilder.withType<T>();
myBlockBuilder.withType<mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable>();
```

| Nombre de parámetro | Límites                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------- |
| T                   | [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) |

### sin soltar

Indice a CoT que este bloque no tendrá ninguna entrada de botín. Actualmente esto todavía creará una entrada en la tabla de botes, aunque será ignorada por el juego.

 Devuelve: `Este constructor, utilizado para encadenamiento de métodos`

Tipo de retorno: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
miBlockBuilder.withoutDrops();
```

### sin MovementBlocking

Instruye CoT que este bloque no bloqueará el movimiento. También establecerá el bloque como [mods.contenttweaker.block.BlockBuilder#notSolid()](/mods/contenttweaker/API/block/BlockBuilder/#notsolid)

 Devuelve: `Este constructor, utilizado para encadenar`

Tipo de retorno: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withoutMovementBlocking();
```


