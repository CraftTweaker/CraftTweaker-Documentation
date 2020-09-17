# Скриптор

### Импорт

```zenscript
import mods.appliedenergistics2.Inscriber;
```

### Добавление

Когда `впишите` логическое значение истинно, входы сверху и внизу не потребляются.

```zenscript
Инскрипт. ddRecipe(IItemStack output, IItemStack input, boolean inscribe, @Optional IItemStack topInput, @Optional IItemStack bottomInput);

//превращает яйца в яйца возрожденного Скеле Иссушителя, не потребляет череп иссушителя
Инстребитель. ddRecipe(<minecraft:spawn_egg:5>, <minecraft:egg>, true, <minecraft:skull:1>);

//Совмещает хлеб, кокосовые бобы и сахар. все входы потребляются
Inscriber.addRecipe(<minecraft:cookie>, <minecraft:minecraft:bread>, false, <minecraft:dye:3>, <minecraft:sugar>);
```

### Удаление

```zenscript
Inscriber.removeRecipe(IItemStack);

//удаляет напечатанный силиконовый рецепт 
Inscriber.removeRecipe(<appliedenergistics2:material:20>); 
```