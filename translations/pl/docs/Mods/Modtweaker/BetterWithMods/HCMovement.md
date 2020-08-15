# HCMovement

HCMovement wpływa na szybkość, z jaką Gracz może poruszać się podczas włączania lub wewnątrz niektórych bloków. Na przykład domyślnie chodzisz wolniej po trawie, ale szybciej po kamieniu.

Wartość jest liczbą dziesiętną między 0 a 2, gdzie 1 oznacza normalną prędkość bez HCMovement, mniej niż 1 jest wolniejsza, większa niż 1 jest szybsza.

TYLKO HCMovement akceptuje bloki jako dane wejściowe.

```zenscript
mods.betterwithmods.Movement.set(IItemStack stack, wartość zmienna);

```