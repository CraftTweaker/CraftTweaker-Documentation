# ICommandManager

ICommandManager インターフェイスはコマンドを管理しています。 したがって、コマンドの取得と実行に使用できます。  
これは [IServer](/Vanilla/Game/IServer/) オブジェクトから取得できます。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.command.ICommandManager;`

## ZenGetters

<table>
  <tr>
    <th>
      ZenGetter
    </th>
    
    <th>
      タイプ
    </th>
  </tr>
  
  <tr>
    <td>
      コマンド
    </td>
    
    <td>
      マップ<String, <a href="/Vanilla/Commands/ICommand/">ICommand</a>\>
    </td>
  </tr>
</table>

## ZenMethods

- int executeCommand([ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String rawCommand);
- List<String\> getTabCompletions([ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String input, @Optional [IBlockPos](/Vanilla/World/IBlockPos/) pos);
- List<[ICommand](/Vanilla/Commands/ICommand/)\> getPossibleCommands([ICommandSender](/Vanilla/Commands/ICommandSender/) sender);

## 追加情報

独自のコマンドを追加するには、 [CommandEvent](/Vanilla/Events/Events/CommandEvent/) を参照してください。