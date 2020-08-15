# Lokalizacja CTResourceLocation

Obiekt lokalizacji zasobów jest używany do mówienia minecraftowi, gdzie coś znaleźć. Składa się z domeny i ścieżki.

## Wywołanie/importowanie pakietu

Jeśli nie chcesz wpisywać całej nazwy pakietu za każdym razem, gdy używasz metody statycznej, lub jeśli napotkasz jakiekolwiek problemy z klasą, może być wymagane aby [zaimportować](/AdvancedFunctions/Import/) klasę:  
`importuj mody. Lokalizacja zasobów`

## Metody ZenMethods

### Metody statyczne: Utwórz

Metody statyczne to te, które są nazywane samym pakietem, a nie żadnym konkretnym przedmiotem tej instancji.  
Możesz użyć tej metody do utworzenia nowej instancji CTResourceLocation:

```zenscript
var instance = mods.contenttweaker.ResourceLocation.create("contenttweaker:item/myItem");
```

### ZenGetters

ZenGetters są wywoływane na obiekcie, a nie na samym pakiecie

```zenscript
print(myLocation.domain);
```

| ZenGetter | Typ         |
| --------- | ----------- |
| domena    | ciąg znaków |
| ścieżka   | ciąg znaków |