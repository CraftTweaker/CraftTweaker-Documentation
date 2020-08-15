# ICommandManager

ICommandManager 接口正在管理命令。 所以你可以使用它来获取和执行命令。  
你可以从 [IServer](/Vanilla/Game/IServer/) 对象中得到这一点。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweaker.command.ICommandManager；`

## ZenGetters

<table>
  <tr>
    <th>
      ZenGetter
    </th>
    
    <th>
      类型
    </th>
  </tr>
  
  <tr>
    <td>
      命令
    </td>
    
    <td>
      地图<String, <a href="/Vanilla/Commands/ICommand/">ICommand</a>\>
    </td>
  </tr>
</table>

## ZenMethods

- int executeCommand([ICommander Sender](/Vanilla/Commands/ICommandSender/) sender, String rawCommand);
- 列表<String\> getTabCompltions([ICommander](/Vanilla/Commands/ICommandSender/) sender, String input, @Optional [IBlockPos](/Vanilla/World/IBlockPos/) pos);
- 列表<[ICommand](/Vanilla/Commands/ICommand/)\> getPossibleCommands([ICommandSender](/Vanilla/Commands/ICommandSender/) 发送者);

## 附加信息

要添加您自己的命令，请参阅 [命令事件](/Vanilla/Events/Events/CommandEvent/)