# Modyfikacje

Przechowuje informacje o wszystkich zarejestrowanych modyfikacjach. Można uzyskać dostęp za pomocą `loadedMods` globalnego słowa kluczowego

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.mods.Mods
```

## Metody
### getMod

Pobiera określoną modyfikację

 Zwraca: `określony MCModInfo`

Typ zwrotu: [crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
loadedMods.getMod(modid jako String);
loadedMods.getMod("minecraft");
```

| Parametr | Typ         | Opis             |
| -------- | ----------- | ---------------- |
| modid    | Ciąg znaków | Nie podano opisu |


### isModLoaded

Sprawdza, czy mod jest laodowany

 Zwraca: `true jeśli mod jest załadowany`

Typ zwrotu: logiczny

```zenscript
loadedMods.isModLoaded(modid jako String);
loadedMods.isModLoaded("minecraft");
```

| Parametr | Typ         | Opis                 |
| -------- | ----------- | -------------------- |
| modid    | Ciąg znaków | modid do sprawdzenia |



## Właściwości

| Nazwisko | Typ                                                                                 | Posiada Getter | Ma ustawienie |
| -------- | ----------------------------------------------------------------------------------- | -------------- | ------------- |
| mody     | Lista&lt;[crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)&gt; | prawda         | fałszywy      |
| rozmiar  | odcień                                                                              | prawda         | fałszywy      |

