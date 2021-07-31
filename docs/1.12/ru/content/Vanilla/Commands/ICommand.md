# ICommand

Объект ICommand представляет игровую команду.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.command.ICommand;`

## Геттеры

<table>
  <tr>
    <th>
      Геттер
    </th>
    
    <th>
      Возвращаемый тип
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
      aliases
    </td>
    
    <td>
      List<String\>
    </td>
  </tr>
</table>

## Методы

- String getUsage([ICommandSender](/Vanilla/Commands/ICommandSender/) sender);
- void execute([IServer](/Vanilla/Game/IServer/) server, [ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String[] args);
- boolean checkPermission([IServer](/Vanilla/Game/IServer/) server, [ICommandSender](/Vanilla/Commands/ICommandSender/) sender);
- List<string> getTabCompletions([IServer](/Vanilla/Game/IServer/) server, [ICommandSender](/Vanilla/Commands/ICommandSender/) sender, String[] args, @Optional [IBlockPos](/Vanilla/World/IBlockPos/) targetPos);
- boolean isUsernameIndex(String[] args, int index);
- command1 != command2; → You can compare them!