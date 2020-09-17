# MixRecipeBuilder

Un `MixRecipeBuilder` viene utilizzato per costruire e aggiungere la ricetta Mix di Alta Forno al gioco.

## Importazione del pacchetto

Meglio essere sicuri che spiacenti e importare il pacchetto

```zenscript
import mods.tcomplement.highoven.MixRecipeBuilder;
```

## Ottenere un `MixRecipeBuilder`

Il gestore `mods.tcomplement.highoven.HighOven` può darti un `MixRecipeBuilder`

```zenscript
// HighOven.newMixRecipe(ILiquidStack output, ILiquidStack input, int temp);
var builder = HighOven.newMixRecipe(<liquid:steel> * 72, <liquid:iron> * 144, 1350);
```

+ `output` è il fluido e la quantità da produrre
+ `input` è il fluido e la quantità da consumare
+ `temp` è la temperatura minima del forno alto per la ricetta da lavorare, a Kelvin

## Attributi

| Attributo   | ZenGetter     | ZenSetter            | Tipo                        | Informazioni                                                               |
| ----------- | ------------- | -------------------- | --------------------------- | -------------------------------------------------------------------------- |
| output      | `output`      | :heavy_check_mark: | `ILiquidStack`              | l’uscita prodotta dalla MixRecipe                                          |
| input       | `input`       | :heavy_check_mark: | `ILiquidStack`              | l'input della ricetta MixRecipe                                            |
| temperatura | `temperatura` | :heavy_check_mark: | `int`                       | la temperatura minima, in Kelvin                                           |
| ossidanti   | `ossidanti`   | :x:                  | `Elenco<IIngredient>` | gli ossidanti validi per la ricetta al momento dell'accesso all'attributo  |
| riduttori   | `riduttori`   | :x:                  | `Elenco<IIngredient>` | i riduttori validi per la ricetta al momento dell'accesso all'attributo    |
| depuratori  | `depuratori`  | :x:                  | `Elenco<IIngredient>` | i purificatori validi per la ricetta al momento dell'accesso all'attributo |


## Metodi

| Metodo                                                      | Tipo di ritorno    | Informazioni                                                                                           |
| ----------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------ |
| `getOxidizerChance(IIngredient oxidizer)`                   | `int`              | La probabilità in percentuale che l'ossidatore venga consumato, o `-1` se l'ossidante non è valido     |
| `getReducerChance(Riduttore di IIngrediente)`               | `int`              | La probabilità in percentuale che il riduttore venga consumato, o `-1` se il riduttore non è valido    |
| `getOxidizerChance(IIngredient purifier)`                   | `int`              | La probabilità in percentuale che il purificatore venga consumato, o `-1` se l'ossidatore non è valido |
| `addOxidizer(IIngredient oxidizer, int consumeChance)`      | `MixRecipeBuilder` | Aggiungi l'ossidatore con la possibilità di consumare (in percentuale)                                 |
| `addReducer(Riduttore dell'ingrediente, int consumeChance)` | `MixRecipeBuilder` | Aggiungi il riduttore con la possibilità di consumare (in percentuale)                                 |
| `addPurifier(IIngrediente purificatore, int consumeChance)` | `MixRecipeBuilder` | Aggiungi il purificatore con la possibilità di consumare (in percentuale)                              |
| `removeOxidizer(IIngredient oxidizer)`                      | `MixRecipeBuilder` | Rimuovere l'ossidante se era stato aggiunto                                                            |
| `removeReducer(Riduttore di IIngrediente)`                  | `MixRecipeBuilder` | Rimuovere il riduttore se è stato aggiunto                                                             |
| `removePurifier(IIngredient purifier)`                      | `MixRecipeBuilder` | Rimuovere il purificatore se era stato aggiunto                                                        |
| `removeAllOxidizer()`                                       | `MixRecipeBuilder` | Rimuovi tutti gli ossidanti                                                                            |
| `removeAllReducer()`                                        | `MixRecipeBuilder` | Rimuovi tutti i riduttori                                                                              |
| `removeAllPurifier()`                                       | `MixRecipeBuilder` | Rimuovi tutti i purificatori                                                                           |
| `register()`                                                |                    | Aggiungi una nuova Ricetta MixRecipe con i dati attualmente aggiunti nel MixRecipeBuilder              |


Tutti i metodi che restituiscono un `MixRecipeBuilder` restituiscono la stessa istanza che sono stati chiamati, permettendo la catena di metodo.

## Come usare Una volta che hai un `MixRecipeBuilder`, aggiungi gli ossidanti, riduttori e purificatori per la tua nuova ricetta al costruttore, poi `register()` una ricetta. Un `MixRecipeBuilder` può essere usato per registrare tutte le ricette che vuoi: ogni volta che chiami `register()`, aggiunge una nuova ricetta con le informazioni che ha al momento di chiamare la funzione. Questo rende facile aggiungere variante ricette o livello di ricette aggiungendo in modo incrementale nuovi additivi e/o aumentando la resa ecc.

Gli additivi supportano tutti i tipi di `IIngrediente`: `IOreDictEntry`, `IItemStack` e le loro trasformazioni, contenitori liquidi ecc.

## Attenzione Non dimenticare di **registrare** la tua ricetta, il `MixRecipeBuilder` è solo un costruttore per specificare tutte le parti della ricetta!