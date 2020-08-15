# IServer

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.server.IServer;`

## 拡張する ICommandSender

IServer extends [ICommandSender](/Vanilla/Commands/ICommandSender), so that are available for an [ICommandSender](/Vanilla/Commands/ICommandSender) object is also available for an IServer object.

## サーバーハンドラにアクセス

You can access the Server Handler using the `server` [global keyword](/Vanilla/Global_Functions/).  
Alternatively you can get the server from any [ICommandSender](/Vanilla/Commands/ICommandSender/).

## [プレイヤー](/Vanilla/Players/IPlayer/) が OP であるか確認する

これを使用して、 [IPlayer](/Vanilla/Players/IPlayer/) が OP 権限を持っているかどうかを確認できます。

```zenscript
server.isOP(player);
```

## コマンドマネージャーを取得

You can use this to get the [ICommandManager](/Vanilla/Commands/ICommandManager/)

```zenscript
server.commandManager;
```