# IIngredient

Иингредиент — ингредиент для рецептов.  
Это может быть [предмет](/Vanilla/Items/IItemStack/), [рудной словарь](/Vanilla/OreDict/IOreDictEntry/), [жидкость](/Vanilla/Liquids/ILiquidStack/) и многое другое.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`импорт crafttweaker.item.IIngredient;`

## Импорт пакета IIngredient

Обычно это не требуется, но в некоторых случаях рецепты не будут работать, пока вы [не импортируете](/AdvancedFunctions/Import/) пакет IIngredient.  
Вы можете сделать это, используя следующий импорт:

```zenscript
импорт crafttweaker.item.IIngredient;
```

## Функции

Итак, что мы можем сделать с этим?

### Строка команд

Строка команды — как вы будете вызвать этот элемент в ZS.  
Это может быть обработчик скобок или что-то подобное.

```zenscript
val item = <minecraft:iron_ingot>;

//выводит "<minecraft:iron_ingot>"
print(item.commandString);
```

### Отметить

Вы можете отметить IIngredient, чтобы позже вы могли использовать его в [функциях создания](/Vanilla/Recipes/Crafting/Recipe_Functions/). Вы также можете получить наложенную ранее отметку.

```zenscript
//Отмечает выбор с помощью String Picky
//item.marked(name) <-- Имя - строка!
val markedPick = <minecraft:diamond_pickaxe>.marked("Щелка");

//выводит "Щёлку"
print(markedPick.mark);
```

### Количество

Если вы хотите использовать более одного предмета, вы можете установить сумму в IIngredient.  
Это так же просто умножить IIngredient на целое число.  
Также возможно вернуть сумму.

```zenscript
val multipleApples = <minecraft:apple> * 3;

//выводит 3
print(multipleApples.amount);
```

### ИГРАТЬ ИГРЕДЕНТ

Иногда вы хотите либо IIngredient X или Y, но не хотите создавать рецепт для каждой возможности? Вот почему существует или метод для IIngredients:

```zenscript
val item1 = <minecraft:apple>;
val item2 = <minecraft:carrot>;

val either = item1 | item2;
val either2 = item1.or(item2);
```

### Получить возможные товары или жидкости

Иногда Igredient представляет более чем один предмет, Например, если вы используете [OreDictEntry](/Vanilla/OreDict/IOreDictEntry/) или если вы OR-ed два ингредиента.  
Вы можете получить все возможные элементы для этого IIngredient как список <[IItemStack](/Vanilla/Items/IItemStack/)> список, используя первую функцию.  
Вторая функция выполняет то же самое, что и первая функция, но возвращает [IItemStack](/Vanilla/Items/IItemStack/)[] вместо списка. То же самое касается жидкостей в третьей функции, только они возвращают [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) списка.

```zenscript
//Возвращает список IItemStack
//возможные предметы: все железные слитки и золотой слиток из MC
val itemsIngredient = <ore:ingotIron> | <minecraft:gold_ingot>


//Возвращает список ILiquidStack |
//возможные ликвидации: Lava and Water
val liquidsIngredient = <liquid:lava> | <liquid:water>;


Предмет в Ингредиенте. tems{
    //Выводит отображаемое имя товара
    print(элемент). isplayName);
}

для предмета в Ingredient.itemArray{
    //Выводит имя каждого предмета
    print(itemArray{ 
 //Выводит имя каждого предмета). isplayName);
}

для жидкости в liquidsIngredient. iquids{
    //Выводит каждое возможное имя дисплея
    print(жидкость). isplayName);
}

для жидкости в <minecraft:water_bucket>.liquids {
    //Выводит содержащуюся жидкость, т.е. воду.
    //Может не работать для каждого пункта.
    print(liquid.displayName);
}
```

### Преобразовать Ингредиент при создании

Иногда вы хотите, чтобы предмет не использовался при создании предмета, а получал повреждение или возврат совершенно другого предмета.  
Это есть преобразователи предметов.

```zenscript
<br />val item = <minecraft:apple>;

//Предмет не будет потрачен и останется в сетке
преобразованный предмет = предмет. euse();

//Предмет не будет потрачен, и весь стек будет возвращен вам (дает).
transedItem = item.giveBack();

//предмет будет потребляться, но даст вам определенный стек (слот создания будет очищен!).
преобразованный элемент = элемент. iveBack(<minecraft:potato>);

//предмет будет заменен указанным предметом, который вместо этого перейдет в слот создания
преобразованный предмет = предмет. ransformReplace(<minecraft:potato>);

//повреждает элемент на 1
преобразованный элемент = элемент. ransformDamage();

//повреждает предмет заданным значением
transformedItem = item.transformDamage(3);

//предмет будет потребляться, вне зависимости от того, что.
transedItem = item.noReturn();

//Причина потребления нескольких предметов.
transformedItem = item.transformConsume(3);
```

### Условия ингредиентов

Иногда вы хотите, чтобы ваш ингредиент имел конкретный тег или работал только если (нет) поврежден. Эти условия могут быть добавлены в ваши ингредиенты следующим образом:

```zenscript
val item = <minecraft:apple>;

//Предмет будет принят только с убытком по крайней мере 1 очко
запрограммированный предмет = предмет. nlyDamaged();

//Предмет будет принят только с заданным значением урона
= Предмет nlyDamageAtLeast(10);

//Предмет будет принят только с не более чем указанными точками повреждения
условного предмета = предмет. nlyDamageAtMost(100);

//Пункт будет приниматься только с очками урона больше или равно первому и меньшему или равному 2-му Целю.
conditionedItem = item.onlyDamageBetween(10,100);

//Предмет будет принят только указанным тегом. Элемент может иметь больше/других тегов, чем указано, они игнорируются при отмеченном флажке.
//Если вы хотите, чтобы JEI показывал тэг в окне рецепта, вам нужно добавить тэг с помощью "withTag(tag)"
conditionedItem = item. nlyWithTag({display: {Name: "Tomato"}});

//Предмет будет принят только указанным Тегом. Элемент может иметь больше/других тегов, чем указано, они игнорируются при отмеченном флажке.
//Примечание: Это может работать не со всеми ингредиентами, но будет работать для предметов. Pro side to using this is that JEI will show the tags in the recipe!
conditionedItem = item.withTag({display: {Name: "Tomato"}});

//Предмет будет принят только если в стеке по крайней мере указанной суммы. В основном используется в сочетании с потребляющим трансформатором.
//Обратите внимание, что если добавить только этот предмет, он будет потреблять только по одному предмету.
conditionedItem = item.onlyStack(32);
```

### Соответствие

Если вы хотите проверить, соответствует ли IItemStack вашему IIngredient, вы можете использовать метод сопоставления. Это вернет логическое значение. Если IIngredient представляет жидкость, то проверит, является ли предмет допустимым контейнером для этой жидкости.

```zenscript
print(<ore:ingotIron>.matches(<minecraft:iron_ingot>));
print(<ore:ingotIron>.matchesExact(<minecraft:iron_ingot>));
```

Вы также можете совпадать с двумя объектами Igredient, в этом случае вам нужно использовать ```in``` оператор:

```zenscript
val ingots = <minecraft:iron_ingot> | <minecraft:gold_ingot>;
val Ingot = <ore:ingotIron>;
val ingotGold = <minecraft:gold_ingot>;

//истина, как у ингредиентов <minecraft:gold_ingot>
слитков есть слитки;

//ложь, как <minecraft:iron_ingot> не найдено в <ore:ingotGold>
слитков в oreIngo;
```