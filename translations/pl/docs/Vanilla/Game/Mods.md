# LoadedMods

Możesz użyć [globalnego słowa kluczowego](/Vanilla/Global_Functions/) `załadowanych modyfikacji` aby uzyskać dostęp do wszystkich aktualnie załadowanych modyfikacji.  
W razie potrzeby możesz zaimportować klasę używając `importu crafttweaker.mods.ILoadedMods;`

## Sprawdź, czy mod jest załadowany

Użyj funkcji `w` aby sprawdzić, czy moda jest załadowana;  
Możesz również użyć metody `zawiera`:

```zenscript
//jeśli MinecraftCoderPack jest załadowany
if(loadedMods w "mcp"){
    print("sukces!");
}

//jeśli MinecraftCoderPack jest załadowany
if(loadedMods.contains("mcp")){
    print("sukces!!!");
}
```

## Pobierz konkretną modyfikację

Możesz pobrać określoną modyfikację jako IMod tak długo, jak masz jej ID

```zenscript
//pobiera mod minecraftCoderPack
val mod = loadedMods["mcp"];
```

## Iteruj przez listę modów

Możesz powtórzyć poprzez listę załadowanych modów tak:

```zenscript
//drukuje wszystkie zarejestrowane definicje elementów, nie zaleca się w większych pakietach!
//zmienna moda będzie typem IMod
dla modyfikacji w loadedMods {
    print(mod. nazwa ~ ":");
    dla elementu w modze. tems {
        print("\t\t" ~ element. isplayName);
    }
}
```

# IMod

Interfejs IMod dostarcza kilku ogólnych informacji na temat konkretnego moda.  
W razie potrzeby można go zaimportować za pomocą `importuj crafttweaker.mods.IMod;`

| Zengetter | Co to robi                                         | Typ zwrotu                                 | Użycie               |
| --------- | -------------------------------------------------- | ------------------------------------------ | -------------------- |
| id        | Zwraca id moda                                     | ciąg znaków                                | `mod.id`             |
| Nazwa     | Zwraca wewnętrzną nazwę moda                       | ciąg znaków                                | `mod.name`           |
| wersja    | Zwraca wersję moda                                 | ciąg znaków                                | `wersja mod.version` |
| opis      | Zwraca opis modyfikacji                            | ciąg znaków                                | `Opis`               |
| elementy  | Zwraca wszystkie elementy dodane przez modyfikację | [IItemStack](/Vanilla/Items/IItemStack/)[] | `mod.items`          |