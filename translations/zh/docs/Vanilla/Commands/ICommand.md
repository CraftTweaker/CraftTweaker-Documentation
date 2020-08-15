# ICommand

ICommand Object 代表一个命令。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweeper.commandICommand；`

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
      别名
    </td>
    
    <td>
      列表<String\>
    </td>
  </tr>
</table>

## ZenMethods

- String getUsage([ICommandSender](/Vanilla/Commands/ICommandSender/) sender);
- 无效的执行([IServer](/Vanilla/Game/IServer/) 服务器, [ICommander Sender](/Vanilla/Commands/ICommandSender/) 发送者, String[]args;
- 布尔检查权限([IServer](/Vanilla/Game/IServer/) 服务器, [ICommander](/Vanilla/Commands/ICommandSender/) 发送者);
- 列表<string> getTabComplations([IServer](/Vanilla/Game/IServer/) server, [ICommander](/Vanilla/Commands/ICommandSender/) sender, String[……] args, @Optional [IBlockPos](/Vanilla/World/IBlockPos/) targetPos);
- 布尔值是用户名索引(String[]args, int index);
- command1 != command2; → 你可以比较它们!