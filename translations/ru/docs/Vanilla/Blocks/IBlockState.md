# IBlockState

Объект IBlockState представляет текущее состояние блока.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.block.IBlockState;`

## Вызов IBlockState

Есть несколько методов, которые возвращают объекты IBlockState:

- используя [обработчик скобок](/Vanilla/Brackets/Bracket_BlockState/) &mdash; `<blockstate:minecraft:log:variant=spruce>`,
- используя статический метод `IBlockState.getBlockState()` (см. ниже для получения дополнительной информации),
- используя метод `getMatchingBlockStates()` от объекта [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/), чтобы получить массив IBlockState,
- используя метод `withProperty()` от другого объекта IBlockState.

## Разрешение IBlockState во время исполнения

Могут возникнуть моменты, когда ваш скрипт может полагаться на взаимодействие с блоком из не загруженного мода, например, в блоке событий в ContentTweaker или в другом загрузчике предварительно индексированных скриптов. Если вы пытаетесь использовать [обработчик скобок](/Vanilla/Brackets/Bracket_BlockState/) для ещё не зарегистрированного блока, обработчик не сможет выполнить и ваш скрипт не будет работать.

Чтобы избежать этого, вы можете использовать статический метод `IBlockState.getBlockState()` для разрешения IBlockState во время выполнения.

### статический getBlockState

`статический IBlockState getBlockState(String blockname, String... Свойства)` Параметры:

- Строка blockname → Строка в формате «изменять:blockname», как она появится на [обработчике Bracket BlockState](/Vanilla/Brackets/Bracket_BlockState/)
- Строка... свойства → Ноль или более строк `"name=value"` пары свойств, применимых к этому блочному состоянию. Любые неопределенные свойства будут использовать то же значение, что и в состоянии блоков по умолчанию для указанного имени блока.

Возвращает IBlockState указанного `blockname` с указанными свойствами ``или blockstate по умолчанию, если свойства не указаны.

## Наследование от IBlockProperties

IBlockState расширяет [IBlockProperties](/Vanilla/Blocks/IBlockProperties/). Это означает, что все методы, доступные для [IBlockProperties](/Vanilla/Blocks/IBlockProperties/) , также доступны объектам IBlockState .

## Расширение IBlockStateMatcher

IBlockState расширяет [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/). Это означает, что все методы, доступные для [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) , также доступны объектам IBlockState .

## Методы и геттеры

| Геттер        | Возвращаемый тип                  | Описание                                                                                            |
| ------------- | --------------------------------- | --------------------------------------------------------------------------------------------------- |
| block         | [IBlock](/Vanilla/Blocks/IBlock/) | Возвращает соответствующий блок                                                                     |
| meta          | int                               | Возвращает текущие метаданные блока                                                                 |
| commandString | string                            | Возвращает возможный [обработчик скобок](/Vanilla/Brackets/Bracket_BlockState/) для этого состояния |

## Методы

### isReplacable

`boolean isReplaceable(IWorld world, IBlockPos pos);`  
Параметры:

- [IWorld](/Vanilla/World/IWorld/) мир → Мир для проверки
- [IBlockPos](/Vanilla/World/IBlockPos/) бак → Положение Блока

Возвращает логическое значение, которое говорит может ли блок быть заменен или нет.

### Получение или изменение свойств

Вы можете получить список всех зарегистрированных свойств, либо как список со всеми именами свойств, либо как карта, которая сопоставляет свойства с их значением.  
Вы также можете проверить, какие значения возможны для данного имени свойства.  
Вы также можете использовать `withProperty` для создания нового объекта IBlockState с измененным свойством.

```zenscript
Список<String> getPropertyNames();
getPropertyValue(String name);
List<String> getAllowedValuesForProperty(String name);

IBlockState withProperty(String name, String valuesForProperty);
```

### Сравнение двух объектов IBlockState

Вы можете использовать `int compare(IBlockState другой);` или ZenCompare Tokens `==` `!=`.  
Длительность возврата разных типов:

- `state.compare(other)` возвращает подсказку, 0 если она равна
- `состояние == другой` возвращает значение переменной "истина"

### Получение явно Blockstate Matcher

Возвращает [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) , который соответствует заданному блоку.

```zenscript
IBlockStateMatcher matchBlock();
```