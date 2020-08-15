# Polecenie Zdarzenia

Wydarzenie poleceń jest uruchamiane za każdym razem, gdy polecenie jest wykonywane. Możesz zareagować na polecenie podając polecenie. Zobacz [Krafttsłabsze przykłady](https://github.com/CraftTweaker/CraftTweaker-Examples/blob/master/crafttweaker/events/commandEvent/SendMessageOnSyntaxCommand/SendMessageOnSyntaxCommand.zs) na przykład.

## Klasa wydarzenia

Musisz aktywować zdarzenie w nagłówku funkcji jako klasa: `crafttweaker.event.CommandEvent`. Zaleca się [zaimportować](/AdvancedFunctions/Import/) klasę

    importuj crafttweaker.event.CommandEvent;
    

## Rozszerzenia interfejsu zdarzenia

Zdarzenie poleceń implementuje następujące interfejsy:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

Poniższe informacje są pobierane/ustawiane podczas wydarzenia:

| ZenGetter           | ZenSetter   | Typ                                                 |
| ------------------- | ----------- | --------------------------------------------------- |
| `polecenie-nadawca` | nie         | [ICommandSender](/Vanilla/Commands/ICommandSender/) |
| `polecenie`         | nie         | [Polecenie ICommand](/Vanilla/Commands/ICommand/)   |
| `parametry`         | `parametry` | tablica ciągów                                      |