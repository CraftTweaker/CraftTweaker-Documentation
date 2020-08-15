# ICommandManager

L'interfaccia ICommandManager sta gestendo i comandi. Quindi puoi usarlo per ottenere ed eseguire i comandi.  
Puoi ottenerlo da un oggetto [IServer](/Vanilla/Game/IServer/).

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.command.ICommandManager;`

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
      comandi
    </td>
    
    <td>
      Mappa<String, <a href="/Vanilla/Commands/ICommand/">ICommand</a>\>
    </td>
  </tr>
</table>

## ZenMethods

- int executeCommand([ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String rawCommand);
- Lista<String\> getTabCompletions([ICommandSender](/Vanilla/Commands/ICommandSender/) sender, Input stringa, @Optional [IBlockPos](/Vanilla/World/IBlockPos/) pos);
- List<[ICommand](/Vanilla/Commands/ICommand/)\> getPossibleCommands([ICommandSender](/Vanilla/Commands/ICommandSender/) sender);

## Informazioni Aggiuntive

Per aggiungere il tuo comando, guarda [ComandoEvento](/Vanilla/Events/Events/CommandEvent/)