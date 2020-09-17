# ComandoEvento

L'Evento di Comando viene sparato ogni volta che viene eseguito un comando. È possibile reagire al comando fornendo un gestore dei comandi. Vedi gli esempi [Crafttweaker](https://github.com/CraftTweaker/CraftTweaker-Examples/blob/master/crafttweaker/events/commandEvent/SendMessageOnSyntaxCommand/SendMessageOnSyntaxCommand.zs) per un esempio.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe: `crafttweaker.event.CommandEvent`. Si consiglia di [importare](/AdvancedFunctions/Import/) la classe

    import crafttweaker.event.CommandEvent;
    

## Estensioni dell'interfaccia evento

L'evento di comando implementa le seguenti interfacce:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

Le seguenti informazioni possono essere recuperate/impostate durante l'evento:

| ZenGetter       | ZenSetter   | Tipo                                                |
| --------------- | ----------- | --------------------------------------------------- |
| `commandSender` | no          | [ICommandSender](/Vanilla/Commands/ICommandSender/) |
| `comando`       | no          | [ICommand](/Vanilla/Commands/ICommand/)             |
| `parametri`     | `parametri` | array di stringhe                                   |