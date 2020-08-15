# MCMaterial

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.block.material.MCMaterial
```

## Metody
### blocksMovement

Zwraca, jeśli ten materiał jest uważany za stały lub nie

Zwraca wartość logiczną

```zenscript
myMCMaterial.blocksMovement();
```

### getColor

Pobiera indeks kolorów bloku. To jest ten sam kolor używany przez mapy wanilii do reprezentowania tego bloku.

Zwraca [crafttweaker.api.block.material.MCMaterialColor](/vanilla/api/block/material/MCMaterialColor)

```zenscript
myMCMaterial.getColor();
```

### łatwopalny

Zwraca jeśli blok może się palić lub nie.

Zwraca wartość logiczną

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid

Zwraca, jeśli bloki tych materiałów są cieczami.

Zwraca wartość logiczną

```zenscript
myMCMaterial.isLiquid();
```

### izOpak

Wskazać, czy materiał jest nieprzezroczysty

Zwraca wartość logiczną

```zenscript
myMCMaterial.isOpaque();
```

### możliwe do zastąpienia

Zwraca czy materiał może zostać zastąpiony przez inne bloki po umieszczeniu - np. śnieg, wino i wysoka trawa.

Zwraca wartość logiczną

```zenscript
myMCMaterial.isReplaceable();
```

### isSolid

Zwraca prawda, jeśli blok jest uważany za stały. To jest domyślnie prawda.

Zwraca wartość logiczną

```zenscript
myMCMaterial.isSolid();
```

### isToolNotrequired

Zwraca wartość true jeśli materiał może być zebrany bez narzędzia (lub przy użyciu złego narzędzia)

Zwraca wartość logiczną

```zenscript
myMCMaterial.isToolNotRequired();
```


