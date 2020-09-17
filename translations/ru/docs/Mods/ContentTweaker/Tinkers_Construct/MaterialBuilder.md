# Материал строитель

С помощью этого пакета вы можете создавать материалы, с которыми можно создавать инструменты!

## Импорт класса

Возможно, вам потребуется импортировать класс, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`import mods.contenttweaker.tconstruct.MaterialBuilder;`

## Создание материала

Прежде всего, вам нужно будет создать конструктор материалов.  
Это можно сделать с помощью статического метода создания.

```zenscript
//mods.contenttweaker.tconstruct.MaterialBuilder.create(String identifier);
val myMat = mods.contenttweaker.tconstruct.MaterialBuilder.create("kindlich_mat");
```

Помните, что вам нужно зарегистрировать материал после того, как вы выполните свои изменения.  
Это может быть сделано методом `реестра` который возвращает [представление материалов](/Mods/ContentTweaker/Tinkers_Construct/Material/) нового материала.

```zenscript
myMat.register();
```

## Свойства

Вы можете установить и получить эти свойства с помощью `myMaterial.name`.

| Свойства               | Тип                                              | Дополнительные заметки                                                  |
| ---------------------- | ------------------------------------------------ | ----------------------------------------------------------------------- |
| identifier             | string                                           | Уникальное имя                                                          |
| цвет                   | int                                              |                                                                         |
| hidden                 | bool                                             |                                                                         |
| жидкость               | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)   | Выход плавильной продукции                                              |
| ремесленный            | bool                                             | Может быть создан в конструкторе частей                                 |
| кастовый               | bool                                             | Может быть создан с помощью касты. Требуется установка жидкости!        |
| представительный пункт | [IItemStack](/Vanilla/Items/IItemStack/)         | Отображается в руководстве по осевым                                    |
| представитель Ore      | [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) | Показать, если репрезентативный предмет является нулевым                |
| осколок                | [IItemStack](/Vanilla/Items/IItemStack/)         | Используется вместо предмета осколка нападающего в конструкторе частей. |
| localizedName          | string                                           | Отображаемое имя                                                        |

## Вычисляемые свойства

### Локализатор

Вы можете использовать эту функцию для вычисления имен материалов, если это нужно.  
Использует [представление материала](/Mods/ContentTweaker/Tinkers_Construct/Material/) этого материала и название инструмента, переименованного (например "Mattock")

```zenscript
myMAt.itemLocalizer = function(thisMaterial, itemName){return "Cool " + itemName;};
```

## Добавить материалы

Если вы используете данный элемент в конструкторе части, вы можете установить количество точек материала, которые будут давать, или сколько предметов будет починить.

```zenscript
//myMaterial.addItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(144) int amountMatched));
myMaterial.addItem(<item:minecraft:iron_pickaxe>);
myMaterial.addItem(<item:minecraft:iron_block>, 4, 288);

//myMaterial.removeItem(IItemStack item);
myMaterial.removeItem(<minecraft:iron_block>);
```

- `элемент` - это предмет, который соответствует данному предмету. Вы можете использовать [Условия предмета](/Vanilla/Items/Item_Conditions/) , но не преобразователей. 
- `Нужна сумма` — это совпадающее количество предметов. Вы можете разделить их на все ячейки, которые предоставляет ковка инструментов, что также позволяет вам идти выше 64. Во втором примере выше вам нужно 4 железных блока на добавку. По умолчанию 1.
- `Соответствующее количество` - это количество бонусных очков за `количество` требуется. Во втором примере над четырьмя железными блоками дают две точки материала. По умолчанию используется 144 (один слитки/один материал значения).
- If you use the `remove function`, it will remove all trait ingredients that match for the item.

## Черты материала

Вы можете добавить симптом к материалу.  
Все предметы из этого материала будут иметь этот симптом.  
Использует строку с идентификатором симптома, и необязательной строкой `зависимости` для указания на какие типы элементов должны быть затронуты симптомом.  
Или же вы можете использовать [представление симптомов](/Mods/ContentTweaker/Tinkers_Construct/Trait/), хотя это работает, только если симптом уже инициализирован время CoT запускает (так вероятно, только для пользовательских симптомов). Возможные значения для `зависимостей`:

- `null` (по умолчанию) → Все предметы, если только это устройство не имеет других симптомов.
- `"голова"`
- `"обработать"`
- `"сверху"`
- `"лук"`
- `"bowstring"`
- `"снаряд"`
- `"вал"`
- `"флетчик"`

```zenscript
myMaterial.addMaterialTrait("fiery");
myMaterial.addMaterialTrait("fiery", "bowstring");
```

Вы также можете удалить материал и (что особенно полезно при выполнении партийных материалов).  
Вы удаляете их с помощью идентификационной строки и необязательной зависимости.  
Если вы опустите зависимость или используйте `null` все симптомы с этим идентификатором будут удалены.

```zenscript
myMaterial.remove(String identifier, @Optional String dependency);
myMaterial.remove("cactus");
myMaterial.remove("cactus", "bowstring");
```

## Статистика материала

Чтобы TiCon мог строить ваши материалы, ему нужно знать о характеристиках материала.  
Будут построены только типы инструментов, характеристики которых были добавлены!

```zenscript
<br />myMat.addHeadMaterialStats(int durability, float miningSpeed, float attackdamage int harvestLevel);
myMat.removeHeadMaterialStats();


myMat.addHandleMaterialStats(float modifier, int durability);
myMat. emoveHandleMaterialStats();


myMat.addExtraMaterialStats(int extraDurability);
myMat.removeExtraMaterialStats();


myMat.addBowMaterialStats(float drawSpeed, float range, float bonusDamage);
myMat. emoveBowMaterialStats();


myMat.addBowStringMaterialStats(float modifier);
myMat.removeBowStringMaterialStats();


myMat.addArrowShaftMaterialStats(float modifier, int bonusAmmo);
myMat.removeArrowShaftMaterialStats();


myMat.addFletchingMaterialStats(float accuracy, float modifier);
myMat.removeFletchingMaterialStats();


myMat.addProjectileMaterialStats();
myMat.removeProjectileMaterialStats(); 
 myMat.removeProjecialStats();
```

## Пример

```zenscript
#loader contenttweaker
#modloaded tconstruct

val testMat = mods.contenttweaker.tconstruct.MaterialBuilder.create("kindlich_mat");
testMat.color = 0x8e661b;
testMat.craftable = true;
testMat. iquid = <liquid:lava>;
testMat.castable = true;
testMat.addItem(<item:minecraft:comparator>);
testMat. ddItem(<item:minecraft:repeater>, 1, 2);
testMat.addItem(<item:minecraft:red_flower:4>);
testMat.representativeItem = <item:minecraft:red_flower:4>;
testMat. ddHeadMaterialStats(100, 1.5f, 5.5f, 5);
testMat.addHandleMaterialStats(0.3, 500);
testMat.addBowStringMaterialStats(0.5f);
testMat.addMaterialTrait(<ticontrait:kindlich_test>, "bowstring");
testMat. ddMaterialTrait(<ticontrait:kindlich_test>, "head");
testMat.addMaterialTrait("blasting", "bowstring");
testMat. ddMaterialTrait("blasting", "head");

//null (или не указывающий этот параметр вообще) означает, что это симптом по умолчанию.
//По умолчанию симптомы запрашиваются только при отсутствии других симптомов к этому типу материала.
//В этом случае, плотный симптом будет только на инструментальных стержнях, потому что бокни и головы уже имеют другие симптомы.
testMat.addMaterialTrait("dense", null);

//Faulty, должна быть ошибка, хотя только во время init, тогда строки будут проверяться.
testMat.addMaterialTrait("dance", null);

testMat.itemLocalizer = function(thisMaterial, itemName){return "Cool " + itemName;};
testMat.localizedName = "Wicked";
testMat.register();
```