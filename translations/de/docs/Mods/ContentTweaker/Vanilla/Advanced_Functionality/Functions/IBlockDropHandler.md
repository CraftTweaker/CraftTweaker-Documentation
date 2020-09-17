# IBlockDropHandler

The IBlockDropHandler function is used to allow for advanced block drop handling for [Blocks](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) created with the [Vanilla Factory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/).

## Diese Klasse importieren

Möchten Sie die Klasse importieren? Hier geht's:

```zenscript
importieren mods.contenttweaker.DropHandler;
```

## Funktionsstruktur

Die Funktion ist eine ungültige Funktion, die die folgenden Parameter nimmt:

- [ICTItemList](/Mods/ContentTweaker/Vanilla/Types/Drops/ICTItemList/) drops.
- [IBlockAccess](/Vanilla/World/IBlockAccess/) Welt -> die Welt, in der wir uns befinden, möglich eine [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/), du möchtest vielleicht Instanzen und Downcast
- [IBlockPos](/Vanilla/World/IBlockPos/) Position -> Position des Blocks
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) Status -> Blockstatus des Blocks
- int fortune -> the fortune level of the tool used

As this method does not return anything, all drops need to be added to the `drops` list using the exposed methods.  
Read about them [here](/Mods/ContentTweaker/Vanilla/Types/Drops/ICTItemList/).

## Beispiel

```zenscript
block.setDropHandler(function(drops, world, position, position, state, fortune) {

    drops.add(<item:minecraft:bedrock>);
    drops.add(<item:minecraft:carrot> % 50);

    return;
});
```