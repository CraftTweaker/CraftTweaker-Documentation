# Alloy

## Пакет
```zenscript
import mods.terrafirmacraft.Сплавка;
импортировать mods.terrafirmacraft.Строитель сплава;
```

## Сложение
- Для манипулирования рецептами сплава представлен конструктор рецептов
```zenscript
Строитель AlloyRecipeBuilder = Alloy.addAlloy(String metal);
builder.addMetal(String input, double max);
builder.build();
```

## Удаление

```zenscript
Alloy.removeAlloy(String metal);
```

## Примеры скриптов
- Пожалуйста, обратитесь к [Metal](/Mods/Terrafirmacraft/Metal) для получения полной информации о TFC Metals.
```zenscript
Alloy.addAlloy("BRONZE").addMetal("COPPER", 0.88, 0.92).addMetal("TIN", 0.08, 0.12).build();
Alloy.addAlloy("BISMUTH_BRONZE").addMetal("COPPER", 0.5, 0.65).addMetal("BISMUTH", 0.1, 0.2).addMetal("zinc", 0.2, 0.3).build();
```