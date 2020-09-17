# ICommand

ICommand オブジェクトはコマンドインガムを表します。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.command.ICommand;`

## ZenGetters

<table>
  <tr>
    <th>
      ZenGetter
    </th>
    
    <th>
      戻り値
    </th>
  </tr>
  
  <tr>
    <td>
      name
    </td>
    
    <td>
      文字列
    </td>
  </tr>
  
  <tr>
    <td>
      エイリアス
    </td>
    
    <td>
      リスト<String\>
    </td>
  </tr>
</table>

## ZenMethods

- String getUsage([ICommandSender](/Vanilla/Commands/ICommandSender/) sender);
- void execute([IServer](/Vanilla/Game/IServer/) server, [ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String[] args);
- boolean checkPermission([IServer](/Vanilla/Game/IServer/) server, [ICommandSender](/Vanilla/Commands/ICommandSender/) sender);
- リスト<string> getTabCompletions([IServer](/Vanilla/Game/IServer/) server, [ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String[] args, @Optional [IBlockPos](/Vanilla/World/IBlockPos/) targetPos);
- boolean isUsernameIndex(String[] args, int index);
- command1 != command2; → 比較できます。