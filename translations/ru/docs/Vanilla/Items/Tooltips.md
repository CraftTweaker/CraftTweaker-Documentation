# Подсказки

Добавление или удаление всплывающих подсказок очень просто:  
Все, что вам нужно — это элемент (или oreDict или аналогичный элемент), другими словами, IIngredient.

## Очистка подсказок

Это удалит ВСЕ подсказки из `элемента`

```zenscript
item.clearTooltip();
```

## Удаление подсказок

Эта функция удаляет все подсказки, соответствующие заданному регулярному выражению. Одна подсказка, как правило, является одной строкой текста (если не существует принудительных прерываний строк из-за пробела).

```zenscript
item.removeTooltip(regex);
```

`элемент` является [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`tT` является строкой

## Обычные подсказки

Это добавляет `tT` в качестве tooltip к `элементу`.

```zenscript
item.addTooltip(tT);

<minecraft:chest>.addTooltip("багажа, что я могу сказать больше?");
```

`элемент` является [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`tT` является строкой

## Подсказки Shift

Добавляет подсказку, которая будет видна только при удерживании сдвига.  
Вы также можете добавить информацию, которая будет видна, когда вы не держите сдвиг (обычно используется для создания чего-либо, например, сообщение, сообщающее о всплывающей подсказке.)

```zenscript
item.addShiftTooltip(tT);
item.addShiftTooltip(tT, info);

<minecraft:chest>.addShiftTooltip("STORAGE!!!");
<minecraft:redstone>.addShiftTooltip("RED!!!", "Hold shift to know what I am");
```

`пункт` является [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`tT` является [IFormattedText](/Vanilla/Utils/IFormattedText/). Вы также можете использовать строку, когда они автоматически преобразуются.  
`информация` является [IFormattedText](/Vanilla/Utils/IFormattedText/). Вы также можете использовать строку по мере их автоматического преобразования.

# Markup

Мир красок, и поэтому должны быть все наши подсказки. Вы также можете использовать эти опции, если вы хотите использовать зеленый текст, который будет зачеркнут)

## Окраска строки

Вы можете применить один из 16 цветов к вашей строке

```zenscript
формат.черный
формат.darkBlue
формат.darkGreen
формат.darkAqua
формат.darkRed
формат.darkPurple
формат.gold
формат. луч
форма.darkGray
формат.Синяя
формат.green
формат.aqua
формат.red
формат.lightPurple
формат.жёлтый
формат.белый
```

```zenscript
<minecraft:stick>.addTooltip(форма.green("Этот не создан"));
```

## Форматирование строки

Вы можете применить различные форматы к вашей строке, если хотите:

```zenscript
format.obfuscated
format.bold
format.strikethrough
format.underline
format.italic
```

```zenscript
<minecraft:stick>.addShiftTooltip(format.strikethrough("Это плохая подсказка"));
```

## Подсказка функции

Вы можете заменить параметр [IFormattedText](/Vanilla/Utils/IFormattedText/) функцией ITooltipFunction (`импортировать crafttweaker.item. Функции TooltipFunction;`).  
Эти функции позволяют динамически генерировать всплывающие подсказки на основе данной IItemStack.

Функция подсказки - это функция, которая принимает [IItemStack](/Vanilla/Items/IItemStack/) и возвращает всплывающие подсказки как строку. Это означает, что использование команды `формата` *не работает* для этих функций, вам нужно полагаться на префиксы форматирования Minecraft, если вам это нужно сделать.

Для подсказок переключения вы можете также обеспечить вторую функцию, , которая позволяет также генерировать подсказку, которая должна быть показана при ненажатом переключении (shift is not presed). Для инструментов переключения это либо оба параметра как функция, либо как [IFormattedText](/Vanilla/Utils/IFormattedText/), без смешивания!

```zenscript
addAdvancedTooltip(ITooltipFunction fn);
addShiftTooltip(ITooltipFunction fn, @Optional ITooltipFunction infoFn);


//Пример
<ore:myAxeOreDictionary>dd(<minecraft:iron_axe:*>, <minecraft:golden_axe:*>, <minecraft:diamond_axe:*>);

<ore:myAxeOreDictionary>. ddAdvancedTooltip(function(item) {   
    return "Damage: " ~ пункт. amage ~ " / " ~ item.maxDamage;
});


<ore:myAxeOreDictionary>. ddShiftTooltip(function(item) {    
    return "Uses left: " ~ (item). axDamage - item.damage);
}, function(item){
    return "Hold shift for some juicy math.";
});
```