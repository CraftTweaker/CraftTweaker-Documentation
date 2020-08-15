# ICommandManager

Die ICommandManager-Schnittstelle verwaltet Befehle. So können Sie es verwenden, um Befehle zu erhalten und auszuführen.  
Sie können dies von einem [IServer](/Vanilla/Game/IServer/) Objekt erhalten.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`import crafttweaker.command.ICommandManager;`

## ZenGetter

<table>
  <tr>
    <th>
      ZenGetter
    </th>
    
    <th>
      Type
    </th>
  </tr>
  
  <tr>
    <td>
      Befehle
    </td>
    
    <td>
      Karte<String, <a href="/Vanilla/Commands/ICommand/">ICommand</a>\>
    </td>
  </tr>
</table>

## ZenMethoden

- int executeCommand([ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String rawCommand);
- Liste<String\> getTabCompletions([ICommandSender](/Vanilla/Commands/ICommandSender/) Absender, Zeicheneingabe, @Optional [IBlockPos](/Vanilla/World/IBlockPos/) pos);
- Liste <[ICommand](/Vanilla/Commands/ICommand/)\> getPossibleCommands([ICommandSender](/Vanilla/Commands/ICommandSender/) Absender);

## Zusätzliche Info

Um Ihren eigenen Befehl hinzuzufügen, schauen Sie sich [CommandEvent](/Vanilla/Events/Events/CommandEvent/) an