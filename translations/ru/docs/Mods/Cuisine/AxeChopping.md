# Обломки секиры

## Доступность

Перед тем как делать что-нибудь, нужно проверить, включена ли осевая рубка или нет:

```zenscript
import mods.cuisine.AxeChopping;

if (AxeChopping.isEnabled()) {
    // do stuff
} else {
    print("Axe Chopping is disabled, skipping");
}
```

## Сложение

```zenscript
Импортируйте mods.cuisine.AxeChopping;

AxeChopping.add(IItemStack input, IItemStack);

AxeChopping.add(<item:minecraft:dirt>, <item:minecraft:diamond>);

// При необходимости также можно использовать ore dictionary.
AxeChopping.add(IOreEntry input, IItemStack);

AxeChopping.add(<ore:cobblestone>, <item:minecraft:diamond>);
```

## Удаление

```zenscript
import mods.cuisine.AxeChopping;

// Удаляем по вводу.
AxeChopping.remove(IItemStack);

AxeChopping.remove(<item:minecraft:log>);

// Удаляем по выводу.
AxeChopping.removeByOutput(IItemStack);

AxeChopping.removeByOutput(<item:minecraft:plank>);

// Удаляем по идентификатору.
AxeChopping.remove(tring id);

AxeChopping.remove("recipe_name");

// Удаляем все!
AxeChopping.removeAll();
```

## Misc.

```zenscript
импортировать mods.cuisine.AxeChopp;

defaultPlanksOutput в качестве int = AxeChopping.getDefaultPlanksOutput();

defaultStickOutput как int = AxeChopping.getDefaultStickOutput();
```