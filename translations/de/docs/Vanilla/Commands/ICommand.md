# ICommand

Ein ICommand Object repräsentiert ein Befehlsname.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`import crafttweaker.command.ICommand;`

## ZenGetter

<table>
  <tr>
    <th>
      ZenGetter
    </th>
    
    <th>
      Rückgabetyp
    </th>
  </tr>
  
  <tr>
    <td>
      name
    </td>
    
    <td>
      string
    </td>
  </tr>
  
  <tr>
    <td>
      Aliase
    </td>
    
    <td>
      Liste<String\>
    </td>
  </tr>
</table>

## ZenMethoden

- String getUsage([ICommandSender](/Vanilla/Commands/ICommandSender/) sender);
- Ausführung ungültig ([IServer](/Vanilla/Game/IServer/) Server, [ICommandSender](/Vanilla/Commands/ICommandSender/) Absender, String[] args);
- boolean checkPermission([IServer](/Vanilla/Game/IServer/) Server, [ICommandSender](/Vanilla/Commands/ICommandSender/) Absender);
- Liste<string> getTabCompletions([IServer](/Vanilla/Game/IServer/) Server, [ICommandSender](/Vanilla/Commands/ICommandSender/) Absender, String[] args, @Optional [IBlockPos](/Vanilla/World/IBlockPos/) targetPos);
- boolean isUsernameIndex(String[] args, int index);
- command1 != command2; → Sie können sie vergleichen!