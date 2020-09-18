# BlockBuilder

Il blockbuilder è usato per... costruire blocchi (hai completamente non visto che uno arriva, destra... giusto?).<br> Una volta creato è possibile impostare varie proprietà che saranno delineate con i metodi separati. <p> Puoi anche cambiare il tipo di blocco per creare una forma di blocco più specializzata (e. . scale o blocchi che possono essere ruotati nello stesso modo in cui i tronchi possono). Per dire a CoT che vuoi che il blocco appaia ingame devi chiamare [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) e specificare un percorso di localizzazione delle risorse valido.

Questa classe è stata aggiunta da una mod con mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.block.BlockBuilder
```

## Interfacce Implementate
BlockBuilder implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Costruttori
Crea un nuovo BlockBuilder. Ricorda che questo _non_ creerà un nuovo blocco nel gioco, è necessario chiamare [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) per questo.
```zenscript
new mods.contenttweaker.block.BlockBuilder(material as crafttweaker.api.block.material.MCMaterial);
new mods.contenttweaker.block.BlockBuilder();
new mods.contenttweaker.block.BlockBuilder(<blockmaterial:earth>);
```
| Parametro | Tipo                                                                                 | Descrizione                         | IsOptional | Valore Predefinito           |
| --------- | ------------------------------------------------------------------------------------ | ----------------------------------- | ---------- | ---------------------------- |
| materiale | [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial) | Il materiale che questo blocco avrà | vero       | `<blockmaterial:iron>` |



## Metodi
### build

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

```zenscript
myBlockBuilder.build(resourceLocation as String);
myBlockBuilder.build("my_awesome_block");
```

| Parametro        | Tipo    | Descrizione                                      |
| ---------------- | ------- | ------------------------------------------------ |
| resourceLocation | Stringa | Il percorso della risorsa per dare questo blocco |


### notSolid

Dice a CoT che questo blocco non è solido.

 Questo è necessario se il modello non è un blocco completo (16x16x16). È anche necessario se il modello è visibile (come il vetro). Impostare questo se il blocco crea alcuni effetti X-Ray quando è posizionato.

 Restituisce: `Questo costruttore, usato per chaining`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.notSolid();
```

### withDurezzaAndResistance

Imposta i livelli di durezza e resistenza del blocco. A differenza dell'altro metodo, questo solo accetta un parametro e userà quel valore per entrambe le proprietà.

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(durezzaAndResistance as float);
myBlockBuilder.withHardnessAndResistance(0.5f);
```

| Parametro             | Tipo         | Descrizione                                      |
| --------------------- | ------------ | ------------------------------------------------ |
| hardnessAndResistance | galleggiante | Il valore da impostare per durezza e resistenza. |



Imposta i livelli di durezza e resistenza del blocco. A differenza dell'altro metodo, questo ti permette di impostare ogni proprietà ad un valore separato.

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(durezzaIn come float, resistenzaIn come float);
myBlockBuilder.withHardnessAndResistance(0.5f, 0.5f);
```

| Parametro    | Tipo         | Descrizione                               |
| ------------ | ------------ | ----------------------------------------- |
| hardnessIn   | galleggiante | Il valore da impostare per la durezza     |
| resistenzaIn | galleggiante | Il valore da impostare per la resistenza. |


### withHarvestLevel

Imposta il livello di miniera richiesto per estrarre questo blocco

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestLevel(harvestLevel as int);
myBlockBuilder.withHarvestLevel(3);
```

| Parametro           | Tipo | Descrizione                     |
| ------------------- | ---- | ------------------------------- |
| livello di raccolta | int  | Il livello di raccolta riquried |


### withHarvestTool

Imposta lo strumento necessario per raccogliere questo blocco

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestTool(harvestTool come mods.contenttweaker.item.MCToolType);
myBlockBuilder.withHarvestTool(<tooltype:shovel>);
```

| Parametro   | Tipo                                                                            | Descrizione          |
| ----------- | ------------------------------------------------------------------------------- | -------------------- |
| harvestTool | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | Il tipo di strumento |


### withItemGroup

Imposta il gruppo di elementi in cui apparirà questo blocco

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withItemGroup(group as mods.contenttweaker.item.MCItemGroup);
myBlockBuilder.withItemGroup(<itemgroup:building_blocks>);
```

| Parametro | Tipo                                                                              | Descrizione            |
| --------- | --------------------------------------------------------------------------------- | ---------------------- |
| gruppo    | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | Il gruppo da impostare |


### withLightValue

Imposta il valore di luce del blocco.

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLightValue(lightValueIn as int);
myBlockBuilder.withLightValue(15);
```

| Parametro    | Tipo | Descrizione                     |
| ------------ | ---- | ------------------------------- |
| lightValueIn | int  | Il livello di luce da impostare |


### withLootFrom

Istruirà CoT a sovrascrivere la tabella del bottino di questo blocco con quella del blocco Provideo. Attualmente questo creerà ancora una voce di tabella bottino, anche se sarà ignorato dal gioco.

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLootFrom(blockIn as crafttweaker.api.block.MCBlock);
myBlockBuilder.withLootFrom(<block:minecraft:diamond>);
```

| Parametro | Tipo                                                          | Descrizione                                               |
| --------- | ------------------------------------------------------------- | --------------------------------------------------------- |
| blockIn   | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | Il blocco il cui tavolo bottino dovrebbe essere applicato |


### withMaxStackSize

Imposta la dimensione massima dello stack che questo blocco può avere quando è nel tuo inventario. Saranno 64 se invariati.

 Restituisce: `Questo costruttore, usato per chaining`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withMaxStackSize(size as int);
myBlockBuilder.withMaxStackSize(16);
```

| Parametro  | Tipo | Descrizione                 |
| ---------- | ---- | --------------------------- |
| dimensione | int  | La dimensione da impostare. |


### withRarità

Permette di impostare la rarità di questo blocco.

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withRarity(rarity as String);
myBlockBuilder.withRarity("UNCOMMON");
```

| Parametro | Tipo    | Descrizione |
| --------- | ------- | ----------- |
| rarità    | Stringa | La rarità   |


### conSlipperiness

Imposta la scivolosità.

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withSlipperiness(slipperinessIn as float);
myBlockBuilder.withSlipperiness(0.5f);
```

| Parametro      | Tipo         | Descrizione            |
| -------------- | ------------ | ---------------------- |
| slipperinessIn | galleggiante | Il valore da impostare |


### withType

Imposta il tipo specifico di questo blocco. Dopo che questo metodo è chiamato il contesto del costruttore passerà al costruttore di tipo più fornito. Ciò significa che i metodi di questo costruttore non saranno più disponibili, quindi tutte le proprietà che si desidera impostare dovrebbero essere impostate prima di chiamare questo metodo.

 Restituisce: `Un costruttore con il blocco specificato.`

Tipo di restituzione: T

```zenscript
myBlockBuilder.withType<T>();
myBlockBuilder.withType<mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable>();
```

| Nome | Limiti                                                                                        |
| ---- | --------------------------------------------------------------------------------------------- |
| T    | [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) |

### withoutDrops

Istruirà CoT che questo blocco non avrà alcun bottino voci. Attualmente questo creerà ancora una voce di tabella bottino, anche se sarà ignorato dal gioco.

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withoutDrops();
```

### withoutMovementBlocking

Insegna a CoT che questo blocco non bloccherà il movimento. Imposterà anche il blocco come [mods.contenttweaker.block.BlockBuilder#notSolid()](/mods/contenttweaker/API/block/BlockBuilder/#notsolid)

 Restituisce: `Questo costruttore, usato per chaining`

Tipo di restituzione: [mods.contenttweaker.block.BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withoutMovementBlocking();
```


