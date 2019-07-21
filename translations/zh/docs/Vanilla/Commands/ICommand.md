# ICommand

An ICommand Object represents a command ingame.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.command.ICommand;`

## ZenGetters

<table>
  <tr>
    <th>
      ZenGetter
    </th>
    
    <th>
      返回值类型
    </th>
  </tr>
  
  <tr>
    <td>
      name（名称）
    </td>
    
    <td>
      string
    </td>
  </tr>
  
  <tr>
    <td>
      aliases
    </td>
    
    <td>
      List<String\>
    </td>
  </tr>
</table>

## ZenMethods

- String getUsage([ICommandSender](/Vanilla/Commands/ICommandSender/) sender);
- void execute([IServer](/Vanilla/Game/IServer/) server, [ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String[] args);
- boolean checkPermission([IServer](/Vanilla/Game/IServer/) server, [ICommandSender](/Vanilla/Commands/ICommandSender/) sender);
- List<string> getTabCompletions([IServer](/Vanilla/Game/IServer/) server, [ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String[] args, @Optional [IBlockPos](/Vanilla/World/IBlockPos/) targetPos);
- boolean isUsernameIndex(String[] args, int index);
- command1 != command2; → You can compare them!