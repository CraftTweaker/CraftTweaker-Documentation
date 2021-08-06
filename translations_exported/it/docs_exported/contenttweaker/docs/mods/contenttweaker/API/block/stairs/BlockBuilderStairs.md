# BlockBuilderStairs

Un Costruttore del Blocco speciale che ti consente di creare delle scale. <p> Le scale non avranno una ma ben tre texture che dovrai fornire: Una per l'apice, una per il fondo ed una per i lati. Di default queste texture useranno il tuo nome del blocco come nome, con suffisso `_top`, `_bottom` o `_sides`. Come la maggior parte delle cose qui, le immagini di esempio sono generate per voi però per impostazione predefinita.

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.stairs.BlockBuilderStairs;
```


## Extending BlockTypeBuilder

BlockBuilderStairs extends [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder). That means all methods available in [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) are also available in BlockBuilderStairs

## Methods

:::group{name=build}

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

Return Type: void

```zenscript
// BlockBuilderStairs.build(resourceLocation as string) as void

new BlockBuilder().withType<BlockBuilderStairs>().build("my_awesome_block");
```

| Parameter        | Type   | Description                                      |
| ---------------- | ------ | ------------------------------------------------ |
| resourceLocation | string | Il percorso della risorsa per dare questo blocco |


:::

:::group{name=withBottomTexture}

Ti consente di sovrascrivere il percorso della texture che il lato in basso dovrebbe usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Usa una funzione che prende il nome del blocco come input e restituisce la texture finale per esso.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
// BlockBuilderStairs.withBottomTexture(bottomTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderStairs

new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_bottom"));
```

| Parameter     | Type                                                                                                                                              | Description          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| bottomTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |


:::

:::group{name=withBottomTexture}

Ti consente di sovrascrivere il percorso della texture che il lato in basso dovrebbe usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
BlockBuilderStairs.withBottomTexture(bottomTexture as MCResourceLocation) as BlockBuilderStairs
```

| Parameter     | Type                                                       | Description                              |
| ------------- | ---------------------------------------------------------- | ---------------------------------------- |
| bottomTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture da usare per il lato in basso |


:::

:::group{name=withSidesTexture}

Ti consente di sovrascrivere il percorso della texture che i lati dovrebbero usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Usa una funzione che prende il nome del blocco come input e restituisce la texture finale per esso.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
// BlockBuilderStairs.withSidesTexture(sidesTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderStairs

new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parameter    | Type                                                                                                                                              | Description          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| sidesTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |


:::

:::group{name=withSidesTexture}

Ti consente di sovrascrivere il percorso della texture che i lati dovrebbero usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
BlockBuilderStairs.withSidesTexture(sidesTexture as MCResourceLocation) as BlockBuilderStairs
```

| Parameter    | Type                                                       | Description                    |
| ------------ | ---------------------------------------------------------- | ------------------------------ |
| sidesTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture da usare per i lati |


:::

:::group{name=withTopTexture}

Ti consente di sovrascrivere il percorso della texture che il lato superiore dovrebbe usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Usa una funzione che prende il nome del blocco come input e restituisce la texture finale per esso.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
BlockBuilderStairs.withTopTexture(topTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderStairs
```

| Parameter  | Type                                                                                                                                              | Description          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| topTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |


:::

:::group{name=withTopTexture}

Ti consente di sovrascrivere il percorso della texture che il lato superiore dovrebbe usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

Return Type: [BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
// BlockBuilderStairs.withTopTexture(topTexture as MCResourceLocation) as BlockBuilderStairs

new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(<resource:contenttweaker:my_awesome_stairs_top>);
```

| Parameter  | Type                                                       | Description                               |
| ---------- | ---------------------------------------------------------- | ----------------------------------------- |
| topTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture da usare per il lato superiore |


:::


