# Zmiana nazwy

Czytanie "skrzyni" jest irytujące, prawda?

Dlatego istnieje możliwość zmiany nazwy rzeczy.

## Zmiana nazwy wyświetlanej

Jest to prawdopodobnie najprostszy sposób na uzyskanie innej nazwy przedmiotu lub bloku. Zmieniłeś nazwę `elementu` na `nową Nazwę`:

```zenscript
item.displayName = newName;

//Example
<minecraft:chest>.displayName = "Storage Deluxe";
```

`element` jest [IItemStack](/Vanilla/Items/IItemStack/).  
`nowaNazwa` jest ciągiem.

## Zmiana lokalizacji

Jeśli niektóre modyfikacje ekwipunku nadal pokazują starą nazwę przedmiotu zamiast nowego, musisz zmienić lokalizację. Możesz przeczytać co to oznacza przy wpisie `gra`.

```zenscript
gra.setLocalization(languageCode, unlocalizedName,newName);

gre.setLocalization("tile.chest.name","StorageBox Deluxe")
```

`languageCode` jest ciągiem znaków i opcjonalnie. Jeśli go opuścisz, to zastosujesz lokalizację niezależnie od wybranego języka klienta.  
`unlocaLizedName` jest ciągiem.  
`nowaNazwa` jest ciągiem.