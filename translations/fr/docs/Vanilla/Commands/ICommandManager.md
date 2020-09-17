# Gestionnaire de commandes

L'interface ICommandManager gère les commandes. Vous pouvez donc l'utiliser pour récupérer et exécuter des commandes.  
Vous pouvez le récupérer depuis un objet [IServer](/Vanilla/Game/IServer/).

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.command.ICommandManager ;`

## ZenGetters

<table>
  <tr>
    <th>
      ZenGetter
    </th>
    
    <th>
      Type de texte
    </th>
  </tr>
  
  <tr>
    <td>
      commandes
    </td>
    
    <td>
      Carte<String, <a href="/Vanilla/Commands/ICommand/">ICommand</a>\>
    </td>
  </tr>
</table>

## Méthodes Zen

- int executeCommand([ICommandSender](/Vanilla/Commands/ICommandSender/) expéditeur, String rawCommand);
- Liste<String\> getTabCompletions([ICommandSender](/Vanilla/Commands/ICommandSender/) expéditeur, String input, @Optional [IBlockPos](/Vanilla/World/IBlockPos/) pos);
- List<[ICommand](/Vanilla/Commands/ICommand/)\> getPossibleCommands([ICommandSender](/Vanilla/Commands/ICommandSender/) expéditeur) ;

## Infos supplémentaires

Pour ajouter votre propre commande, regardez [CommandEvent](/Vanilla/Events/Events/CommandEvent/)