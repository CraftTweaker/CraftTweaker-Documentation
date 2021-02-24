# BlockBuilderStairs

Un Costruttore del Blocco speciale che ti consente di creare delle scale. <p> Le scale non avranno una ma ben tre texture che dovrai fornire: Una per l'apice, una per il fondo ed una per i lati. Di default queste texture useranno il tuo nome del blocco come nome, con suffisso `_top`, `_bottom` o `_sides`. Come la maggior parte delle cose qui, le immagini di esempio sono generate per voi però per impostazione predefinita.

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.block.stairs.BlockBuilderStairs
```

## Interfacce Implementate
BlockBuilderStairs implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Methods
### build

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderStairs>().build("my_awesome_block");
```

| Parameter        | Type   | Description                                      |
| ---------------- | ------ | ------------------------------------------------ |
| resourceLocation | String | Il percorso della risorsa per dare questo blocco |


### withBottomTexture

Ti consente di sovrascrivere il percorso della texture che il lato in basso dovrebbe usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Return type: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(bottomTexture as crafttweaker.api.util.MCResourceLocation);
```

| Parameter     | Type                                                                             | Description                              |
| ------------- | -------------------------------------------------------------------------------- | ---------------------------------------- |
| bottomTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture da usare per il lato in basso |



Ti consente di sovrascrivere il percorso della texture che il lato in basso dovrebbe usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Usa una funzione che prende il nome del blocco come input e restituisce la texture finale per esso.

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Return type: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(bottomTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_bottom"));
```

| Parameter     | Type                                                                                                                                                                                                    | Description          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| bottomTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |


### withSidesTexture

Ti consente di sovrascrivere il percorso della texture che i lati dovrebbero usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Return type: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
```

| Parameter    | Type                                                                             | Description                    |
| ------------ | -------------------------------------------------------------------------------- | ------------------------------ |
| sidesTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture da usare per i lati |



Ti consente di sovrascrivere il percorso della texture che i lati dovrebbero usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Usa una funzione che prende il nome del blocco come input e restituisce la texture finale per esso.

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Return type: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parameter    | Type                                                                                                                                                                                                    | Description          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| sidesTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |


### withTopTexture

Ti consente di sovrascrivere il percorso della texture che il lato superiore dovrebbe usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Return type: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(<resource:contenttweaker:my_awesome_stairs_top>);
```

| Parameter  | Type                                                                             | Description                               |
| ---------- | -------------------------------------------------------------------------------- | ----------------------------------------- |
| topTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture da usare per il lato superiore |



Ti consente di sovrascrivere il percorso della texture che il lato superiore dovrebbe usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Usa una funzione che prende il nome del blocco come input e restituisce la texture finale per esso.

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Return type: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
```

| Parameter  | Type                                                                                                                                                                                                    | Description          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| topTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |



