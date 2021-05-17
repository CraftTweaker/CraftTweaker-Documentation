# ItemTypeBuilder

Denotes a special builder that is used for builing special item types. Used in [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)#withType

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.item.ItemTypeBuilder;
```


## Interfacce Implementate
ItemTypeBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in ItemTypeBuilder

- [IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Methods

:::group{name=build}

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

Return Type: void

```zenscript
// ItemTypeBuilder.build(resourceLocation as string) as void

new ItemBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Parameter        | Type   | Description                                      |
| ---------------- | ------ | ------------------------------------------------ |
| resourceLocation | string | Il percorso della risorsa per dare questo blocco |


:::


