# Wydarzenie IBlock'a

Ten interfejs jest rozszerzony przez wszystkie wydarzenia, które mogą poradzić sobie z blokami na świecie.

## Importowanie klasy

Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuje crafttweaker.event.IBlockEvent;`

## Rozszerzenie IEventPositionable

Ten interfejs rozszerza [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/), co oznacza, że wszystkie funkcje, które IEventPositionable są również obecne w IBlockEvent

## ZenGetters

| Nazwa   | typ                                          |
| ------- | -------------------------------------------- |
| świat   | [IWorld](/Vanilla/World/IWorld/)             |
| Blokada | [Stan IBlocka](/Vanilla/Blocks/IBlockState/) |
| blok    | [IBlock](/Vanilla/Blocks/IBlock/)            |