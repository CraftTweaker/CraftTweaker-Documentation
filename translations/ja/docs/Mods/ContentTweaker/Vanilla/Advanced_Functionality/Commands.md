# コマンド

このクラスを使用してコマンドを送信できます。このクラスを使用して新しいコマンドを作成することはできません。 新しいコマンドを追加するには [CommandEvent](/Vanilla/Events/Events/CommandEvent/) を参照してください。 [ICommandManager](/Vanilla/Commands/ICommandManager/) を使用することもできます。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.Commands;`

## コマンドを呼び出す

Commands パッケージでできるのはこれだけです。

```zenscript
call(String command, IPlayer player, IWorld world)
call(String command, IPlayer player, IWorld world, boolean logToChat, boolean overridePermissions)
```

パラメータ:

- 文字列コマンド → 実行するコマンド
- [IPlayer](/Vanilla/Players/IPlayer/) プレーヤー → コマンドを実行しているプレイヤー
- [IWorld](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Commands/) ワールド → コマンドを実行する
- boolean logToChat → MC チャットにコマンド出力が表示されるか?
- boolean overridePermissionsは必要な権限レベルに関係なくコマンドを実行する必要がありますか?

2つのブール値は、両方とも追加または省略する必要があります。 それらなしでコマンドを呼び出せば、それらは真実です。