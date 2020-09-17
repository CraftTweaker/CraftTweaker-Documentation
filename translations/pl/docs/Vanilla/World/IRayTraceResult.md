# Wynik IRayTraceReult

Gdy gracz patrzy lub klika na coś, co wystrzeliwuje obrazek do momentu, gdy uderza w to, co potrzebuje do uderzenia, lub przegapi.  
Wynik takiego trafienia jest obiektem IRayTraceResult.

## Importowanie klasy

Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuj crafttweaker.world.IRayTraceResult`

## ZenGetters

Jedyne, co możesz zrobić, to pobieranie informacji z tych obiektów, tutaj, które:  
Uważaj, ponieważ wszyscy poborcy, którzy nie zwracają boolu, mogą zwrócić `null`!

| Nazwa   | typ                                    |
| ------- | -------------------------------------- |
| isMiss  | bool                                   |
| Obiekt  | bool                                   |
| isBlock | bool                                   |
| podmiot | [IEntity](/Vanilla/Entities/IEntity/)  |
| bloki   | [IBlockPos](/Vanilla/World/IBlockPos/) |
| sideHit | [IFacing](/Vanilla/World/IFacing/)     |