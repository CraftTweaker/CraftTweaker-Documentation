# ICommand

Un objet ICommand représente un jeu de commandes.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.command.ICommand;`

## ZenGetters

<table>
  <tr>
    <th>
      ZenGetter
    </th>
    
    <th>
      Type de retour
    </th>
  </tr>
  
  <tr>
    <td>
      Nom
    </td>
    
    <td>
      chaîne de caractères
    </td>
  </tr>
  
  <tr>
    <td>
      alias
    </td>
    
    <td>
      Liste<String\>
    </td>
  </tr>
</table>

## Méthodes Zen

- String getUsage([ICommandSender](/Vanilla/Commands/ICommandSender/) sender);
- void execute([IServer](/Vanilla/Game/IServer/) serveur, [ICommandSender](/Vanilla/Commands/ICommandSender/) expéditeur, String[] args);
- boolean checkPermission([IServer](/Vanilla/Game/IServer/) serveur, [ICommandSender](/Vanilla/Commands/ICommandSender/) expéditeur);
- Liste<string> getTabCompletions([IServer](/Vanilla/Game/IServer/) serveur, [ICommandSender](/Vanilla/Commands/ICommandSender/) expéditeur, String[] args, @Optional [IBlockPos](/Vanilla/World/IBlockPos/) targetPos);
- booléen isUsernameIndex(String[] args, int index);
- command1 != command2; → Vous pouvez les comparer!