# ItemBuilderBasic

The basic builder for items, also called by [mods.contenttweaker.item.basic.ItemBuilderBasic#build](/mods/contenttweaker/API/item/basic/ItemBuilderBasic/#build). Does not have any special properties, it exists.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importation de la classe
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
mods.contenttweaker.item.basic.ItemBuilderBasic
```

## Implemented Interfaces
ItemBuilderBasic implements the following interfaces. That means any method available to them can also be used on this class.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder)

## Méthodes
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new ItemBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new ItemBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Paramètre        | Type de texte        | Libellé                              |
| ---------------- | -------------------- | ------------------------------------ |
| resourceLocation | Chaîne de caractères | The resource path to give this block |



