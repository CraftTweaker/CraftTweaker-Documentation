# Оператор импорта

Вместо прописывания полного имени функции каждый раз вы можете просто импортировать функцию, чтобы выполнять свои задачи. Полезно при использовании функций модов.

## Note on pre 1.12 imports

With CraftTweaker 1.12, a lot of code has changed.  
Before, all internal functions were called using `minetweaker.package.function`. Now, `minetweaker` has been replaced by `crafttweaker`, so now it sais `crafttweaker.name.function`!

Should you ever experience any importing issues with scripts from this wiki, you may want to check if your MC version is below 1.12.

## Простой импорт

Импорт должен быть обозначен в верхней части скрипта. Вам нужно указывать импорт каждого из скриптов отдельно. Будьте осторожны, чтобы не импортировать две функции с одинаковым именем, для этого используйте оператор as

    //Это импортирует функцию removeAndHide из JEI
    import mods.jei.JEI.removeAndHide;
    
    //А это импортирует весь пакет JEI
    import mods.jei.JEI;
    
    //removeAndHide — функция, мы можем просто вызывать ее
    removeAndHide(<minecraft:dirt>);
    
    //JEI — пакет, поэтому мы должны указать, какую функцию оттуда мы хотим использовать
    JEI.hide(<minecraft:diamond>);
    

## Оператор as

Иногда вы хотите импортировать две функции с одинаковыми именами или просто сделать, чтобы ваши скрипты выглядели лучше с помощью произвольных имен. Добавляя оператор as в конце import, вы можете указать имя, под которым должно вызываться импортированное выражение.

    //Это импортирует функцию hide из JEI и сделает ее доступной под именем h
    import mods.jei.JEI.hide as h;
    
    //А это импортирует removeAndHIde функцию из JEI и сделает ее доступной под именем rh
    import mods.jei.JEI.removeAndHide as rh;
    
    h(<minecraft:dirt>);
    rh(<minecraft:diamond>);