# Wydarzenie IPlayer

Ten interfejs jest rozszerzony o wszystkie wydarzenia, które mają gracza.  
Oznacza to, że możesz użyć gettera poniżej, aby uzyskać dostęp do gracza.

## Importowanie klasy

Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuje crafttweaker.event.IPlayerEvent;`

## Rozszerzenie Wydarzenia Żywotnego

Ten interfejs rozszerza [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/), co oznacza, że wszystkie funkcje oferowane przez ILivingEvent są również obecne w IPlayerEvent

## ZenGetters

| Nazwa | typ                                  |
| ----- | ------------------------------------ |
| gracz | [IPlayer](/Vanilla/Players/IPlayer/) |