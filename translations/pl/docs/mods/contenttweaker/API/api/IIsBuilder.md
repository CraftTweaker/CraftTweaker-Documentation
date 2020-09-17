# IIsBuilder

Wyraża wszystko, co jest konstruktorem. Czego oczekiwałeś?

Ta klasa została dodana przez moda z mod-id `contenttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
mods.contenttweaker.api.IIsBuilder
```

## Metody
### kompilacja

Poleca CoT, aby faktycznie zbudował wszystko, co ten konstruktor ma budować.

```zenscript
myIIsBuilder.build(resourceLocation as String);
myIIsBuilder.build("my_awesome_block");
```

| Parametr           | Typ         | Opis                                 |
| ------------------ | ----------- | ------------------------------------ |
| lokalizacja zasobu | Ciąg znaków | Ścieżka zasobu do nadania tego bloku |



