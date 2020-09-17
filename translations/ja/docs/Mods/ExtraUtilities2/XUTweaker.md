# XUTweaker

XUTweaker パッケージは、いくつかの静的ユーティリティメソッドを追加します。

## パッケージのインポート

メソッド呼び出しを短縮したり、パッケージをインポートする必要があるかもしれない問題が発生する場合。  
使用することができます。

```zenscript
import extraautilities2.Tweaker.XUTweaker;
```

## メソッド

### サバイバル飛行を許可

Allows Flight for all players, permanently.

```zenscript
extraautilities2.Tweaker.XUTweaker.allowSurvivalFlight();
```

### ネザーポータルを無効にする

ネザーポータル(およびPortalSpawnEventを使用するすべてのポータル)が永久にスポーンすることを防ぎます。

```zenscript
extraautilities2.Tweaker.XUTweaker.disableNetherPortals();
```

### プレイヤーが偽のプレイヤーであるかどうかを確認する

プレイヤーが偽のプレイヤーであるかどうかを示すブール値を返します。

[IPlayer](/Vanilla/Players/IPlayer) 引数が必要です。

```zenscript
extraautilities2.Tweaker.XUTweaker.isPlayerFake(player);
```

### プレイヤーの本画面を開く

指定したプレイヤーに書かれた本の画面を開こうとします。

Returns a boolean stating if the command was executed correctly.  
Requires an [IPlayer](/Vanilla/Players/IPlayer) argument.  
Also requires a string[] argument that will be the pages.

```zenscript
extraautilities2.Tweaker.XUTweaker.openBookScreen(player, pages);
extraautilities2.Tweaker.XUTweaker.openBookScreen(player, ["Page 1", "Page 2"]);
```