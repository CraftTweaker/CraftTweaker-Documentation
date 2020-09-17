# Запитанные вещи :: Питание в Килне

### Импорт

```zenscript
import mods.poweredthingies.Tweaker.poweredKilnTweaker as pkt;
```

### Список ключей, удаление рецептов по ключу, очистка

```zenscript
pkt().logKeys()
pkt().removeRecipe('minecraft:planks') // проверьте <logKeys> вывод допустимых ключей
pkt().clear()
```

### Добавление рецепта

##### Подпись

```zenscript
addRecipe(input: IItemStack, output: IItemStack)
```

##### Пример

```zenscript
pkt().addRecipe(<minecraft:bucket>, <minecraft:iron_ingot>);
```

### Примечания

Все эти действия будут кэшироваться и запускаться после завершения регистрации реестра по умолчанию (в том числе от пользовательских json).