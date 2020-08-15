# Питающие вещи :: Производитель жидких соединений

### Импорт

```zenscript
import mods.poweredthingies.Tweaker.fluidCompoundTweaker as fct;
```

### Список ключей, удаление рецептов по ключу, очистка

```zenscript
fct().logKeys()
fct().removeRecipe('liquid:fluid_tf-molten_tesla') // проверьте <logKeys> вывод допустимых ключей
fct().clear()
```

### Добавление рецепта

##### Подпись

```zenscript
addRecipe(output: ILiquidStack, inputA: ILiquidStack, inputB: ILiquidStack)
```

##### Пример

```zenscript
fct().addRecipe(<liquid:tf-sewage> * 150, <liquid:water> * 300, <liquid:lava> * 100);
```

### Примечания

Все эти действия будут кэшироваться и запускаться после завершения регистрации реестра по умолчанию (в том числе от пользовательских json).