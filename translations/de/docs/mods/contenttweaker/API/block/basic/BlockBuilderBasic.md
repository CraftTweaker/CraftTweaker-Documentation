# BlockBuilderBasic

Dieser Builder erzeugt den Blocktyp, der standardmäßig in [mods.contenttweaker.block.basic verwendet wird. lockBuilderBasic#build](/mods/contenttweaker/API/block/basic/BlockBuilderBasic/#build) Dieser Builder bietet keine speziellen Eigenschaften zum Setzen an, du kannst ihn nur bauen.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
mods.contenttweaker.block.basic.BlockBuilderBasic
```

## Implemented Interfaces
BlockBuilderBasic implements the following interfaces. That means any method available to them can also be used on this class.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Methoden
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
new BlockBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new BlockBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Parameter        | Type   | Beschreibung                         |
| ---------------- | ------ | ------------------------------------ |
| resourceLocation | String | The resource path to give this block |



