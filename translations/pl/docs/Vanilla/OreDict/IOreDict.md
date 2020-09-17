# IOreDict

Forge OreDictionary jest jak wielki Lekon w sposób, w jaki zawiera wiele różnych wpisów, a każdy wpis jest opisany przez dopasowanie przedmiotów.  
Kiedy mówimy o słownikach rudy, ludzie odnoszą się głównie do [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) nie do całego słownika rudy.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.oredict.IOreDict;`

## Jak pobrać słownik oreDictionary

Możesz pobrać OreDictionary za pomocą globalnego słowa kluczowego [`oreDict`](/Vanilla/Global_Functions/).

## Metody

Co więc można zrobić z oreDict?

### Uzyskanie [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)

Możesz użyć jednego z trzech poniższych sposobów, aby odnieść się do wpisu OreDictEntry, bez względu na to, czy już istnieje czy nie.  
Jeśli oreDictEntry jeszcze nie istnieje, zostanie utworzony.

```zenscript
oreDict.ingotIron;
oreDict.get("ingotIron");
oreDict["ingotIron"];
```

### Iteruje wszystkie zarejestrowane [IOreDictEnordy](/Vanilla/OreDict/IOreDictEntry/)

```zenscript
//wpisy użytkownika są do pobierania wszystkich zarejestrowanych wpisów oreDictionary!
Walne wpisy = oreDict.entres;

dla oreDictEntry w allEntries{
    print(oreDictEntry. ame);
}

//Alternatywnie, możesz po prostu powtórzyć za pomocą oreDict
do wpisu w oreDict {
    print(entry.name);
}

```

## Jak sprawdzić, czy istnieje wpis słownika rudy

Możesz użyć `w` lub `ma` operatora, aby sprawdzić, czy [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) już istnieje:

```zenscript
if (oreDict w "ingotIron") {
    print("ingotIron istnieje! );
}

jeśli (oreDict ma "ingotIron") {
    print("ingotIron istnieje! );
}


//Alternatywnie użyj funkcji zawierającej:
if(oreDict. otrzymuje "ingotŻelaza") {
    druk ("ingotIron istnieje!"); 
}
```