# MCMaterial

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.block.material.MCMaterial
```

## Zaimplementowane interfejsy
MCMaterial implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metody
### blocksMovement

Zwraca, jeśli ten materiał jest uważany za stały lub nie

Typ zwrotu: logiczny

```zenscript
myMCMaterial.blocksMovement();
```

### getColor

Pobiera indeks kolorów bloku. To jest ten sam kolor używany przez mapy wanilii do reprezentowania tego bloku.

Typ zwrotu: MCMaterialColor

```zenscript
myMCMaterial.getColor();
```

### łatwopalny

Zwraca jeśli blok może się palić lub nie.

Typ zwrotu: logiczny

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid

Zwraca, jeśli bloki tych materiałów są cieczami.

Typ zwrotu: logiczny

```zenscript
myMCMaterial.isLiquid();
```

### izOpak

Wskazać, czy materiał jest nieprzezroczysty

Typ zwrotu: logiczny

```zenscript
myMCMaterial.isOpaque();
```

### możliwe do zastąpienia

Zwraca czy materiał może zostać zastąpiony przez inne bloki po umieszczeniu - np. śnieg, wino i wysoka trawa.

Typ zwrotu: logiczny

```zenscript
myMCMaterial.isReplaceable();
```

### isSolid

Zwraca prawda, jeśli blok jest uważany za stały. To jest domyślnie prawda.

Typ zwrotu: logiczny

```zenscript
myMCMaterial.isSolid();
```


## Właściwości

| Nazwisko  | Typ         | Posiada Getter | Ma ustawienie |
| --------- | ----------- | -------------- | ------------- |
| polecenie | Ciąg znaków | prawda         | fałszywy      |

