# IBlockColorSupplier

Die IBlockColorSupplier Funktion kann verwendet werden, um das [Farbobjekt](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) für was auch immer zu verwenden.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren mods.contenttweaker.IBlockColorSupplier;`

## Parameter

Die IBlockColorSupplier Funktion ist eine Funktion mit folgenden Parametern.

- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) Status → der Blockzustand des Blocks, dessen Farbe angefordert wird.
- [IBlockAccess](/Vanilla/World/IBlockAccess/) Zugriff → Blockzugriff auf den Block, dessen Farbe angefordert wird.
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → die Position des Blocks, dessen Farbe angefordert wird.
- int tintIndex → der Farbindex, verwenden Sie das, was Sie wollen. Die Funktion muss ein [Farbobjekt](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) zurückgeben.

## Beispiele

```zenscript
#loader contenttweaker

importiere mods.contenttweaker.IBlockColorSupplier;
importiere mods.contenttweaker.BlockState;
importiere mods.contenttweaker.BlockPos;
importiere mods.contenttweaker.Color;

importiere crafttweaker. orld.IBlockAccess;

Funktion getBlockColor(Status als BlockState, Zugriff als IBlockAccess, Pos als BlockPos, tintIndex als int) als Farbe {
  //Gibt eine Kalkfarbe
    zurück. romInt(0x00FF00);
}
```