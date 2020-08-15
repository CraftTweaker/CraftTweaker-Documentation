# プレイヤーステージ

GameStages APIはCraftTweakerの [IPlayer](/Vanilla/Players/IPlayer/) 機能を拡張し、プレイヤーのステージを確認および変更できます。

## メソッドを呼び出す

これは [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/)なので、任意の [IPlayer](/Vanilla/Players/IPlayer/) オブジェクト、またはそのサブタイプのいずれかのメソッドを呼び出すことができます。

## メソッド

### ゲーム施設のチェック

メソッドはブール値を返します。

```zenscript
// プレイヤーが渡されたステージを持っているかどうかをチェックします。
//player.hasGameStage(String stage);
player.hasGameStage("one");



// プレイヤーが渡されたステージのいずれかをチェックします。 必要なのは一つだけです
//player.hasAnyGameStages(String... stages);
player.hasAnyGameStages("one", "two");



// プレイヤーが渡されたすべてのステージを持っているかどうかをチェックします。
//player.hasAllGameStages (文字列... stages);
player.hasAllGameStages ("one", "two");
```

### ゲーム施設を追加または削除する

メソッドは void (nothing) を返します。

```zenscript
// プレイヤー用のステージのロックを解除する
//addGameStage(String stage);
addGameStage(String stage);


// プレイヤーのステージをロックします。
//removeGameStage(String stage);
removeGameStage(String stage);
```