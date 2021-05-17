# ItemBuilderBasic

The basic builder for items, also called by ItemBuilder#build. Non ha alcuna proprietà speciale, esiste.

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.item.basic.ItemBuilderBasic;
```


## Extending ItemTypeBuilder

ItemBuilderBasic extends [ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder). That means all methods available in [ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) are also available in ItemBuilderBasic

## Methods

:::group{name=build}

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

Return Type: void

```zenscript
// ItemBuilderBasic.build(resourceLocation as string) as void

new ItemBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Parameter        | Type   | Description                                      |
| ---------------- | ------ | ------------------------------------------------ |
| resourceLocation | string | Il percorso della risorsa per dare questo blocco |


:::


