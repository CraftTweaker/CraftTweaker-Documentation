# IWorld

Obiekt IWorld reprezentuje świat, w którym gracz jest obecny.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.World;`

## ZenMethods bez parametrów i ZenGetters

| Metoda ZenMethod   | ZenGetter           | Typ zwrotu                                                     | Opis                                                                                                                                                                                                                |
| ------------------ | ------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isRemote()         | zdalny              | boolean                                                        | Prawdą jest, że świat jest „niewolnikiem” klientem; zmiany nie zostaną zapisane ani propagowane z tego świata. Na przykład światy serwerów mają ten zestaw do fałszowania, światy klientów mają ten zestaw do true. |
| isRaining()        | deszcz              | boolean                                                        | Zwraca prawda, jeśli obecnie pada deszcz                                                                                                                                                                            |
| isThundering()     | kruszący            | boolean                                                        | Zwraca prawdę, jeśli jest obecnie rozgłaszana                                                                                                                                                                       |
| getMoonPhase()     | faza księżyca       | odcień                                                         | Zwraca bieżącą fazę księżyca                                                                                                                                                                                        |
| isDayTime()        | dayTime             | boolean                                                        | Sprawdza, czy jest to dzień                                                                                                                                                                                         |
| getWorldTime()     | czas                | długie                                                         | Zwraca czas na świecie                                                                                                                                                                                              |
| getDimension()     | wymiary             | odcień                                                         | Zwraca wymiar światowy                                                                                                                                                                                              |
| isSurfaceWorld()   | powierzchnia świata | boolean                                                        | Zwraca czy jesteś w świecie powierzchni czy nie                                                                                                                                                                     |
| getDimensionType() | wymiarowy Typ       | Ciąg znaków                                                    | Zwraca nazwę typu wymiaru                                                                                                                                                                                           |
| getRandom()        | losowy              | [CTRandom](/Mods/ContentTweaker/Vanilla/Types/World/CTRandom/) | Zwraca generator liczb losowych na świecie                                                                                                                                                                          |

## Metody ZenMethods z parametrami

- [IBiome](/Vanilla/Biomes/IBiome/) getBiome([IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);
- boolean setBlockState([ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockstate [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) getBlockState([BlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);