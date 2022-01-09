# BlockBuilderFalling

A special builder that allows you to create falling blocks.

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.basic.BlockBuilderFalling;
```


## Extending BlockTypeBuilder

BlockBuilderFalling extends [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder). That means all methods available in [BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) are also available in BlockBuilderFalling

## Metodi

:::group{name=build}

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

Return Type: void

```zenscript
// BlockBuilderFalling.build(resourceLocation as string) as void

new BlockBuilder().withType<BlockBuilderFalling>().build("my_awesome_block");
```

| Parametro        | Tipo   | Descrizione                                      |
| ---------------- | ------ | ------------------------------------------------ |
| resourceLocation | string | Il percorso della risorsa per dare questo blocco |


:::

:::group{name=withDustColor}

Allows you to override the dust color of this falling block. The dust color is used when the block is floating with nothing beneath it.

Returns: This builder, used for method chaining  
Return Type: [BlockBuilderFalling](/mods/contenttweaker/API/block/basic/BlockBuilderFalling)

```zenscript
// BlockBuilderFalling.withDustColor(dustFunc as IFallingBlockDustColorSupplier) as BlockBuilderFalling

new BlockBuilder().withType<BlockBuilderFalling>().withDustColor((thisBlock, state, reader, pos) => 0xFF55FF);
```

| Parametro | Tipo                                                                                                | Descrizione                                |
| --------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| dustFunc  | [IFallingBlockDustColorSupplier](/mods/contenttweaker/API/functions/IFallingBlockDustColorSupplier) | The function that provides the dust color. |


:::


