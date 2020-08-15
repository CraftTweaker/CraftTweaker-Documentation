# Rozwijanie gracza

Wydarzenie Advancement jest uruchamiane za każdym razem, gdy gracz otrzyma Advancement.

## Klasa wydarzenia

Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. layerAdvancementEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Zdarzenia PlayerAdvancement zaimplementują następujące interfejsy i są w stanie wywołać wszystkie swoje metody/pobierające/ustawiające:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter | Typ zwrotu  |
| --------- | ----------- |
| `id`      | ciąg znaków |

## Id

Oprócz funkcjonalności, którą gracz może otrzymać identyfikator zaawansowania jako ciąg znaków.

Może to być na przykład ciąg znaków

```zenscript
"minecraft:story/mine_diamond"
```