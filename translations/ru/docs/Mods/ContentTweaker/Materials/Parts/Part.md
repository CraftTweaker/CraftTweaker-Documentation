# Часть

Часть — это форма предмета, в которой находится предмет, например передача или руда.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.Part;`

## Получение такого объекта

Вы можете получить существующую часть с помощью [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) или создать новую с помощью [Builder Part Part](/Mods/ContentTweaker/Materials/Parts/Part_Builder/)

<details>
    <summary>Следующие типы были предварительно зарегистрированы (заголовки <a href="../PartType">типов частей</a>):</summary>
    <h4>Элементы:</h4>
        <ul>
            <li>Луч<img src="../Assets/beam.png" alt="иконка"></li>
            <li>Болт<img src="../Assets/bolt.png" alt="иконка"></li>
            <li>Корпус<img src="../Assets/casing.png" alt="иконка"></li>
            <li>Кольцо<img src="../Assets/clump.png" alt="иконка"></li>
            <li>Хрустальный кристалл<img src="../Assets/crystal.png" alt="иконка"></li>
            <li>Дробленная руда (дробленная_руда)<img src="../Assets/crushed_ore.png" alt="иконка"></li>
            <li>Плотная пластина (плотная пластина)<img src="../Assets/dense_plate.png" alt="иконка"></li>
            <li>Грязная пыль (dirty_dust)<img src="../Assets/dirty_dust.png" alt="иконка"></li>
            <li>Пыль<img src="../Assets/dust.png" alt="иконка"></li>
            <li>Снаряжение<img src="../Assets/gear.png" alt="иконка"></li>
            <li>Ingot<img src="../Assets/ingot.png" alt="иконка"></li>
            <li>Ногетская<img src="../Assets/nugget.png" alt="иконка"></li>
            <li>Пластинчатый<img src="../Assets/plate.png" alt="иконка"></li>
            <li>Жезл<img src="../Assets/rod.png" alt="иконка"></li>
            <li>Осколок<img src="../Assets/shard.png" alt="иконка"></li>
        </ul>
    <h4>Блоки:</h4>
        <ul>
            <li>Блок<img src="../Assets/block.png" alt="иконка"></li>
        </ul>
    <h4>Ores:</h4>
        <ul>
            <li>Руда</li>
            <li>Плотная руда (dense_ore)</li>
            <li>Плохая руда (плохо руда)</li>
        </ul>
    <h4>Флюиды:</h4>
        <ul>
            <li>Molten</li>
        </ul><br />
    <h4>Armor:</h4>
        <ul>
            <li>Броня <img src="../Assets/armor_head.png" alt="значок головы"><img src="../Assets/armor_chest.png" alt="значок сундука"><img src="../Assets/armor_legs.png" alt="значок ног"><img src="../Assets/armor_feet.png" alt="значок ног"></li>
        </ul>
    <h4>Minecart</h4>
        <ul>
            <li>Minecart</li>
        </ul>
</details>

## Поля

Вы можете получить следующую информацию из части:

| ZenMethod                 | Возвращаемый тип                                                                |
| ------------------------- | ------------------------------------------------------------------------------- |
| hasOverlay()              | boolean                                                                         |
| getName()                 | string                                                                          |
| getUnlocalizedName()      | string                                                                          |
| getShortUnlocalizedName() | string                                                                          |
| getPartType()             | [Тип частицы](/Mods/ContentTweaker/Materials/Parts/PartType/)                   |
| getPartTypeName()         | string                                                                          |
| getOreDictPrefix()        | string                                                                          |
| getData()                 | Список<[IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)\> |

## Зарегистрироваться на материал(ы)

Вы можете использовать это для регистрации одного или нескольких материалов в этой части

```zenscript
part.registerToMaterial(Material material);
part.registerToMaterials(Material[] material);
```

Функция либо возвращает один объект [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) или список из них, в зависимости от того, зарегистрировали ли Вы один или несколько материалов одновременно.