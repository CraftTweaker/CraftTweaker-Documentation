# Питание :: Жидкая горелка :: Крутость

### Импорт

```zenscript
import mods.poweredthingies.Tweaker.fluidBurnerCoolantTweaker as coolant;
```

### Список ключей, удаление рецептов по ключу, очистка

```zenscript
coolant().logKeys()
coolant().removeRecipe('teslathingies:fluid_tf-molten_tesla') // проверьте <logKeys> вывод для допустимых ключей
coolant().clear()
```

### Добавление рецепта

##### Подпись

```zenscript
addCoolant(fluid: ILiquidStack, мультипликатор времени: Float)
```

`timeMultiplier` — это значение, которое будет использоваться для увеличения (или уменьшения) количества тиков, на которое будет сжигаться топливо.

##### Пример

```zenscript
coolant().addCoolant(<liquid:tf-sewage> * 50, 1.1);
```

### Примечания

Все эти действия будут кэшироваться и запускаться после завершения регистрации реестра по умолчанию (в том числе от пользовательских json).