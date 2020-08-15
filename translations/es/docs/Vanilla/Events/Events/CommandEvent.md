# Evento Comandante

El evento de comando se activa cada vez que se ejecuta un comando. Puede reaccionar al comando proporcionando un manejador de comandos. Vea [Ejemplos más débiles](https://github.com/CraftTweaker/CraftTweaker-Examples/blob/master/crafttweaker/events/commandEvent/SendMessageOnSyntaxCommand/SendMessageOnSyntaxCommand.zs) para un ejemplo.

## Clase de evento

You will need to cast the event in the function header as this class: `crafttweaker.event.CommandEvent`. Se recomienda [importar](/AdvancedFunctions/Import/) la clase

    importar crafttweaker.event.CommandEvent;
    

## Extensiones de la interfaz de eventos

El evento Command implementa las siguientes interfaces:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

La siguiente información ca se recuperará/establecer durante el evento:

| ZenGetter       | Ajuste       | Tipo                                                |
| --------------- | ------------ | --------------------------------------------------- |
| `comandoSender` | no           | [ICommandSender](/Vanilla/Commands/ICommandSender/) |
| `comando`       | no           | [ICommand](/Vanilla/Commands/ICommand/)             |
| `parámetros`    | `parámetros` | matriz de cadenas                                   |