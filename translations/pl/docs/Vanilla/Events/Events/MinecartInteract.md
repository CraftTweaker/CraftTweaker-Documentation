# MinecartInteract

MinecartInteractEvent jest uruchamiany za każdym razem, gdy gracz zacznie wchodzić w interakcje z minecartem. Wydarzenie jest **anulowalne**, a to uniemożliwi otwarcie kontenera.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. inecartInteractEvent`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Zdarzenia MinecartInteract implementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IMinecart](/Vanilla/Events/Events/IMinecartEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters

| ZenGetter | Typ                                      |
| --------- | ---------------------------------------- |
| `gracz`   | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `element` | [IItemStack](/Vanilla/Items/IItemStack/) |
| `dłoń`    | Ciąg znaków                              |
