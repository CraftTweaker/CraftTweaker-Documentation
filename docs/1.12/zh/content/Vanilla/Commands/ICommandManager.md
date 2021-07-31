# ICommandManager

The ICommandManager interface is managing commands. So you can use it to get and execute commands.  
You can get this from an [IServer](/Vanilla/Game/IServer/) object.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.command.ICommandManager;`

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
      commands
    </td>
    
    <td>
      Map<String, <a href="/Vanilla/Commands/ICommand/">ICommand</a>\>
    </td>
  </tr>
</table>

## ZenMethods

- int executeCommand([ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String rawCommand);
- List<String\> getTabCompletions([ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String input, @Optional [IBlockPos](/Vanilla/World/IBlockPos/) pos);
- List<[ICommand](/Vanilla/Commands/ICommand/)\> getPossibleCommands([ICommandSender](/Vanilla/Commands/ICommandSender/) sender);

## Additional Info

To add your own command, look at [CommandEvent](/Vanilla/Events/Events/CommandEvent/)