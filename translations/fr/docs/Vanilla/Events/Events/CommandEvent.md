# Événement de la commande

L'événement de commande est déclenché chaque fois qu'une commande est exécutée. Vous pouvez réagir à la commande en fournissant un gestionnaire de commande. Voir [exemples d'artisanat](https://github.com/CraftTweaker/CraftTweaker-Examples/blob/master/crafttweaker/events/commandEvent/SendMessageOnSyntaxCommand/SendMessageOnSyntaxCommand.zs) pour un exemple.

## Classe de l'événement

You will need to cast the event in the function header as this class: `crafttweaker.event.CommandEvent`. Il est conseillé de [importer](/AdvancedFunctions/Import/) la classe

    Importer crafttweaker.event.CommandEvent;
    

## Extensions d'interface de l'événement

L'événement de commande implémente les interfaces suivantes :

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

Les informations suivantes seront récupérées/définies pendant l'événement :

| ZenGetter                | ZenSetter    | Type de texte                                              |
| ------------------------ | ------------ | ---------------------------------------------------------- |
| `expéditeur de commande` | non          | [Je suis un expéditeur](/Vanilla/Commands/ICommandSender/) |
| `commande`               | non          | [ICommand](/Vanilla/Commands/ICommand/)                    |
| `paramètres`             | `paramètres` | tableau de chaînes                                         |