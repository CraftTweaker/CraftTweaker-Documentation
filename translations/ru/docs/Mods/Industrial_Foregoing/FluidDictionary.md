# Жидкий словарь

### Импорт

```zenscript
import mods.industrialforegoing.FluidDictionary;
```

### Добавление

Ему нужно ввести имя жидкости, имя жидкости в качестве вывода и коэффициент конверсии. Скорость — сколько мб от начала будет преобразовано в выходной результат. (Расход InputMB * = Вывод MB)

```zenscript
FluidDictionary.add(String input, String output, double rate);

FluidDictionary.add("essence", "xpjuice", 1);
```

### Удаление

Ему требуется имя жидкости в качестве входного элемента, имя жидкости в качестве выхода.

```zenscript
FluidDictionary.remove(String input, String output);

FluidDictionary.remove("essence", "xpjuice");
```