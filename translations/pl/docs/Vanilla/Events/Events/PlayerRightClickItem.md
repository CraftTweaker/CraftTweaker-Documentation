# PlayerRightClickItem

The PlayerRightClickItem Event is fired shortly before an item's functionality is fired. It is not fired if the player is targetting a block or entity. It can be canceled to prevent any other events from taking place. If the event is canceled, a specific result of allow, deny, or pass can be provided. Domyślnie wynik jest pozytywny.

## Klasa wydarzenia
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerRightClickItemEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Rozszerzenia interfejsu zdarzenia
PlayerRightClickItem Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Interakcja gracza](/Vanilla/Events/Events/PlayerInteract/)

## ZenGetters & ZenSetters
The following information can be adjusted in the event.

| ZenGetter          | ZenSetter          | typ                                            |
| ------------------ | ------------------ | ---------------------------------------------- |
| `wynik anulowania` | `wynik anulowania` | ciąg znaków ("zezwól / "odmowa " / "domyślna") |
