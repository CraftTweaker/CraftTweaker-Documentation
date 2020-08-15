### Klasa

```zenscript
importuj mods.roots.Transmutation;
```

#### Metody

```zenscript
Unieważnij usunięcieRecype(
  nazwa ciągu // nazwa przepisu jest usuwana
);
```

* * *

```zenscript
Unieważnij addBlockToBlockRecipe(
  nazwę ciągu, // nazwa dodanego przepisu (musi być unikatowa)
  Stan IBlockState1, // początkowy stan bloku zdefiniowany jako stan blokujący
  Stan IBlockStatus2 // stan początkowy powinien zostać przekonwertowany na
);
```

* * *

```zenscript
Unieważnij addBlockToItemRecipe(
  nazwę ciągu, // nazwa dodanego przepisu (musi być unikatowa)
  Stan IBlockState // stan początkowy, który jest szukany podczas konwersji (jako stan bloku)
  IItemStack stack // stack elementu, który zastępuje stan bloku
);
```

* * *

### Przykłady

```zenscript
importuj mods.roots.Transmutation;

// Usuwa domyślną formułę dyni-overwater-to-melon
Transmutation.removeRecipe("pumpkin_melon");

// Dodaje przepis, który konwertuje kamień końcowy na bloki kości
Transmutacja. ddBlockToBlockRecipe("end_stone_to_bone", <blockstate:minecraft:end_stone>, <blockstate:minecraft:bone_block:axis=y>);

// Dodaje przepis, który przekształca domyślną trawę na śnieżki
Transmutacja. ddBlockToItemRecipe("tallgrass_to_snowball", <blockstate:minecraft:tallgrass:type=tall_grass>, <minecraft:snowball>*3);
```

### Uwagi

**Uwaga: Kompleksowe funkcje stanu nie są obecnie możliwe przez CraftTweaker (tj. sprawdzanie otoczenia).**

Można znaleźć informacje o bloku oraz jego wariantach i stanach poprzez użycie funkcji debugowania F3 i ukierunkowanie na nią. Po prawej stronie ekranu wyświetli nazwę rejestru bloku, a następnie wszystkie stany poniżej.

Na przykład `kości_block` ma następujące cechy:

    oś: y

Można to przekształcić w stan bloku, zastępując `:` na `=` na tak: `axis=y`, oznacza, że ostateczny stan blokady (dla stojącego w górę bloku kości) będzie `<blockstate:minecraft:bone_block:axis=y>`.