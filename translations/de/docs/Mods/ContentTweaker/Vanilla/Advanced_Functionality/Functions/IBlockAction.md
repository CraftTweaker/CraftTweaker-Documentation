# IBlockAction

Die IBlockAction Funktion kann einem [Block](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) hinzugefügt werden und je nachdem, wo Sie es hinzugefügt haben, wird ausgelöst, wenn der Block platziert oder kaputt ist.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`mods.contenttweaker.IBlockAction;`

## Parameter

Die IBlockAction ist eine Funktion mit den folgenden Parametern:

- [IWelt](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) → Die Welt, in der der Block ist
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) Position → Position des Blocks
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) Status → Enthält Informationen über den Block, wie den Block selbst und seine Metadaten

Die Funktion hat keinen Rückgabewert!

## Beispiel

```zenscript
zsBlock.onBlockBreak = function(world, blockPos, blockState){
    print("I WAS PLACED!!!");
}
```