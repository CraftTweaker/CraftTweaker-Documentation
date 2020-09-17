# Жидкость

Это позволяет вам добавить жидкости в игру!

## Создать представление жидкости

Перед тем как добавить жидкость, необходимо создать Fluid Representation, которая позволит вам установить свойства жидкости, которую вы хотите добавить.  
Это место для [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/):

```zenscript
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, int color);
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, CTColor color);
```

## Импортировать пакет представления

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.Fluid;`

## Свойства ZenProperties

Чтобы получить/установить свойства, вы можете использовать релевантные ZenGetters/Setters или ZenMethods:

```zenscript
//имя свойства: плотность
//ZenGetter
print(fluid.density);
//ZenSetter
fluid.density = 500;
//ZenMethods
fluid.getDensity();
fluid.setDensity(1000);
```

| Название свойства     | Тип                                                                                        | Требуется | Значение по умолчанию            | Описание/заметки                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------ | --------- | -------------------------------- | -------------------------------------------------------------------------------- |
| unlocalizedName       | string                                                                                     | Да        |                                  | Имя должно быть строчными буквами                                                |
| плотность             | int                                                                                        | Нет       | 1000                             | Как быстро вы можете ходить в жидкости                                           |
| газообразный          | boolean                                                                                    | Нет       | false                            | Жидкий газ (течет вверх, а не вниз)?                                             |
| яркость               | int                                                                                        | Нет       | 0                                | Уровень света, испускаемый жидкостью                                             |
| температура           | int                                                                                        | Нет       | 300                              | Температура флуда                                                                |
| цвет                  | int                                                                                        | Да        |                                  | Цветовой код Fluid                                                               |
| раскрасить            | boolean                                                                                    | Нет       | true                             | Применяется ли цветовой код жидкости?                                            |
| редкость              | string                                                                                     | Нет       | ОБЩИЙ                            | Редкая жидкость, определяет цвет подсказок ("ОБЩИЙ", "UNCOMMON", "RARE", "EPIC") |
| вязкость              | int                                                                                        | Нет       | 1000                             | Как быстро распространяется жидкость                                             |
| звук наполнения       | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/)   | Нет       | SHARE_BUCKET_FILL              | Звук воспроизводится, когда жидкость подобрана ведром                            |
| пустой звук           | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/)   | Нет       | ITEM_BUCKET_PLAYLIST           | Звук воспроизводится, когда жидкость помещена                                    |
| испарение             | boolean                                                                                    | Нет       | false                            | Испаризует ли при помещении в Незер?                                             |
| местоположение        | string                                                                                     | Нет       | contenttweaker:fluids/fluid      | Местоположение, где найти текстуру для по-прежнему жидкости                      |
| Местоположение потока | string                                                                                     | Нет       | contenttweaker:fluids/fluid_flow | Местоположение, где найти текстуру для потоковой жидкости                        |
| материал              | [Определение IMaterialThis](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) | Нет       | ВОДЫ                             | Материал, из которого изготовлен жидкость                                        |

## Регистрация жидкости

Вам нужно позвонить этому методу для регистрации жидкости в игре!  
В противном случае ничего не произойдет!  
После вызова этой функции, вы не можете отменить регистрацию жидкости или изменить любые ее свойства!

```zenscript
fluid.register();
```

## Пример скрипта

```zenscript
#loader contenttweaker
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Fluid;
import mods.contenttweaker.Color;

var zsFluid = VanillaFactory.createFluid("zs_fluid", Color.fromHex("FF69B4"));
zsFluid.fillSound = <soundevent:block.anvil.place>;
zsFluid.register();
```

## Локализация жидкости

Вам нужно добавить `fluid.fluid.Name = Локализованное имя` в языковые файлы. В качестве альтернативы, вы можете использовать [функцию локализации CraftTweaker](/Vanilla/Game/IGame/), хотя рекомендуется использовать языковые файлы!