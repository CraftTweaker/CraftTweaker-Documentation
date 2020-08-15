# ICommandSender

ICommandSenderインターフェイスは、各エンティティのベースと、CraftTweakerの他のいくつかのタイプを使用しています。  
各 [IEntity](/Vanilla/Entities/IEntity/) と [IPlayer](/Vanilla/Players/IPlayer/) はこれを実装します！

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.command.ICommandSender;`

## ZenGetter

| ZenGetter   | 戻り値                                    |
| ----------- | -------------------------------------- |
| displayName | 文字列                                    |
| 位置          | [IBlockPos](/Vanilla/World/IBlockPos/) |
| 世界          | [IWorld](/Vanilla/World/IWorld/)       |
| サーバー        | [IServer](/Vanilla/Game/IServer/)      |

## ZenMethods

#### メッセージを送信

文字列を取得する 無効（なし）を返します。

```zenscript
sender.sendMessage(String text);
```