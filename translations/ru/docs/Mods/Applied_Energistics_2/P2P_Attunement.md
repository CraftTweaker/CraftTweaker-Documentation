# Сооружение P2P

### Импорт

```zenscript
import mods.appliedenergistics2.Attune;
```

### Прикрепляющий предмет

Присоедините IItemStack или ModID к определенному типу P2P-туннеля. ID мода используется как резервная копия, когда не было найдено IItemStack.

### МЭ P2P

```zenscript
Attunement.attuneME(IItemStack IItemStack);
Attunement.attuneME(String modID);

Attunement.attuneME(<appliedenergistics2:controller>);
Attunement.attuneME("Актуальные добавления");
```

### Элемент P2P

```zenscript
Атака.attuneItem(IItemStack);
Атака.attuneItem(String modID);
```

### Жидкость P2P

```zenscript
Атака.attuneFluid(IItemStack);
Атака.attuneFluid(String modID);
```

### Редстоун P2P

```zenscript
Атака.attuneRedstone(IItemStack);
Атака.attuneRedstone(String modID);
```

### RF P2P

```zenscript
Атака.attuneRF(IItemStack);
Атака.attuneRF(код модуля);
```

### EU P2P

```zenscript
Attunement.attuneIC2(IItemStack IItemStack);
Attunement.attuneIC2(String modID);
```

### Свет P2P

```zenscript
Attunement.attuneLight(IItemStack IItemStack);
Attunement.attuneLight(String modID);
```