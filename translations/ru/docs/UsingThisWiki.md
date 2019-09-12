# Использование этой вики

This wiki is meant to provide you an outline on which Types exist in crafttweaker and what their uses are.  
There also are some examples in certain entries to provide further clarity.

# Термины

Перед тем как начать, вы должны понять некоторые термины:

## Геттер

Геттер ZenScipt — способ получить информацию о некотором объекте. Например, у [IItemStack](/Vanilla/Items/IItemStack/) есть геттер displayName.  
Мы используем геттер вот так:

```zenscript
//объект.zenGetter;
<minecraft:iron_ingot>.displayName;
```

Геттер всегда что-нибудь возвращает, в данном случае &mdash; текстовое представление имени предмета ("Iron Ingot").

## Сеттер

Сеттер работает почти так же, как и геттер, единственное отличие в том, что сеттер устанавливает значение, а геттер &mdash; получает.  
Давайте снова начнем с [IItemStack](/Vanilla/Items/IItemStack/), у которого также есть сеттер displayName. Мы знаем, что тип этой записи &mdash; строка.

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