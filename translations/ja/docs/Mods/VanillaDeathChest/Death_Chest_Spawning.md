# 死の宝箱のスポーニング

## パッケージのインポート

`import mods.vanilladeathchest.DeathChestSpawning;`

## チャットメッセージ

```zenscript
//DeathChestSpawning.setChatMessage(string stage, string message);
DeathChestSpawning.setChatMessage("example_stage", "A chest appear at [%s, %s, %s]!");
```

文字列は、死の胸のX、Y、Z座標の3つの引数をとります。

## コンテナ表示名

```zenscript
//DeathChestSpawning.setContainerDisplayName(string stage, string name);
DeathChestSpawning.setContainerDisplayName("example_stage", "Your Items");
```

## レジストリ名の正規表現

```zenscript
//DeathChestSpawning.setRegistryNameRegex(string stage, string regex);
DeathChestSpawning.setRegistryNameRegex("example_stage", ".*dirt.*');
```

## インベントリ内のコンテナを使用

```zenscript
//DeathChestSpawning.setUseContainerInInventory(string stage, bool flag);
DeathChestSpawning.setUseContainerInInventory("example_stage", false);
```