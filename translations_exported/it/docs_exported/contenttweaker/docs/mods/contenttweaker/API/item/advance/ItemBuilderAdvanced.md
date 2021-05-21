# ItemBuilderAdvanced

A special builder that allows you create items with advanced functionality. This build doesn't provide extra methods. You should use advanced item bracket handler to get [CoTItemAdvanced](/mods/contenttweaker/API/item/advance/CoTItemAdvanced) instance and set functions in CraftTweaker scripts later.

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.item.advance.ItemBuilderAdvanced;
```


## Extending ItemTypeBuilder

ItemBuilderAdvanced extends [ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder). That means all methods available in [ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) are also available in ItemBuilderAdvanced

## Methods

:::group{name=build}

Istruisce CoT per costruire realmente qualsiasi cosa il costruttore dovrebbe star costruendo.

Return Type: void

```zenscript
// ItemBuilderAdvanced.build(resourceLocation as string) as void

new ItemBuilder().withType<ItemBuilderAdvanced>().build("my_awesome_block");
```

| Parameter        | Type   | Description                                      |
| ---------------- | ------ | ------------------------------------------------ |
| resourceLocation | string | Il percorso della risorsa per dare questo blocco |


:::


