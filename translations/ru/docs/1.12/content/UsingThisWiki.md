# Использование этой вики

This wiki is meant to provide you an outline on which Types exist in crafttweaker and what their uses are.  
There also are some examples in certain entries to provide further clarity.

# Термины
Перед тем как начать, вы должны понять некоторые термины:

## ZenGetter
Геттер ZenScipt &mdash; способ получить информацию о некотором объекте. For example [IItemStack](/Vanilla/Items/IItemStack/) has a ZenGetter called "displayName".  
We use the ZenGetter like this:
```zenscript
//объект.zenGetter;
<minecraft:iron_ingot>.displayName;
```

Геттер всегда что-нибудь возвращает, в данном случае &mdash; текстовое представление имени предмета ("Iron Ingot").


## ZenSetter
A ZenSetter works almost the same way as a ZenGetter does, the only difference is that a ZenSetter sets, a ZenGetter gets.  
Let's stay with our [IItemStack](/Vanilla/Items/IItemStack/), since it also has a ZenSetter called "displayName". Мы знаем, что тип этой записи &mdash; строка.

Мы используем сеттеры ZenScipt вот так:
```zenscript
//объект.сеттер = новоеЗначение;
<minecraft:iron_ingot>.displayName = "Как ни странно, слиток";
```

Сеттер никогда ничего не возвращает, потому что он предназначен для установки, а не получения данных.


## Операторы присваивания
Если у объекта есть и геттер, и сеттер с одинаковым названием (например, [ItemStack.displayName](/Vanilla/Items/IItemStack/)), вы можете использовать другие операторы присваивания помимо `=`:

Depending on the type you can use these: `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
Let's see what they do:

```zenscript
//Так как у нас есть геттер и сеттер с одинаковыми именами, первый можно совмещать:
//объект.сеттер += значение;
//объект.сеттер = объект.геттер + значение;

<minecraft:iron_ingot>.displayName += " судьбы";
<minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " судьбы";
```