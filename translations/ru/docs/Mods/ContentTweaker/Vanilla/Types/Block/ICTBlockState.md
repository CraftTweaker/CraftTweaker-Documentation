# ICTBlockState

Объект ICTBlockState представляет текущее состояние блока.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.BlockState;`

## Вызов ICTBlockState

Вы можете получить ICTBlockState в качестве параметра либо в [функции IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/) или в [Обработчике блоков](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Blocks/)

`<block:minecraft:dirt>`

## Методы ZenMethods и ZenGetters

| ZenMethod         | Геттеры | Возвращаемый тип                                                       | Описание                                                         |
| ----------------- | ------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------- |
| getBlock()        | блок    | [БИБлок](/Vanilla/Blocks/IBlock/)                                      | Возвращает реферируемый блок                                     |
| getMeta()         | meta    | int                                                                    | Возвращает метаданные реферированного блока                      |
| canProvidePower() |         | boolean                                                                | Возвращается, если блок реферата может обеспечить мощь редстоуна |
| getMobilityFlag() |         | [PushReaction](/Mods/ContentTweaker/Vanilla/Types/Block/PushReaction/) | Возвращает флаг push-реакции                                     |

## ZenMethods

### незаменимый

`boolean isReplaceable(IWorld world, IBlockPos pos);`  
Параметры:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) мир → Мир для проверки
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) бак → Положение Блока

Возвращает логическое значение, которое говорит может ли блок быть заменен или нет.

### getLightValue

`int getLightValue(IWorld world, IBlockPos blockPos);`  
Параметры:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) мир → Мир для проверки
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) бак → Положение Блока

Возвращает подсказку, представляющую текущее значение света в заданном месте.

### Слабая Сила

`int getWeakPower(IWorld world, IBlockPos blockPos, лицом лицом к лицу);`  
Параметры:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) мир → Мир для проверки
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) бак → Положение Блока
- [лицом](/Mods/ContentTweaker/Vanilla/Types/Block/Facing/) перед → сторона должна быть проверена

Возвращает подсказку, представляющую текущую силу редстоуна на этой стороне.

### getComparatorInputOverride

`int getComparatorInputOverride(IWorld world, IBlockPos blockPos);`

Параметры:

- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) мир → Мир для проверки
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) бак → Положение Блока

Возвращает подсказку, представляющую входной элемент редактора редстоун-компаратора.

### Сравнение двух объектов ICTBlockState

Вы можете использовать `int compare(ICTBlockState другой);` или ZenCompare Tokens `==` `!=`.  
Длительность возврата разных типов:

- `state.compare(other)` возвращает подсказку, 0 если она равна
- `состояние == другой` возвращает значение переменной "истина"