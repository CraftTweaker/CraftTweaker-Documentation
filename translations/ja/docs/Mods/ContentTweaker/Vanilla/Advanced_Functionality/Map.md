# 地図

Map Package では、BASEのウェイポイントイベントハンドラを使用してウェイポイントを設定できます。

## パッケージのインポート

毎回再入力する必要がないように、パッケージをインポートできます。

    import mods.contenttweaker.Map;
    

## 通過点の追加

これは Map パッケージによって公開される唯一のメソッドであり、指定された場所にウェイポイントを設定することができます。  
パラメータを持つ無効なメソッドです。

- 文字列名
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/)
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/)
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)

    Map.setWaypoint(String name, IWorld world, IBlockPos pos, CTColor