# Befehlsereignis

Das Befehlsereignis wird ausgeführt, wenn ein Befehl ausgeführt wird. Sie können auf den Befehl reagieren, indem Sie einen Befehlshandler zur Verfügung stellen. Siehe [Crafttweaker Beispiele](https://github.com/CraftTweaker/CraftTweaker-Examples/blob/master/crafttweaker/events/commandEvent/SendMessageOnSyntaxCommand/SendMessageOnSyntaxCommand.zs) für ein Beispiel.

## Event-Klasse

You will need to cast the event in the function header as this class: `crafttweaker.event.CommandEvent`. Es wird empfohlen [](/AdvancedFunctions/Import/) die Klasse zu importieren

    import craftweaker.event.CommandEvent;
    

## Erweiterte Event-Schnittellen

Das Befehlsereignis implementiert folgende Schnittstellen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

Die folgenden Informationen werden abgerufen/während der Veranstaltung gesetzt:

| ZenGetter       | ZenSetter   | Type                                                |
| --------------- | ----------- | --------------------------------------------------- |
| `commandSender` | o           | [ICommandSender](/Vanilla/Commands/ICommandSender/) |
| `befehl`        | o           | [ICommand](/Vanilla/Commands/ICommand/)             |
| `Parameter`     | `Parameter` | string array                                        |