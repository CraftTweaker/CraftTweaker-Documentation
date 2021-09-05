# BlockBuilderSlab

A special builder that allows you to create slabs.

 <p> By default, this has 3 textures, one for the top, bottom and the sides. Come la maggior parte delle cose qui, le immagini di esempio sono generate per voi però per impostazione predefinita.

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.slab.BlockBuilderSlab;
```


## Extending BlockTypeBuilder

BlockBuilderSlab extends [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder). That means all methods available in [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) are also available in BlockBuilderSlab

## Methods

:::group{name=build}

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

Return Type: void

```zenscript
// BlockBuilderSlab.build(resourceLocation as string) as void

new BlockBuilder().withType<BlockBuilderSlab>().build("my_awesome_block");
```

| Parameter        | Type   | Description                                      |
| ---------------- | ------ | ------------------------------------------------ |
| resourceLocation | string | Il percorso della risorsa per dare questo blocco |


:::

:::group{name=withBottomTexture}

Allows you to override the path of the texture that the bottom should use. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Uses a function that takes the block's name as input and returns the bottom texture for it.

Return Type: [BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
// BlockBuilderSlab.withBottomTexture(bottomTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderSlab

new BlockBuilder().withType<BlockBuilderSlab>().withBottomTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_top"));
```

| Parameter     | Type                                                                                                                                              | Description          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| bottomTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |


:::

:::group{name=withBottomTexture}

Allows you to override the path of the texture that the bottom should use. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

Return Type: [BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
// BlockBuilderSlab.withBottomTexture(bottomTexture as MCResourceLocation) as BlockBuilderSlab

new BlockBuilder().withType<BlockBuilderSlab>().withBottomTexture(<resource:contenttweaker:my_awesome_slab_bottom>);
```

| Parameter     | Type                                                       | Description                     |
| ------------- | ---------------------------------------------------------- | ------------------------------- |
| bottomTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture da usare per i lati. |


:::

:::group{name=withSideTexture}

Ti consente di sovrascrivere il percorso della texture che i lati (tutto tranne sopra/sotto) dovrebbero usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Uses a function that takes the block's name as input and returns the sides texture for it.

Return Type: [BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
// BlockBuilderSlab.withSideTexture(sidesTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderSlab

new BlockBuilder().withType<BlockBuilderSlab>().withSideTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parameter    | Type                                                                                                                                              | Description          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| sidesTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |


:::

:::group{name=withSideTexture}

Ti consente di sovrascrivere il percorso della texture che i lati (tutto tranne sopra/sotto) dovrebbero usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

Return Type: [BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
// BlockBuilderSlab.withSideTexture(sidesTexture as MCResourceLocation) as BlockBuilderSlab

new BlockBuilder().withType<BlockBuilderSlab>().withSideTexture(<resource:contenttweaker:my_awesome_slab_side>);
```

| Parameter    | Type                                                       | Description                     |
| ------------ | ---------------------------------------------------------- | ------------------------------- |
| sidesTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture da usare per i lati. |


:::

:::group{name=withTopTexture}

Allows you to override the path of the texture that the top should use. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Uses a function that takes the block's name as input and returns the top texture for it.

Return Type: [BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
// BlockBuilderSlab.withTopTexture(topTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderSlab

new BlockBuilder().withType<BlockBuilderSlab>().withTopTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_top"));
```

| Parameter  | Type                                                                                                                                              | Description          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| topTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |


:::

:::group{name=withTopTexture}

Allows you to override the path of the texture that the top should use. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

Return Type: [BlockBuilderSlab](/mods/contenttweaker/API/block/slab/BlockBuilderSlab)

```zenscript
// BlockBuilderSlab.withTopTexture(topTexture as MCResourceLocation) as BlockBuilderSlab

new BlockBuilder().withType<BlockBuilderSlab>().withTopTexture(<resource:contenttweaker:my_awesome_slab_top>);
```

| Parameter  | Type                                                       | Description                     |
| ---------- | ---------------------------------------------------------- | ------------------------------- |
| topTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture da usare per i lati. |


:::


