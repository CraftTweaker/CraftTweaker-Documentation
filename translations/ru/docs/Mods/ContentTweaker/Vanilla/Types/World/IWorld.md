# IWorld

IWorld объект представляет мир, в котором находится игрок.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.World;`

## Методы без параметров и геттеры

| ZenMethod          | Геттеры           | Возвращаемый тип                                               | Описание                                                                                                                                                                                            |
| ------------------ | ----------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Удалить()          | удаленный         | boolean                                                        | Правда, если мир является "рабородным" клиентом, изменения не будут сохранены или распространены из этого мира. Например, серверные миры имеют значение false, клиентские миры имеют значение true. |
| isRaining()        | дождь             | boolean                                                        | Возвращает значение true, если дождь сейчас идёт                                                                                                                                                    |
| isThundering()     | грабеж            | boolean                                                        | Возвращает значение true, если оно в данный момент грозит                                                                                                                                           |
| getMoonPhase()     | Лунная Фаза       | int                                                            | Возвращает текущую фазу луны                                                                                                                                                                        |
| isDayTime()        | dayTime           | boolean                                                        | Проверяет, есть ли дневное время                                                                                                                                                                    |
| getWorldTime()     | время             | long                                                           | Возвращает время мира                                                                                                                                                                               |
| getDimension()     | измерение         | int                                                            | Возвращает измерение мира                                                                                                                                                                           |
| isSurfaceWorld()   | поверхностный мир | boolean                                                        | Возвращает ли вы в мире поверхности                                                                                                                                                                 |
| getDimensionType() | тип измерения     | String                                                         | Возвращает имя типа размера                                                                                                                                                                         |
| getRandom()        | случайный         | [CTRandom](/Mods/ContentTweaker/Vanilla/Types/World/CTRandom/) | Возвращает генератор случайных чисел мира                                                                                                                                                           |

## Методы с параметрами

- [IBiome](/Vanilla/Biomes/IBiome/) getBiome([IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);
- boolean setBlockState([ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState, [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) getBlockState([IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);