# PlayerLeftClickBlock

The PlayerLeftClickBlock Event is fired whenever a player left clicks a block.  
It can be canceled to prevent any other events from taking place. If the player holds down the left click, the event will fire again even if it has been canceled. Canceling this event will prevent the left click from being registered, preventing block breaking (although not in creative mode). Jeżeli zdarzenie zostanie anulowane, można podać konkretny wynik sukcesu, niepowodzenia lub przejścia. Domyślnie wynik jest pozytywny.

## Klasa wydarzenia
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerLeftClickBlockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Rozszerzenia interfejsu zdarzenia
PlayerLeftClickBlock Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Interakcja gracza](/Vanilla/Events/Events/PlayerInteract/)
- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters & ZenSetters
Z wydarzenia można uzyskać następujące informacje:

| ZenGetter          | ZenSetter          | typ                                            |
| ------------------ | ------------------ | ---------------------------------------------- |
| `hitvector`        |                    | [iwektor3d](/vanilla/world/ivector3d/)         |
| `użyj bloku`       | `użyj bloku`       | ciąg znaków ("zezwól / "odmowa " / "domyślna") |
| `useitem`          | `useitem`          | ciąg znaków ("zezwól / "odmowa " / "domyślna") |
| `wynik anulowania` | `wynik anulowania` | ciąg znaków ("success" / "pass" / "fail")      |

## Metody ZenMethods

- `event.cancel()` ustawia wydarzenie jako anulowane.
