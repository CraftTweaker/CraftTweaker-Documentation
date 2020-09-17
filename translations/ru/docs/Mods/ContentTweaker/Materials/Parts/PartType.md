# Тип частицы

Тип части можно рассматривать как группу, в которую помещаются несколько частей, например `пунктов`

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.PartType;`

## Получение такого объекта

Вы можете использовать [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) для извлечения существующего объекта PartType или создания совершенно новых.  
Посмотрите ниже запись, чтобы научиться создавать новый тип партнёрства.

<details>
    <summary>Следующие типы предварительно зарегистрированы:</summary>
    <ul>
        <li>элемент</li>
        <li>блок</li>
        <li>руда</li>
        <li>жидкость</li>
        <li>броня</li>
        <li>minecart</li>
    </ul>
</details>

## ZenMethods

Вы можете получить следующую информацию от PartType:

| ZenMethod | Возвращаемый тип |
| --------- | ---------------- |
| getName() | string           |

Вы можете задать следующую информацию на PartType:

| ZenMethod                  | Тип параметра                                                                  |
| -------------------------- | ------------------------------------------------------------------------------ |
| setData(IPartDataPiece[]); | [Данные IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)[] |

## Создать новый тип PartType

Если вы, по какой бы причине когда-либо необходимо зарегистрировать новый тип PartType, вам нужно будет знать две вещи:

- Какое имя будет иметь новый тип partType
- Как [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) создан из [Частей](/Mods/ContentTweaker/Materials/Parts/Part/) , которые этого типа будут зарегистрированы

Первый прост, это строка.  
Второй немного сложнее, это функция, которая принимает MaterialPart в качестве входной информации:

```zenscript
#loader contenttweaker


import mods.contenttweaker.MaterialSystem;

val ourType = MaterialSystem. reatePartType("cool_type", function(materialPart){

});

//Используйте новый тип для создания части
val ourPart = моды. ontenttweaker.MaterialSystem.getPartBuilder().setName("cool_part").setPartType(ourType).build();

//Создание нового материала и регистрация вновь созданной части.
val ourMaterial = MaterialSystem.getMaterialBuilder().setName("Lawrencium").setColor(15426660).build();
ourMaterial.registerPart(ourPart);

```