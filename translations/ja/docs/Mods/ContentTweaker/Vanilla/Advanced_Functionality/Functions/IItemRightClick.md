# IItemRightClick

IItemRightClick 関数は、 [アイテム](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) に追加でき、ユーザがプライマリーハンドで選択したアイテムで右クリックを行うとトリガーされます。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.IItemRightClick;`

## パラメータ

IItemRightClick 関数は、次のパラメータを持つ関数です。

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → 右クリックされた項目
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) ワールド → プレイヤーがいる世界
- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) プレーヤー → 右クリックを行うプレイヤー
- 文字列の手 → "OFF_HAND" または "MAIN_HAND" のいずれか

関数は `"成功"`, `"パスワード"` または `"失敗"` のいずれかを返す必要があります。

## 例

```zenscript
zsItem.itemRightClick = function(stack, world, player, hand) {
    Commands.call("scoreboard players set @p name 5", player, world);
    return "Pass";
};
```