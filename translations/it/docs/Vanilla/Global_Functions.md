# Funzioni Globali

Le funzioni globali sono funzioni che possono essere chiamate senza essere [importate](/AdvancedFunctions/Import/).  
Ecco l'elenco:

## stampa

Stampa la stringa al registro crafttweaker come informazioni.

```zenscript
//print(String message);
print("Hello World!");
```

Restituisce nulla

## totalActions

```zenscript
//totalActions();
totalActions();
```

Restituisce un int che mostra quante funzioni globali sono registrate.

## enableDebug

Abilita la modalità Debug.  
L'uso del [Preprocessore di Debug](/AdvancedFunctions/Preprocessors/DebugPreprocessor/) è preferito però.

```zenscript
//enableDebug();
enableDebug();
```

Restituisce nulla

## isNull

Controlla se un dato oggetto è nullo.  
Non funziona su primitive!

```zenscript
//isNull(Object o);
isNull(<minecraft:dirt>);
```

Restituisce un booleano Nota: Se questo non funziona per te, prova a lanciare l'oggetto per boool `<minecraft:dirt> come booleano`

## max

```zenscript
//max(int number1, int number2);
max(10, 11);
```

Restituisce un int

## min

```zenscript
//min(int number1, int number2);
min(10, 11);
```

Restituisce un int

## pow

```zenscript
//pow(doppio numero1, doppio numero2);
pow(2.0, 4.0);
```

Restituisce un doppio

## Campi Globali

| Campo        | Descrizione                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| birra        | Accede al [gestore di birra](/Vanilla/Recipes/Recipes_Brewing_Stand/)                                                    |
| client       | Accesso [Metodi client](/Vanilla/Game/IClient/)                                                                          |
| eventi       | Accede al [gestore eventi](/Vanilla/Events/IEventManager/)                                                               |
| formato      | Accede al [gestore di formattazione](/Vanilla/Utils/IFormatter/)                                                         |
| fornace      | Accede al [Fornace Handler](/Vanilla/Recipes/Furnace/Recipes_Furnace/)                                                   |
| gioco        | Accesso [Funzioni di gioco](/Vanilla/Game/IGame/)                                                                        |
| itemUtils    | Accedi al gestore [ItemUtils](/Vanilla/Utils/IItemUtils/)                                                                |
| mod caricati | Accede alla lista [delle mod caricate](/Vanilla/Game/Mods/)                                                              |
| logger       | Accede al [logger](/Vanilla/Utils/Logger/)                                                                               |
| oreDict      | Accede al gestore [oreDictionary](/Vanilla/OreDict/IOreDict/)                                                            |
| ricette      | Accede al [Gestore Ricette](/Vanilla/Recipes/Crafting/Recipes_Crafting_Table/)                                           |
| server       | Accesso [metodi del server](/Vanilla/Game/IServer/)                                                                      |
| vanilla      | Accede alle funzioni di vaniglia (attualmente sono disponibili solo [vanilla.seed](/Vanilla/Recipes/Seeds/) disponibili) |