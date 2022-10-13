# BlockBuilder

Il blockbuilder è usato per... costruire blocchi (non te lo aspettavi, vero... vero?).<br> Una volta che lo hai creato puoi impostare varie proprietà che saranno delineate dai metodi separati.

 Puoi anche modificare il tipo del blocco per creare una forma più specializzata del blocco (es. scale o Blocchi ruotabili allo stesso modo dei tronchi). To tell CoT that you want the block to appear ingame you need to call [this](.)#build(String) and specify a valid resource location path.

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.BlockBuilder;
```


## Interfacce Implementate
BlockBuilder implementa le seguenti interfacce. That means all methods defined in these interfaces are also available in BlockBuilder

- [IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructors

Crea un nuovo BlockBuilder <br />  Remember that this will _not_ create a new block in the game, you need to call [this](.)#build(String) for that.
```zenscript
new BlockBuilder(material as MCMaterial) as BlockBuilder
new BlockBuilder(<blockmaterial:earth>);
```
| Parametro | Tipo                                                 | Descrizione                                  | Optional | DefaultValue         |
| --------- | ---------------------------------------------------- | -------------------------------------------- | -------- | -------------------- |
| material  | [MCMaterial](/vanilla/api/block/material/MCMaterial) | Il materiale di cui sarà fatto questo blocco | sì       | <blockmaterial:iron> |



## Metodi

:::group{name=notSolid}

Instructs CoT that this block is not solid.

 This is required if your model is not a full block (16x16x16). It is also required if your model is see-through (like glass). Set this if your block creates some X-Ray effects when it's placed.

Returns: This builder, used for chaining  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.notSolid() as BlockBuilder

myBlockBuilder.notSolid();
```

:::

:::group{name=opaque}

Sets that the block is opaque, like vanilla glass.

Returns: The builder, used for method chaining.  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.opaque() as BlockBuilder

myBlockBuilder.opaque();
```

:::

:::group{name=setRequiresTool}

Sets that the block needs a tool to harvest.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.setRequiresTool() as BlockBuilder

myBlockBuilder.setRequiresTool();
```

:::

:::group{name=withHardnessAndResistance}

Imposta i livelli di durezza e resistenza del blocco. A differenza dell'altro metodo, questo accetta solo un parametro e userà quel valore per entrambe le proprietà.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withHardnessAndResistance(hardnessAndResistance as float) as BlockBuilder

myBlockBuilder.withHardnessAndResistance(0.5f);
```

| Parametro             | Tipo  | Descrizione                                            |
| --------------------- | ----- | ------------------------------------------------------ |
| hardnessAndResistance | float | Il valore da impostare per la durezza e la resistenza. |


:::

:::group{name=withHardnessAndResistance}

Imposta i livelli di durezza e resistenza del blocco. A differenza dell'altro metodo, questo ti consente di impostare ogni proprietà a un valore separato.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withHardnessAndResistance(hardnessIn as float, resistanceIn as float) as BlockBuilder

myBlockBuilder.withHardnessAndResistance(0.5f, 0.5f);
```

| Parametro    | Tipo  | Descrizione                              |
| ------------ | ----- | ---------------------------------------- |
| hardnessIn   | float | Il valore da impostare per la durezza    |
| resistanceIn | float | Il valore da impostare per la resistenza |


:::

:::group{name=withHarvestLevel}

Imposta il livello di scavo necessario per scavare questo blocco

Returns: This builder, used for method chaining  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withHarvestLevel(harvestLevel as int) as BlockBuilder

myBlockBuilder.withHarvestLevel(3);
```

| Parametro    | Tipo | Descrizione                      |
| ------------ | ---- | -------------------------------- |
| harvestLevel | int  | Il livello di raccolta richiesto |


:::

:::group{name=withHarvestTool}

Imposta lo strumento necessario per raccogliere questo blocco

Returns: This builder, used for method chaining  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withHarvestTool(harvestTool as ToolType) as BlockBuilder

myBlockBuilder.withHarvestTool(<tooltype:shovel>);
```

| Parametro   | Tipo                                   | Descrizione          |
| ----------- | -------------------------------------- | -------------------- |
| harvestTool | [ToolType](/vanilla/api/tool/ToolType) | Il tipo di strumento |


:::

:::group{name=withItemGroup}

Imposta il gruppo di oggetti in cui comparirà questo blocco

Returns: This builder, used for method chaining  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withItemGroup(group as ItemGroup) as BlockBuilder

myBlockBuilder.withItemGroup(<itemgroup:building_blocks>);
```

| Parametro | Tipo                                     | Descrizione            |
| --------- | ---------------------------------------- | ---------------------- |
| gruppo    | [ItemGroup](/vanilla/api/item/ItemGroup) | Il gruppo da impostare |


:::

:::group{name=withJumpFactor}

Sets the jump factor.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withJumpFactor(jumpFactorIn as float) as BlockBuilder

myBlockBuilder.withJumpFactor(2.5f);
```

| Parametro    | Tipo  | Descrizione            |
| ------------ | ----- | ---------------------- |
| jumpFactorIn | float | Il valore da impostare |


:::

:::group{name=withLightValue}

Imposta il valore di luce del blocco

Returns: This builder, used for method chaining  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withLightValue(lightValueIn as int) as BlockBuilder

myBlockBuilder.withLightValue(15);
```

| Parametro    | Tipo | Descrizione                     |
| ------------ | ---- | ------------------------------- |
| lightValueIn | int  | Il livello di luce da impostare |


:::

:::group{name=withLootFrom}

Istruirà CoT per sovrascrivere la tabella del bottino di questo blocco con quella del blocco Fornito. Attualmente creerà ancora una voce della tabella del bottino, sebbene sarà ignorata dal gioco.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withLootFrom(blockIn as MCBlock) as BlockBuilder

myBlockBuilder.withLootFrom(<block:minecraft:diamond>);
```

| Parametro | Tipo                                  | Descrizione                                                   |
| --------- | ------------------------------------- | ------------------------------------------------------------- |
| blockIn   | [MCBlock](/vanilla/api/block/MCBlock) | Il blocco di cui si dovrebbe applicare la tabella del bottino |


:::

:::group{name=withMaxStackSize}

Imposta la dimensione massima dello Stack che questo blocco può avere quando nel tuo inventario. Sarà 64 se invariata.

Returns: This builder, used for chaining  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withMaxStackSize(size as int) as BlockBuilder

myBlockBuilder.withMaxStackSize(16);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| size      | int  | La dimensione da impostare. |


:::

:::group{name=withRarity}

Ti consente di impostare la rarità di questo blocco.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withRarity(rarity as string) as BlockBuilder

myBlockBuilder.withRarity("UNCOMMON");
```

| Parametro | Tipo   | Descrizione |
| --------- | ------ | ----------- |
| rarity    | string | La rarità   |


:::

:::group{name=withRenderType}

Sets the block's render type. Will also set the block as [this](.)#notSolid() if the argument is not solid

Returns: This builder, used for method chaining  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withRenderType(renderType as BlockRenderType) as BlockBuilder

myBlockBuilder.withRenderType(BlockRenderType.TRANSLUCENT);
```

| Parametro  | Tipo                                                              | Descrizione             |
| ---------- | ----------------------------------------------------------------- | ----------------------- |
| renderType | [BlockRenderType](/mods/contenttweaker/API/block/BlockRenderType) | No Description Provided |


:::

:::group{name=withSlipperiness}

Imposta la scivolosità

Returns: This builder, used for method chaining  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withSlipperiness(slipperinessIn as float) as BlockBuilder

myBlockBuilder.withSlipperiness(0.5f);
```

| Parametro      | Tipo  | Descrizione            |
| -------------- | ----- | ---------------------- |
| slipperinessIn | float | Il valore da impostare |


:::

:::group{name=withSpeedFactor}

Sets the speed factor.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withSpeedFactor(speedFactorIn as float) as BlockBuilder

myBlockBuilder.withSpeedFactor(2.5f);
```

| Parametro     | Tipo  | Descrizione            |
| ------------- | ----- | ---------------------- |
| speedFactorIn | float | Il valore da impostare |


:::

:::group{name=withTickRandomly}

Sets that the block should be ticked randomly.

Returns: The builder, used for method chaining.  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withTickRandomly() as BlockBuilder

myBlockBuilder.withTickRandomly();
```

:::

:::group{name=withType}

Imposta il tipo specifico di questo blocco. Dopo aver chiamato questo metodo il contesto del builder passerà al builder del tipo più fornito. Questo significa che i metodi di questo builder non saranno più disponibili, quindi ogni proprietà che desideri impostare dovrà essere impostata prima di chiamare questo metodo.

Returns: A builder with the given block.  
Return Type: T

```zenscript
BlockBuilder.withType<T : BlockTypeBuilder>() as T
```

| Parametro | Tipo                                                                | Descrizione                               |
| --------- | ------------------------------------------------------------------- | ----------------------------------------- |
| T         | [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) | The Type of block that this should become |


:::

:::group{name=withVariableOpacity}

Sets that the block has variable opacity.

Returns: The builder, used for method chaining.  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withVariableOpacity() as BlockBuilder

myBlockBuilder.withVariableOpacity();
```

:::

:::group{name=withoutDrops}

Istruirà il CoT che questo blocco non avrà alcuna voce del bottino. Attualmente creerà ancora una voce della tabella del bottino, sebbene sarà ignorata dal gioco.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withoutDrops() as BlockBuilder

myBlockBuilder.withoutDrops();
```

:::

:::group{name=withoutMovementBlocking}

Istruisce il CoT che questo blocco non bloccherà il movimento. Will also set the block as [this](.)#notSolid()

Returns: This builder, used for chaining  
Return Type: [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
// BlockBuilder.withoutMovementBlocking() as BlockBuilder

myBlockBuilder.withoutMovementBlocking();
```

:::


