# ExplosionDetonate

Wydarzenie ExplosionDetonate zostało wystrzelone krótko przed wybuchem. Nie można go anulować.

## Klasa wydarzenia
Musisz aktywować wydarzenie w nagłówku funkcji jako klasa:  
`crafttweaker.event. xplosionDetonateEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i wtedy użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia
Wydarzenia ExplosionDetonate zaimplementują następujące interfejsy i są w stanie wywołać wszystkie swoje metody/pobierające/ustawiające:

- [Wydarzenie IExplosionEvent](/Vanilla/Events/Events/IExplosionEvent/)


## ZenGetters
Z wydarzenia można uzyskać następujące informacje:

| ZenGetter            | ZenSetter | Typ                                            |
| -------------------- | --------- | ---------------------------------------------- |
| `podmioty dotknięte` |           | [IEntity](/Vanilla/Entities/IEntity/)[]        |
| `affectedPositions`  |           | [IBlockPos](/Vanilla/Blocks/IBlockPosition/)[] |
