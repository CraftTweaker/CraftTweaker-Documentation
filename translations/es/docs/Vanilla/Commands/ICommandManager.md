# Gestor de Comandos

La interfaz de ICommandManager está gestionando comandos. Así que puedes usarlo para obtener y ejecutar comandos.  
Puedes obtener esto de un objeto [IServer](/Vanilla/Game/IServer/).

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.command.ICommandManager;`

## ZenGetters

<table>
  <tr>
    <th>
      ZenGetter
    </th>
    
    <th>
      Tipo
    </th>
  </tr>
  
  <tr>
    <td>
      comandos
    </td>
    
    <td>
      Mapa<String, <a href="/Vanilla/Commands/ICommand/">ICommand</a>\>
    </td>
  </tr>
</table>

## Métodos

- int executeCommand([ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String rawCommand);
- Lista<String\> getTabCompletions([ICommandSender](/Vanilla/Commands/ICommandSender/) sender, entrada de cadena, @Optional [IBlockPos](/Vanilla/World/IBlockPos/) pos);
- Lista <[ICommand](/Vanilla/Commands/ICommand/)\> getPossibleCommands([ICommandSender](/Vanilla/Commands/ICommandSender/) remitente);

## Información adicional

Para añadir tu propio comando, mira [CommandEvent](/Vanilla/Events/Events/CommandEvent/)