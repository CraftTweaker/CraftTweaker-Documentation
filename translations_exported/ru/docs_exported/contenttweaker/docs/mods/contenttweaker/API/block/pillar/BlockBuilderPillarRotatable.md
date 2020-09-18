# Поворот BlockBuilderPillarRotatable

Специальный строитель блоков, который позволяет создавать блоки, которые можно повернуть так же, как и журналы. <p> Это означает, что у него есть одна текстура сверху и снизу и одна текстура для сторон. По умолчанию расположения этих сторон являются именем блока, за которым следуют и либо `_end` или `стороны`. Как и в большинстве случаев здесь по умолчанию генерируются образцы изображений.

Этот класс был добавлен модом с мод-id `contenttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
mods.contenttweaker.block.pillar.BlockBuilderPillar.Rotatable
```

## Реализованные интерфейсы
BlockBuilderPillarRotatable реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Методы
### сборка

Инструкция CoT на самом деле строить то, что этот строитель должен быть построен.

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().build("my_awesome_block");
```

| Параметр               | Тип    | Описание                       |
| ---------------------- | ------ | ------------------------------ |
| местоположение ресурса | String | Путь к ресурсу для этого блока |


### без Текстуры

Позволяет переопределить путь текстуры, которую должны использовать конечные стороны (вверх/вниз). Если пространство имен текстуры находится в пространстве имен CoT или любом из его дополнений (поддерживающих его), то изображение будет создано по умолчанию.

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
новый BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(endTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(<resource:contenttweaker:my_awesome_pillar_end>);
```

| Параметр   | Тип                                                                              | Описание                                    |
| ---------- | -------------------------------------------------------------------------------- | ------------------------------------------- |
| endTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Текстура, используемая для конечных сторон. |



Позволяет переопределить путь текстуры, которую должны использовать конечные стороны (вверх/вниз). Если пространство имен текстуры находится в пространстве имен CoT или любом из его дополнений (поддерживающих его), то изображение будет создано по умолчанию. Использует функцию, которая принимает имя блока в качестве ввода и возвращает конечную текстуру для него.

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
новый BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(endTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(blockName as MCResourceLocation) => новых MCResourceLocation(blockName.namace, blockName.path + "_end"));
```

| Параметр   | Тип                                                                                                                                                                                                     | Описание                  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| endTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | Функция для использования |


### с помощью SideTexture

Позволяет переопределить путь текстуры, которую стороны (только сверху/вниз) должны использовать. Если пространство имен текстуры находится в пространстве имен CoT или любом из его дополнений (поддерживающих его), то изображение будет создано по умолчанию.

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
новый BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(<resource:contenttweaker:my_awesome_pillar_side>);
```

| Параметр     | Тип                                                                              | Описание                      |
| ------------ | -------------------------------------------------------------------------------- | ----------------------------- |
| sidesTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Текстура для боковых панелей. |



Позволяет переопределить путь текстуры, которую стороны (только сверху/вниз) должны использовать. Если пространство имен текстуры находится в пространстве имен CoT или любом из его дополнений (поддерживающих его), то изображение будет создано по умолчанию. Использует функцию, которая принимает имя блока в качестве ввода и возвращает конечную текстуру для него.

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
новый BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture((blockName as MCResourceLocation) => новых MCResourceLocation(blockName.namace, blockName.path + "_sides"));
```

| Параметр     | Тип                                                                                                                                                                                                     | Описание                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| sidesTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | Функция для использования |



