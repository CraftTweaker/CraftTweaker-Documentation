# GraczDeathDrops

Wydarzenie DeathDrops Gracza jest strzelane za każdym razem, gdy przedmioty gracza spadną na ziemię z powodu śmierci gracza.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerDeathDropsEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerDeathDrops zaimplementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter        | Typ zwrotu                                                   |
| ---------------- | ------------------------------------------------------------ |
| `gracz`          | [IPlayer](/Vanilla/Players/IPlayer/)                         |
| `elementy`       | [`Lista<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `Źródło obrażeń` | [Źródło ID](/Vanilla/Damage/IDamageSource/)                  |

## Modyfikowanie kropel przedmiotu

Możesz albo dodać do droplista, albo całkowicie zastąpić go nowymi:

```zenscript
Zdarzenie = //odniesienie do listy IEntityItem.

//event.addItem(element IItemStack);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.World, event.player.position));
```