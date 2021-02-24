# BlockBuilder

Il blockbuilder è usato per... costruire blocchi (non te lo aspettavi, vero... vero?).<br> Una volta che lo hai creato puoi impostare varie proprietà che saranno delineate dai metodi separati. <p> Puoi anche modificare il tipo del blocco per creare una forma più specializzata del blocco (es. scale o Blocchi ruotabili allo stesso modo dei tronchi). Per dire al CoT che vuoi che il blocco compaia in gioco devi chiamare [mods.contettweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) e specificare un percorso di posizione della risorsa valido.

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.block.BlockBuilder
```

## Interfacce Implementate
BlockBuilder implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Constructors
Crea un nuovo BlockBuilder Ricorda che questo _non_ creerà un nuovo blocco nel gioco, per questo devi chiamare [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build).
```zenscript
new mods.contenttweaker.block.BlockBuilder(material as crafttweaker.api.block.material.MCMaterial);
new mods.contenttweaker.block.BlockBuilder();
new mods.contenttweaker.block.BlockBuilder(<blockmaterial:earth>);
```
| Parameter | Type                                                                                 | Description                                  | IsOptional | Default Value                |
| --------- | ------------------------------------------------------------------------------------ | -------------------------------------------- | ---------- | ---------------------------- |
| material  | [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial) | Il materiale di cui sarà fatto questo blocco | true       | `<blockmaterial:iron>` |



## Methods
### build

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

```zenscript
myBlockBuilder.build(resourceLocation as String);
myBlockBuilder.build("my_awesome_block");
```

| Parameter        | Type   | Description                                      |
| ---------------- | ------ | ------------------------------------------------ |
| resourceLocation | String | Il percorso della risorsa per dare questo blocco |


### withHardnessAndResistance

Imposta i livelli di durezza e resistenza del blocco. A differenza dell'altro metodo, questo accetta solo un parametro e userà quel valore per entrambe le proprietà.

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(hardnessAndResistance as float);
myBlockBuilder.withHardnessAndResistance(0.5f);
```

| Parameter             | Type  | Description                                            |
| --------------------- | ----- | ------------------------------------------------------ |
| hardnessAndResistance | float | Il valore da impostare per la durezza e la resistenza. |



Imposta i livelli di durezza e resistenza del blocco. A differenza dell'altro metodo, questo ti consente di impostare ogni proprietà a un valore separato.

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(hardnessIn as float, resistanceIn as float);
myBlockBuilder.withHardnessAndResistance(0.5f, 0.5f);
```

| Parameter    | Type  | Description                              |
| ------------ | ----- | ---------------------------------------- |
| hardnessIn   | float | Il valore da impostare per la durezza    |
| resistanceIn | float | Il valore da impostare per la resistenza |


### withHarvestLevel

Imposta il livello di scavo necessario per scavare questo blocco

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestLevel(harvestLevel as int);
myBlockBuilder.withHarvestLevel(3);
```

| Parameter    | Type | Description                      |
| ------------ | ---- | -------------------------------- |
| harvestLevel | int  | Il livello di raccolta richiesto |


### withHarvestTool

Imposta lo strumento necessario per raccogliere questo blocco

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestTool(harvestTool as mods.contenttweaker.item.MCToolType);
myBlockBuilder.withHarvestTool(<tooltype:shovel>);
```

| Parameter   | Type                                                                            | Description          |
| ----------- | ------------------------------------------------------------------------------- | -------------------- |
| harvestTool | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | Il tipo di strumento |


### withItemGroup

Imposta il gruppo di oggetti in cui comparirà questo blocco

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withItemGroup(group as mods.contenttweaker.item.MCItemGroup);
myBlockBuilder.withItemGroup(<itemgroup:building_blocks>);
```

| Parameter | Type                                                                              | Description            |
| --------- | --------------------------------------------------------------------------------- | ---------------------- |
| gruppo    | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | Il gruppo da impostare |


### withLightValue

Imposta il valore di luce del blocco

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLightValue(lightValueIn as int);
myBlockBuilder.withLightValue(15);
```

| Parameter    | Type | Description                     |
| ------------ | ---- | ------------------------------- |
| lightValueIn | int  | Il livello di luce da impostare |


### withLootFrom

Istruirà CoT per sovrascrivere la tabella del bottino di questo blocco con quella del blocco Fornito. Attualmente creerà ancora una voce della tabella del bottino, sebbene sarà ignorata dal gioco.

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLootFrom(blockIn as crafttweaker.api.block.MCBlock);
myBlockBuilder.withLootFrom(<block:minecraft:diamond>);
```

| Parameter | Type                                                          | Description                                                   |
| --------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| blockIn   | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | Il blocco di cui si dovrebbe applicare la tabella del bottino |


### withMaxStackSize

Imposta la dimensione massima dello Stack che questo blocco può avere quando nel tuo inventario. Sarà 64 se invariata.

 Restituisce: `Questo builder, usato per l'incatenamento`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withMaxStackSize(size as int);
myBlockBuilder.withMaxStackSize(16);
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| size      | int  | La dimensione da impostare. |


### withRarity

Ti consente di impostare la rarità di questo blocco.

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withRarity(rarity as String);
myBlockBuilder.withRarity("UNCOMMON");
```

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| rarity    | String | La rarità   |


### withSlipperiness

Imposta la scivolosità

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withSlipperiness(slipperinessIn as float);
myBlockBuilder.withSlipperiness(0.5f);
```

| Parameter      | Type  | Description            |
| -------------- | ----- | ---------------------- |
| slipperinessIn | float | Il valore da impostare |


### withType

Imposta il tipo specifico di questo blocco. Dopo aver chiamato questo metodo il contesto del builder passerà al builder del tipo più fornito. Questo significa che i metodi di questo builder non saranno più disponibili, quindi ogni proprietà che desideri impostare dovrà essere impostata prima di chiamare questo metodo.

 Restituisce: `Un builder con il blocco dato.`

Tipo di restituzione: T

```zenscript
myBlockBuilder.withType<T>();
myBlockBuilder.withType<mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable>();
```

| ParameterName | Limiti                                                                                        |
| ------------- | --------------------------------------------------------------------------------------------- |
| T             | [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) |

### withoutDrops

Istruirà il CoT che questo blocco non avrà alcuna voce del bottino. Attualmente creerà ancora una voce della tabella del bottino, sebbene sarà ignorata dal gioco.

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withoutDrops();
```

### withoutMovementBlocking

Istruisce il CoT che questo blocco non bloccherà il movimento.

 Restituisce: `Questo builder, usato per l'incatenamento`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withoutMovementBlocking();
```


