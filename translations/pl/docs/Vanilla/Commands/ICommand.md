# Polecenie ICommand

Obiekt ICommand reprezentuje nazwę polecenia.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.command.ICommand;`

## ZenGetters

<table>
  <tr>
    <th>
      ZenGetter
    </th>
    
    <th>
      Typ zwrotu
    </th>
  </tr>
  
  <tr>
    <td>
      Nazwa
    </td>
    
    <td>
      ciąg znaków
    </td>
  </tr>
  
  <tr>
    <td>
      aliasy
    </td>
    
    <td>
      Lista<String\>
    </td>
  </tr>
</table>

## Metody ZenMethods

- String getUsage([ICommandSender](/Vanilla/Commands/ICommandSender/) sender);
- unieważnij wykonanie([Serwer IServer](/Vanilla/Game/IServer/) , [SendandSender](/Vanilla/Commands/ICommandSender/) nadawca, String[] args);
- boolean checkPermission([serwer IServer](/Vanilla/Game/IServer/) , [nadawca ICommandSender](/Vanilla/Commands/ICommandSender/));
- Lista<string> getTabCompletions([IServer](/Vanilla/Game/IServer/) serwer, [ICommandSender](/Vanilla/Commands/ICommandSender/) nadawca, String[] args, @Optional [IBlockPos](/Vanilla/World/IBlockPos/) targetPos);
- boolean isUsernameIndex(String[] args, int index);
- komenda1 != komenda2; → Możesz je porównać!