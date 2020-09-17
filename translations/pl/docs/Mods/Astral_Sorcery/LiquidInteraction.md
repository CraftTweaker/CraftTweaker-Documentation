# Interakcje płynne

Zestaw interakcji płynnych jest stosowany w celu dodania interakcji płynnych (takich jak lawa i płynna skrobia) do chalionów systemu alarmowego.

## Importowanie pakietu

Jeśli chcesz zaimportować pakiet, tutaj:

```zenscript
importuj mods.astralsorcery.Płynna Interakcja;
```

## Usuń interakcję

Ta funkcja usuwa pierwszy przepis, który znajdzie użyty do użycia podanych [płynów](/Vanilla/Liquids/ILiquidStack/) i zwraca dany stos wyjściowy [](/Vanilla/Items/IItemStack/).  
Jeśli opuścisz wyjście, usuniesz pierwszy przepis, który wykorzystuje te dwie płyny niezależnie od ich wyjścia.

```zenscript
//LiquidInteraction.removeInteraction(ILiquidStack liquid1, ILiquidStack liquid2, @Optional IItemStack output);
LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>);
LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>, <minecraft:obsidian>);
```

## Dodanie przepisu

Dodaje płynną interakcję do szalików

[Stos płynny](/Vanilla/Liquids/ILiquidStack/) liczy się jako ilość płynu, która zostanie zużyta w przypadku wystąpienia interakcji.  
szansa1 i szansa2 określają prawdopodobieństwo, że płyny wejściowe1 i wejścia2 zostaną zużyte.  
waga określa, jak prawdopodobne jest wybranie tej opcji w porównaniu z innymi interakcjami w płynie zarejestrowanymi dla danej pary wejść płynów

```zenscript
//Interakcja LiquidInteraction.addInteraction(ILiquidStack liquidIn1, float chanceConsumption1, ILiquidStack liquidIn2, float chanceConsumption2, int weight IItemStack output);
Interakcja płynna(<liquid:lava> * 10, 0.1, <liquid:water> * 90, 0.2, 400, <minecraft:diamond>);
```