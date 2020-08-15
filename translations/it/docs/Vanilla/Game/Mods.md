# Mods Caricati

È possibile utilizzare la parola chiave globale [](/Vanilla/Global_Functions/) `caricata Mods` per accedere a tutte le mod attualmente caricate.  
Se necessario, puoi importare la classe usando `import crafttweaker.mods.ILoadedMods;`

## Controlla se una mod è caricata

Usa la funzione `in` per controllare se una mod è caricata;  
Puoi anche usare il metodo `contiene`:

```zenscript
//if MinecraftCoderPack è caricato
if(loadedMods in "mcp"){
    print("success!");
}

//if MinecraftCoderPack è caricato
if(loadedMods.contains("mcp"){
    print("success!!!");
}
```

## Recupera una mod specifica

È possibile recuperare una mod specifica come IMod fintanto che hai il suo ID

```zenscript
//recupera la mod minecraftCoderPack
val mod = loadedMods["mcp"];
```

## Itera attraverso la modList

È possibile iterare attraverso l'elenco delle mod caricate in questo modo:

```zenscript
//stampa tutte le definizioni di articolo registed, non consigliate in pacchetti più grandi!
//la variabile mod sarà un tipo IMod
per mod in loadedMods {
    print(mod. ame ~ ":");
    per l'articolo in mod. tems {
        print("\t\t" ~ item. isplayName);
    }
}
```

# IMod

L'interfaccia IMod fornisce alcune informazioni generali su una mod specifica.  
Se necessario, può essere importato usando `import crafttweaker.mods.IMod;`

| Zengetter   | Che cosa fa                                       | Tipo Di Reso                               | Utilizzo          |
| ----------- | ------------------------------------------------- | ------------------------------------------ | ----------------- |
| id          | Restituisce l'id della mod                        | stringa                                    | `mod.id`          |
| nome        | Restituisce il nome interno della mod             | stringa                                    | `mod.name`        |
| versione    | Restituisce la versione della mod                 | stringa                                    | `mod.version`     |
| descrizione | Restituisce la descrizione della mod              | stringa                                    | `mod.description` |
| elementi    | Restituisce tutti gli elementi aggiunti dalla mod | [IItemStack](/Vanilla/Items/IItemStack/)[] | `mod.items`       |