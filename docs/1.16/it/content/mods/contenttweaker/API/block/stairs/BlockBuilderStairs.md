# BlockBuilderStairs

Un Costruttore del Blocco speciale che ti consente di creare delle scale. <p> Le scale non avranno una ma ben tre texture che dovrai fornire: Una per l'apice, una per il fondo ed una per i lati. By default these textures will use your blockname as name, suffixed by `_top`, `_bottom` or `_sides`. Come la maggior parte delle cose qui, le immagini di esempio sono generate per voi però per impostazione predefinita.

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.block.stairs.BlockBuilderScale
```

## Interfacce Implementate
BlockBuilderStairs implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
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

Allows you to override the path of the texture that the bottom side should use. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

 Returns: `This builder, used for method chaining`

Tipo di restituzione: [mods.contenttweaker.block.stairs.BlockBuilderscale](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(bottomTexture as crafttweaker.api.util.MCResourceLocation);
```

| Parameter     | Type                                                                             | Description                                |
| ------------- | -------------------------------------------------------------------------------- | ------------------------------------------ |
| bottomTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the bottom side |



Allows you to override the path of the texture that the bottom side should use. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Usa una funzione che prende il nome del blocco come input e restituisce la texture finale per esso.

 Returns: `This builder, used for method chaining`

Tipo di restituzione: [mods.contenttweaker.block.stairs.BlockBuilderscale](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(bottomTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_bottom"));
```

| Parameter     | Type                                                                                                                                                                                                    | Description          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| bottomTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |


### withSidesTexture

Allows you to override the path of the texture that the sides should use. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

 Returns: `This builder, used for method chaining`

Tipo di restituzione: [mods.contenttweaker.block.stairs.BlockBuilderscale](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
```

| Parameter    | Type                                                                             | Description                          |
| ------------ | -------------------------------------------------------------------------------- | ------------------------------------ |
| sidesTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the sides |



Allows you to override the path of the texture that the sides should use. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Usa una funzione che prende il nome del blocco come input e restituisce la texture finale per esso.

 Returns: `This builder, used for method chaining`

Tipo di restituzione: [mods.contenttweaker.block.stairs.BlockBuilderscale](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parameter    | Type                                                                                                                                                                                                    | Description          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| sidesTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |


### withTopTexture

Allows you to override the path of the texture that the top side should use. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

 Returns: `This builder, used for method chaining`

Tipo di restituzione: [mods.contenttweaker.block.stairs.BlockBuilderscale](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(<resource:contenttweaker:my_awesome_stairs_top>);
```

| Parameter  | Type                                                                             | Description                             |
| ---------- | -------------------------------------------------------------------------------- | --------------------------------------- |
| topTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The texture to be used for the top side |



Allows you to override the path of the texture that the top side should use. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Usa una funzione che prende il nome del blocco come input e restituisce la texture finale per esso.

 Returns: `This builder, used for method chaining`

Tipo di restituzione: [mods.contenttweaker.block.stairs.BlockBuilderscale](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
nuovo BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
```

| Parameter  | Type                                                                                                                                                                                                    | Description          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| topTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |



