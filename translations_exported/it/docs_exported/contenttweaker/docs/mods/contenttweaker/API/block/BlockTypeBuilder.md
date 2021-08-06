# BlockTypeBuilder

Denota un builder speciale usato per costruire tipi di blocchi speciali. Used in [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder)#withType

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.BlockTypeBuilder;
```


## Interfacce Implementate
BlockTypeBuilder implementa le seguenti interfacce. That means all methods defined in these interfaces are also available in BlockTypeBuilder

- [IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Methods

:::group{name=build}

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

Return Type: void

```zenscript
// BlockTypeBuilder.build(resourceLocation as string) as void

new BlockBuilder().withType<BlockBuilderBasic>().build("my_awesome_block");
```

| Parameter        | Type   | Description                                      |
| ---------------- | ------ | ------------------------------------------------ |
| resourceLocation | string | Il percorso della risorsa per dare questo blocco |


:::


