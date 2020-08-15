# Definicja materiałów ITIC

ITICMaterialDefinition jest definicją [ITICMaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/)  
Możesz użyć tego do pobrania pewnych informacji o obiekcie [ITICMaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/).

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj modtweaker.tconstruct.ITICMaterialDefiniation;`

## Pobieranie takiego obiektu

Możesz pobrać ITICMaterialDefinition z definicji [ITICMaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) `` ZenGetter:

```zenscript
Wal def = <ticmat:stone>.definiation;
```

## ZenGetters

| ZenGetter          | Typ zwrotu  | Opis                          |
| ------------------ | ----------- | ----------------------------- |
| Nazwa              | ciąg znaków | Wewnętrzna nazwa materiału    |
| nazwa wyświetlacza | ciąg znaków | Zlokalizowana nazwa materiału |