# ICommand

Un objeto ICommand representa un nombre de uso de comandos.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.command.ICommand;`

## ZenGetters

<table>
  <tr>
    <th>
      ZenGetter
    </th>
    
    <th>
      Tipo de devolución
    </th>
  </tr>
  
  <tr>
    <td>
      nombre
    </td>
    
    <td>
      cadena
    </td>
  </tr>
  
  <tr>
    <td>
      alias
    </td>
    
    <td>
      Lista<String\>
    </td>
  </tr>
</table>

## Métodos

- String getUsage([ICommandSender](/Vanilla/Commands/ICommandSender/) sender);
- void execute([servidor](/Vanilla/Game/IServer/) IServer, [ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String[] args);
- boolean checkPermission([servidor IServer](/Vanilla/Game/IServer/) , [ICommandSender](/Vanilla/Commands/ICommandSender/) sender);
- Lista<string> getTabCompletions([Servidor](/Vanilla/Game/IServer/) IServer, [ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String[] args, @Optional [IBlockPos](/Vanilla/World/IBlockPos/) targetPos);
- boolean isUsernameIndex(String[] args, int index);
- command1 != command2; → ¡Puedes compararlos!