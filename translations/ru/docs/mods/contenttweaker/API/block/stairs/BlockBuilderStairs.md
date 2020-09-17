# Ступеньки BlockBuilderStairs

Специальный строитель блоков, который позволяет создавать лестницы. <p> У лестниц будет не один, а три текстуры, которые вам нужно предоставить: одна на вершину, одна для нижней и одна для сторон. По умолчанию эти текстуры будут использовать ваше имя блока как имя, суффикс `_top`, `_bottom` или `_sides`. Как и в большинстве случаев здесь по умолчанию генерируются образцы изображений.

Этот класс был добавлен модом с мод-id `contenttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
mods.contenttweaker.block.лестницы.Ступеньки BlockBuilderStairs
```

## Реализованные интерфейсы
BlockBuilderStairs реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Методы
### сборка

Инструкция CoT на самом деле строить то, что этот строитель должен быть построен.

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderStairs>().build("my_awesome_block");
```

| Параметр               | Тип    | Описание                       |
| ---------------------- | ------ | ------------------------------ |
| местоположение ресурса | String | Путь к ресурсу для этого блока |


### текстура снизу

Позволяет переопределить путь текстуры, которую должна использовать нижняя сторона. Если пространство имен текстуры находится в пространстве имен CoT или любом из его дополнений (поддерживающих его), то изображение будет создано по умолчанию.

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.лестницы.Ступеньки BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
новый BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(нижняя текстура как crafttweaker.api.util.MCResourceLocation);
```

| Параметр        | Тип                                                                              | Описание                                |
| --------------- | -------------------------------------------------------------------------------- | --------------------------------------- |
| нижняя текстура | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Текстура, используемая для нижней части |



Позволяет переопределить путь текстуры, которую должна использовать нижняя сторона. Если пространство имен текстуры находится в пространстве имен CoT или любом из его дополнений (поддерживающих его), то изображение будет создано по умолчанию. Использует функцию, которая принимает имя блока в качестве ввода и возвращает конечную текстуру для него.

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.лестницы.Ступеньки BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
новая функция BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(нижняя текстура).Функция<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
новый BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(blockName as MCResourceLocation) => новый MCResourceLocation(blockName.namespace, blockName.path + "_bottom"));
```

| Параметр        | Тип                                                                                                                                                                                                   | Описание                  |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| нижняя текстура | функция.Функция&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | Функция для использования |


### Текстура сзади

Позволяет переопределить путь текстуры, которую стороны должны использовать. Если пространство имен текстуры находится в пространстве имен CoT или любом из его дополнений (поддерживающих его), то изображение будет создано по умолчанию.

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.лестницы.Ступеньки BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
новый BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
```

| Параметр     | Тип                                                                              | Описание                    |
| ------------ | -------------------------------------------------------------------------------- | --------------------------- |
| sidesTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Текстура для боковых сторон |



Позволяет переопределить путь текстуры, которую стороны должны использовать. Если пространство имен текстуры находится в пространстве имен CoT или любом из его дополнений (поддерживающих его), то изображение будет создано по умолчанию. Использует функцию, которая принимает имя блока в качестве ввода и возвращает конечную текстуру для него.

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.лестницы.Ступеньки BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
новый BlockBuilder().withType<BlockBuilderStairs>().SidesTexture(sidesTexture как функция).Функция<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
новый BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(blockName as MCResourceLocation) => новый MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Параметр     | Тип                                                                                                                                                                                                   | Описание                  |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| sidesTexture | функция.Функция&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | Функция для использования |


### withTopTexture

Позволяет переопределить путь текстуры, которую должна использовать верхняя сторона. Если пространство имен текстуры находится в пространстве имен CoT или любом из его дополнений (поддерживающих его), то изображение будет создано по умолчанию.

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.лестницы.Ступеньки BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
новый BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(<resource:contenttweaker:my_awesome_stairs_top>);
```

| Параметр         | Тип                                                                              | Описание                                 |
| ---------------- | -------------------------------------------------------------------------------- | ---------------------------------------- |
| верхняя текстура | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Текстура, используемая для верхней части |



Позволяет переопределить путь текстуры, которую должна использовать верхняя сторона. Если пространство имен текстуры находится в пространстве имен CoT или любом из его дополнений (поддерживающих его), то изображение будет создано по умолчанию. Использует функцию, которая принимает имя блока в качестве ввода и возвращает конечную текстуру для него.

 Возвраты: `Этот конструктор используется для цепи методов`

Тип возврата: [mods.contenttweaker.block.лестницы.Ступеньки BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
новый BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture), как функция.Функция<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>;
```

| Параметр         | Тип                                                                                                                                                                                                   | Описание                  |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| верхняя текстура | функция.Функция&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | Функция для использования |



