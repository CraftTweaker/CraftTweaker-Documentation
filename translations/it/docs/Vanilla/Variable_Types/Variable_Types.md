# Tipi Di Variabili

Sicuramente hai già messo un po' in disordine con variabili e valori, devi chiederti, come CraftTweaker sa se ha a che fare con un Integer, un Oggetto o una voce oreDic?

Il modo più semplice di dichiarare una variabile sta usando ```var name = valore;```. Questo crea la variabile e la getta al valore che pensa sia più adatto per la situazione.

## Casting di una variabile a un tipo specifico

Script più complessi potrebbero richiedere di lanciare una variabile come un tipo specifico. Ad esempio, questo fallirebbe:

```zenscript
var test;

test = <minecraft:dirt>;
recipes.remove(test);
```

Allora perché questo fallisce? Questo perché CT lancia variabili a cui non viene dato un valore iniziale per IAny Type. Quel tipo è stato fatto per facilitare alcuni manipolatori di ricette, anche se mai veramente implementato, quindi a volte fa più danno che bene. Originariamente era inteso come un tipo che può assumere la forma di molti altri tipi in modo da non dover cambiare le variabili per tutto il tempo, ma l'interfaccia non è mai stata implementata.

Torna all'argomento: Come possiamo risolvere questo problema? Con il test variabile a ```IItemStack```, che è il tipo utilizzato per gli oggetti. Purtroppo, alcuni tipi devono essere importati prima, e questo è uno di questi.

```zenscript
import crafttweaker.item.IItemStack;
var test as IItemStack;

test = <minecraft:dirt>;
recipes.remove(test);
```

## Elenco dei tipi variabili

Ecco un elenco (incompleto) della maggior parte dei tipi variabili

| Nome (nome in CT)                                    | Spiegazione                                                                                                     | Esempio                                                | Importa                                         |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------- |
| Intero (int)                                         | Gli interi sono numeri interi (ad esempio 1,2,3,...), berretti a 2 147 483 647                                  | `var test = 10 come int;`                              |                                                 |
| [IItemStack](/Vanilla/Items/IItemStack/)             | Singoli oggetti                                                                                                 | `var test = <minecraft:dirt> come IItemStack;`   | import crafttweaker.item.IItemStack;            |
| [IIngrediente](/Vanilla/Variable_Types/IIngredient/) | Elementi singoli o multipli (ad es. `<minecraft:dirt>`, `<ore:ingotIron>`,...)                      | `var test = <minecraft:dirt> come ingrediente;`  | import crafttweaker.item.IIngredient;           |
| [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)     | Oggetti multipli da un OreDict (ad es. `<ore:ingotIron>`, `<ore:ingotGold>`,...)                    | `var test = <ore:ingotIron> come IOreDictEntry;` | importazione crafttweaker.oredict.IOreDictEntry |
| Booleano (bool)                                      | I booleani sono veri o falsi.                                                                                   | `var test = falso come bool;`                          |                                                 |
| Byte (byte)                                          | I valori dei byte sono numeri interi da 0 a 255 ()                                                              | `prova var = 125 in byte;`                             |                                                 |
| Floating Point (float)                               | Decimali                                                                                                        | `var test = 1,25 come float;`                          |                                                 |
| Doppia Precisione (doppia)                           | Come i Floating Points, solo più precisi e con una gamma di numeri più elevata                                  | `var test = 1,25 come doppio;`                         |                                                 |
| Lungo (lungo)                                        | Come Integer, ma con un intervallo di numeri più alto (di solito int è solo bene)                               | `prova var = 30 lunga;`                                |                                                 |
| Null (null)                                          | Null, niente, nada. Non davvero un tipo ma ancora utile                                                         | `var test = null;`                                     |                                                 |
| Breve (breve)                                        | Come intero, ma con un numero più piccolo Range                                                                 | `var test = 16 come breve;`                            |                                                 |
| Stringa (stringa)                                    | Una stringa è un testo. Qui di solito non hai bisogno di "come" come nulla in "s è automaticamente una stringa. | `var test = "Ciao Mondo!" come stringa;`               |                                                 |
| Vuoto (vuoto)                                        | Ancora meno che nullo. Probabilmente avrai bisogno solo del tipo vuoto quando gestisci le funzioni              | `var test come vuoto;`                                 |                                                 |
| [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)       | Come IItemStack, solo per i liquidi                                                                             | `var test = <liquid:water> come ILiquidStack;`   | import crafttweaker.liquid.ILiquidStack;        |