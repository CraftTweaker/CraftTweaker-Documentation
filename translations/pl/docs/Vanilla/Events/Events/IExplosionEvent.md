# Wydarzenie IExplosionEvent

Ten interfejs jest rozszerzony przez wszystkie zdarzenia eksplozji. Oznacza to, że możesz użyć poniższych getterów, aby uzyskać dostęp do szczegółów pozycji.

## Importowanie klasy
Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuje crafttweaker.event.IExplosionEvent;`

## ZenGetters

| Nazwa   | typ                                    |
| ------- | -------------------------------------- |
| świat   | [IWorld](/Vanilla/World/IWorld/)       |
| pozycja | [IBlockPos](/Vanilla/World/IBlockPos/) |
| x       | podwójne                               |
| y       | podwójne                               |
| z       | podwójne                               |
