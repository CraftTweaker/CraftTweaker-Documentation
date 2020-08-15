# IBlockStateMatcher

Объект IBlockStateMatcher может использоваться для сопоставления объекта [IBlockState](/Vanilla/Blocks/IBlockState/) с набором требований или набором соответствующих blockstates.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, накладывая [массив](/AdvancedFunctions/Arrays_and_Loops/) или используя статический `. reate()` метод), так что лучше быть безопасным, чем извините и добавьте импорт.  
`импортировать crafttweaker.block.IBlockStateMatcher;`

## Соответствие специфическому IBlockState

Каждый [IBlockState](/Vanilla/Blocks/IBlockState/) также является IBlockStateMatcher и соответствует только себе.

## Сопоставление любого состояния блока для определенного блока

Вы можете использовать метод [IBlockState](/Vanilla/Blocks/IBlockState/)в `matchBlock()` для создания IBlockStateMatcher, который соответствует любому возможному blockstate для этого блока.

## Calling an IBlockStateMatcher

Есть несколько методов, которые возвращают IBlockStateMatcher

- Использование `IBlockStateMatcher.create()`.
- Используя метод `withMatchedValuesForProperty()` на другом IBlockStateMatcher.
- ИЛИ два IBlockStateMatchers вместе, чтобы получить сложный матч.
- Создание [IBlockState](/Vanilla/Blocks/IBlockState/), так как все объекты IBlockState являются IBlockStateMatchers.

## Составные игроки

При использовании ИЛИ (`|`) для комбинирования IBlockStateMatcher, полученный в результате IBlockStateMatcher больше не привязан к одному конкретному базовому блоку, , так как это будет с [IBlockState](/Vanilla/Blocks/IBlockState/) или IBlockStateMatcher создан с помощью `IBlockStateMatcher. reate()` метод. Вместо этого сопоставление соответствует любому блокадному состоянию, которое соответствовало бы одному из комбинированных матчей.

Поскольку это blockstate не привязано к определенному блоку, невозможно использовать метод `withMatchedValuesForProperty()` для получения другого IBlockStateMatcher.

### статическое создание

`создание статического IBlockStateMatcher (IBlockStateState... blockStates);` параметры:

- [IBlockState](/Vanilla/Blocks/IBlockState/)... blockStates → 0 или более blockstates для сопоставления с этим матчем. 

Возвращает IBlockStateMatcher в соответствии с указанным блокстатусом(ами).

- Если указан ноль `blockStates` , этот матч никогда не будет соответствовать ни одному из блоков. 
- Если только одно blockstate поставляется в `blockStates`, результирующее IBlockStateMatcher совпадает с *любым* блоковым блоком предоставленного IBlockState с любыми значениями свойств, принятыми как совпадающие. Метод `с совпадением значений` может быть использован для добавления более специфичных требований к свойствам. 
- Если поставлено несколько `blockStates` , результирующий IBlockStateMatcher - это то же самое, что и использование оператора OR (`|`) с каждым из предоставленных IBlockStates .

## Методы

### matches

`boolean matches(IBlockState blockState);`  
Параметры:

- [IBlockState](/Vanilla/Blocks/IBlockState/) blockState → Объект blockstate совпадает с

Возвращает логическое значение, представляющее соответствие блокстати требованиям этого матча.  
Вы также можете использовать `A имеет B` , который представляет `A.matches(B)`.

### Получить или добавить разрешенные свойства

*(Эти методы допускаются только в несоставных экземплярах IBlockStateMatcher)*

    IBlockStateMatcher с совпадениемForProperty(String name, String... значение);
    Список<String> getMatchedValuesForProperty(String name);
    Карта<String, List<String>> getMatchedProperties();
    

Параметры:

- Название строки → Имя свойства
- Строка... Значения → Одно или несколько значений, которые может иметь свойство соответствующего IBlockState .

Возвращает IBlockStateMatcher с теми же требованиями к свойствам что и IBlockStateMatcher за исключением указанного свойства `имени`, , который теперь позволяет использовать любое из указанных `значений` в качестве подходящего ввода.

### getMatchingBlockStates

`Коллекция<IBlockState> getMatchingBlockStates();` Возвращает коллекцию каждого [IBlockState](/Vanilla/Blocks/IBlockState/) с любым сочетанием свойств, которые соответствуют этому IBlockStateMatcher. Этот список может содержать блоки, которые невозможно получить через обычные игровые средства. (Пример: `IBlockStateMatcher. reate(<blockstate:minecraft:log>)` вернёт IBlockStateMatcher который совпадает со свойством `axis=none`, наличие текстуры коры со всех 6 сторон.)

### Проверьте, является ли BlockState составным состоянием

`boolean isCompound()`

Что вы ожидаете.

### Получить командСтроковое представление

`Командная строка ZenGetter`

Возвращает строку выражения обработчик скобок, если это необходимо, в паре с вызовом `withMatchedValueForProperty()` . Хотя,  
Имейте в виду, что у возвращаемых вызовов метода нет `""` вокруг параметров.  
Таким образом, если вы хотите скопировать результат, вам нужно вручную добавить их в аргументы!