# ICommandManager

Interfejs ICommandManager zarządza poleceniami. Więc możesz go użyć do otrzymywania i wykonywania poleceń.  
Możesz to uzyskać od obiektu [IServer](/Vanilla/Game/IServer/).

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.command.ICommandManager;`

## ZenGetters

<table>
  <tr>
    <th>
      ZenGetter
    </th>
    
    <th>
      Typ
    </th>
  </tr>
  
  <tr>
    <td>
      komendy
    </td>
    
    <td>
      Mapa<String, <a href="/Vanilla/Commands/ICommand/">ICommand</a>\>
    </td>
  </tr>
</table>

## Metody ZenMethods

- int executeCommand([ICommandSender](/Vanilla/Commands/ICommandSender/) nadawca, String rawCommand);
- Lista<String\> getTabCompletions([ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String input, @Optional [IBlockPos](/Vanilla/World/IBlockPos/) s);
- List<[ICommand](/Vanilla/Commands/ICommand/)\> getPossibleCommands([ICommandSender](/Vanilla/Commands/ICommandSender/) nadawca);

## Dodatkowe informacje

Aby dodać własne polecenie, spójrz na [CommandEvent](/Vanilla/Events/Events/CommandEvent/)