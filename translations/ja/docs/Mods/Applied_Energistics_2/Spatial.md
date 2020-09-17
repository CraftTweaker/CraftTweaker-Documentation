# Spatial

### インポート中

```zenscript
import mods.appledenergistics2.Spatial;
```

### 追加中

空間IOのTileEntityクラスをホワイトリストに登録します。 警告: 一部のタイトルエンティティ、特にマルチブロック構造は、空間の IO に移動すると予期しないエラーやクラッシュを引き起こす可能性があります。 パックされた開発者は、Spatial IO ホワイトリストに追加されたものをテストする必要があります。

```zenscript
Spatial.whitelistEntity(String fullEntityClassName);

//AA の小さなストレージクレートを空間IOホワイトリストに追加
Spatial.whitelistEntity("de.ellpeck.actuallyadditions.mod.tile.TileEntityGiantChest");
```