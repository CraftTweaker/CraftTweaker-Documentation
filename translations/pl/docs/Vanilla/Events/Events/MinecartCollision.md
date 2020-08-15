# MinecartCollision

Zdarzenie MinecartCollisionEvent jest uruchamiane za każdym razem, gdy wagonik koliduje z jednostką.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. Wydarzenie inecartCollision`  
Oczywiście możesz również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Zdarzenia MinecartCollision implementują następujące interfejsy i są również w stanie wywołać wszystkie swoje metody/getters/setters:

- [Wydarzenie IMinecart](/Vanilla/Events/Events/IMinecartEvent/)

## ZenGetters

| ZenGetter | Typ                                   |
| --------- | ------------------------------------- |
| `zderz`   | [IEntity](/Vanilla/Entities/IEntity/) |
