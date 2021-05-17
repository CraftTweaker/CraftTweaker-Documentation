# BlockBuilderPillarRotatable

Un Costruttore di Blocchi speciale che ti consente di creare blocchi che possono essere ruotati esattamente come i tronchi. <p> Questo significa che ha una texture per la parte superiore e inferiore ed una per i lati. Per impostazione predefinita, le posizioni di questi lati sono il nome del blocco, seguito da `_end` o `sides`. Come la maggior parte delle cose qui, le immagini di esempio sono generate per voi però per impostazione predefinita.

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable;
```


## Extending BlockTypeBuilder

BlockBuilderPillarRotatable extends [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder). That means all methods available in [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) are also available in BlockBuilderPillarRotatable

## Methods

:::group{name=build}

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

Return Type: void

```zenscript
// BlockBuilderPillarRotatable.build(resourceLocation as string) as void

new BlockBuilder().withType<BlockBuilderPillarRotatable>().build("my_awesome_block");
```

| Parameter        | Type   | Description                                      |
| ---------------- | ------ | ------------------------------------------------ |
| resourceLocation | string | Il percorso della risorsa per dare questo blocco |


:::

:::group{name=withEndTexture}

Ti consente di sovrascrivere il percorso della texture che i lati finali (sopra/sotto) dovrebbero usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Usa una funzione che prende il nome del blocco come input e restituisce la texture finale per esso.

Return Type: [BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
// BlockBuilderPillarRotatable.withEndTexture(endTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderPillarRotatable

new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_end"));
```

| Parameter  | Type                                                                                                                                              | Description          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| endTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |


:::

:::group{name=withEndTexture}

Ti consente di sovrascrivere il percorso della texture che i lati finali (sopra/sotto) dovrebbero usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

Return Type: [BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
// BlockBuilderPillarRotatable.withEndTexture(endTexture as MCResourceLocation) as BlockBuilderPillarRotatable

new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(<resource:contenttweaker:my_awesome_pillar_end>);
```

| Parameter  | Type                                                       | Description                            |
| ---------- | ---------------------------------------------------------- | -------------------------------------- |
| endTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture da usare per i lati finali. |


:::

:::group{name=withSideTexture}

Ti consente di sovrascrivere il percorso della texture che i lati (tutto tranne sopra/sotto) dovrebbero usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita. Uses a function that takes the block's name as input and returns the side texture for it.

Return Type: [BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
// BlockBuilderPillarRotatable.withSideTexture(sidesTexture as Function<MCResourceLocation,MCResourceLocation>) as BlockBuilderPillarRotatable

new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture((blockName as ResourceLocation) => new ResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parameter    | Type                                                                                                                                              | Description          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| sidesTexture | Function&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | La funzione da usare |


:::

:::group{name=withSideTexture}

Ti consente di sovrascrivere il percorso della texture che i lati (tutto tranne sopra/sotto) dovrebbero usare. Se lo spazio dei nomi di quella texture sono nello spazio dei nomi di CoT o ognuno dei suoi addon (che lo supportano) allora l'immagine sarà creata per impostazione predefinita.

Return Type: [BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
// BlockBuilderPillarRotatable.withSideTexture(sidesTexture as MCResourceLocation) as BlockBuilderPillarRotatable

new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(<resource:contenttweaker:my_awesome_pillar_side>);
```

| Parameter    | Type                                                       | Description                     |
| ------------ | ---------------------------------------------------------- | ------------------------------- |
| sidesTexture | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | La texture da usare per i lati. |


:::


