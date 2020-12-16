# BlockBuilderSlab

A special builder that allows you to create slabs.

 <p> By default, this has 3 textures, one for the top, bottom and the sides. Come la maggior parte delle cose qui, le immagini di esempio sono generate per voi però per impostazione predefinita.

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
mods.contenttweaker.block.slab.BlockBuilderSlab
```

## Interfacce Implementate
BlockBuilderSlab implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Methods
### build

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderSlab>().build("my_awesome_block");
```

| Parameter        | Type   | Description                                      |
| ---------------- | ------ | ------------------------------------------------ |
| resourceLocation | String | Il percorso della risorsa per dare questo blocco |


### withBottomTexture

Allows you to override the path of the texture that the bottom should use. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Return type: [mods.contenttweaker.block.slab.BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().withBottomTexture(bottomTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderSlab>().withBottomTexture(<resource:contenttweaker:my_awesome_slab_bottom>);
```

| Parameter     | Type                                                                             | Description                     |
| ------------- | -------------------------------------------------------------------------------- | ------------------------------- |
| bottomTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture da usare per i lati. |



Allows you to override the path of the texture that the bottom should use. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Uses a function that takes the block's name as input and returns the bottom texture for it.

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Return type: [mods.contenttweaker.block.slab.BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().withBottomTexture(bottomTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderSlab>().withBottomTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_top"));
```

| Parameter     | Type                                                                                                                                                                                                    | Description          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| bottomTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |


### withSideTexture

Ti consente di sovrascrivere il percorso della texture che i lati (tutto tranne sopra/sotto) dovrebbero usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Return type: [mods.contenttweaker.block.slab.BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().withSideTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderSlab>().withSideTexture(<resource:contenttweaker:my_awesome_slab_side>);
```

| Parameter    | Type                                                                             | Description                     |
| ------------ | -------------------------------------------------------------------------------- | ------------------------------- |
| sidesTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture da usare per i lati. |



Ti consente di sovrascrivere il percorso della texture che i lati (tutto tranne sopra/sotto) dovrebbero usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Uses a function that takes the block's name as input and returns the sides texture for it.

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Return type: [mods.contenttweaker.block.slab.BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().withSideTexture(sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderSlab>().withSideTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parameter    | Type                                                                                                                                                                                                    | Description          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| sidesTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |


### withTopTexture

Allows you to override the path of the texture that the top should use. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Return type: [mods.contenttweaker.block.slab.BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().withTopTexture(topTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderSlab>().withTopTexture(<resource:contenttweaker:my_awesome_slab_top>);
```

| Parameter  | Type                                                                             | Description                     |
| ---------- | -------------------------------------------------------------------------------- | ------------------------------- |
| topTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture da usare per i lati. |



Allows you to override the path of the texture that the top should use. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Uses a function that takes the block's name as input and returns the top texture for it.

 Restituisce: `Questo builder, usato per l'incatenamento del metodo`

Return type: [mods.contenttweaker.block.slab.BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
new BlockBuilder().withType<BlockBuilderSlab>().withTopTexture(topTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderSlab>().withTopTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_top"));
```

| Parameter  | Type                                                                                                                                                                                                    | Description          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| topTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |



