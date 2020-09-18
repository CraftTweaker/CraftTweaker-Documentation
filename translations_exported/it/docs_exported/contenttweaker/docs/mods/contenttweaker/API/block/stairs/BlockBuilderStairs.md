# BlockBuilderStairs

Un Costruttore del Blocco speciale che ti consente di creare delle scale. <p> Le scale non avranno una ma ben tre texture che dovrai fornire: Una per l'apice, una per il fondo ed una per i lati. Per impostazione predefinita, queste texture useranno il tuo blockname come nome, suffisso da `_top`, `_bottom` o `_sides`. Come la maggior parte delle cose qui, le immagini di esempio sono generate per voi però per impostazione predefinita.

Questa classe è stata aggiunta da una mod con mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.block.stairs.BlockBuilderScale
```

## Interfacce Implementate
BlockBuilderStairs implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Metodi
### build

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderStairs>().build("my_awesome_block");
```

| Parametro        | Tipo    | Descrizione                                      |
| ---------------- | ------- | ------------------------------------------------ |
| resourceLocation | Stringa | Il percorso della risorsa per dare questo blocco |


### withBottomTexture

Permette di sovrascrivere il percorso della trama che il lato inferiore dovrebbe usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.stairs.BlockBuilderscale](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(bottomTexture as crafttweaker.api.util.MCResourceLocation);
```

| Parametro     | Tipo                                                                             | Descrizione                             |
| ------------- | -------------------------------------------------------------------------------- | --------------------------------------- |
| bottomTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La trama da usare per il lato inferiore |



Permette di sovrascrivere il percorso della trama che il lato inferiore dovrebbe usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Usa una funzione che prende il nome del blocco come input e restituisce la texture finale per esso.

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.stairs.BlockBuilderscale](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(bottomTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_bottom"));
```

| Parametro     | Tipo                                                                                                                                                                                                    | Descrizione          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| bottomTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |


### withSidesTexture

Permette di sovrascrivere il percorso della trama che i lati dovrebbero usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.stairs.BlockBuilderscale](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
```

| Parametro    | Tipo                                                                             | Descrizione                  |
| ------------ | -------------------------------------------------------------------------------- | ---------------------------- |
| sidesTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La trama da usare per i lati |



Permette di sovrascrivere il percorso della trama che i lati dovrebbero usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Usa una funzione che prende il nome del blocco come input e restituisce la texture finale per esso.

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.stairs.BlockBuilderscale](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parametro    | Tipo                                                                                                                                                                                                    | Descrizione          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| sidesTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |


### withTopTexture

Permette di sovrascrivere il percorso della trama che il lato superiore dovrebbe usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.stairs.BlockBuilderscale](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(<resource:contenttweaker:my_awesome_stairs_top>);
```

| Parametro  | Tipo                                                                             | Descrizione                             |
| ---------- | -------------------------------------------------------------------------------- | --------------------------------------- |
| topTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La trama da usare per il lato superiore |



Permette di sovrascrivere il percorso della trama che il lato superiore dovrebbe usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Usa una funzione che prende il nome del blocco come input e restituisce la texture finale per esso.

 Restituisce: `Questo costruttore, usato per la catena di metodi`

Tipo di restituzione: [mods.contenttweaker.block.stairs.BlockBuilderscale](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
nuovo BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
```

| Parametro  | Tipo                                                                                                                                                                                                    | Descrizione          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| topTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |



