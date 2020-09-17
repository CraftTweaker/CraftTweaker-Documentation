# ILiquidStack

Un LiquidStack è costituito da una [Definizione Liquido](/Vanilla/Liquids/ILiquidDefinition/) e da un tag opzionale e da un valore facoltativo.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.liquid.ILiquidStack;`

## Creare un ILiquidStack

Un ILiquidStack può essere creato utilizzando il gestore [parentesi liquide](/Vanilla/Brackets/Bracket_Liquid/)

```zenscript
//vedere The liquid bracket Handler for further information
val lava = <liquid:lava>;

//liquid. ithTag(Tag come IData)
val lavaWithTag = <liquid:lava>. ithTag(DATA);

//liquid * amount in millibuckets (-> 1000 = 1 secco)
val lavaWithAmount = <liquid:lava> * 1000;
```

## Ottieni proprietà fluide

Come ILiquidStack rappresenta un liquido, sicuramente ci deve essere anche un modo per recuperare le proprietà del fluido.  
Controlla la tabella per vedere cosa puoi recuperare dall'oggetto ILiquidStack utilizzando ZenGetters.

| Zengetter   | Che cos'è questo?                                                       | Tipo Di Reso                                                | Esempio                                    |
| ----------- | ----------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------ |
| nome        | Questo restituisce il nome del liquido non localizzato                  | stringa                                                     | `test = <liquid:lava>.name;`         |
| displayName | Questo restituisce il nome del liquido localizzato                      | stringa                                                     | `test = <liquid:lava>.displayName;`  |
| importo     | Questo restituisce la quantità di ILiquidObject                         | int                                                         | `test = <liquid:lava>.amount;`       |
| luminosità  | Questo restituisce la luminosità del liquido di riferimento             | int                                                         | `test = <liquid:lava>.luminosità;`   |
| densità     | Questo restituisce la densità del liquido di riferimento                | int                                                         | `prova = <liquid:lava>.densità;`     |
| temperatura | Questo restituisce la temperatura del liquido di riferimento            | int                                                         | `prova = <liquid:lava>.temperature;` |
| viscosità   | Questo restituisce la viscosità del liquido di riferimento              | int                                                         | `test = <liquid:lava>.viscosità;`    |
| gassoso     | Questo restituisce se il liquido di riferimento è gassoso               | boolean                                                     | `prova = <liquid:lava>.gaseous;`     |
| tag         | Questo restituisce il tag di ILiquidObject's                            | [IData](/Vanilla/Data/IData/)                               | `test = <liquid:lava>.tag;`          |
| definizione | Questo restituisce la definizione del liquido di cui sopra (vedi sotto) | [Definizione ILiquide](/Vanilla/Liquids/ILiquidDefinition/) | `test = <liquid:lava>.definition;`   |

# Implementazione IIngrediente

Java Jargon: ILiquidStack implementa IIngredient. In altre parole, tutti i metodi che possono essere utilizzati in [IIngredienti](/Vanilla/Variable_Types/IIngredient/) possono essere utilizzati anche per ILiquidStacks Fare riferimento alla voce IIngredient per ulteriori informazioni su questo. Ecco alcuni casi speciali, poiché i liquidi non sono articoli

* Non puoi contrassegnare ILiquidStack e non puoi cercare di recuperare il segno di ILiquidStack
* .items restituisce una lista vuota
* .itemArray restituisce un Array vuoto
* .liquids restituisce questo liquido come ILiquidStack (così, esattamente questo oggetto)
* LiquidStacks non può avere Transformers e chiedere trasformatori restituisce sempre false
* LiquidStacks non può avere condizioni (.only non funziona)
* Corrispondenza con gli elementi restituisce sempre falso