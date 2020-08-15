# IFoodStats

L'interfaccia IPlayer consente di visualizzare determinate informazioni sulle statistiche alimentari di un giocatore.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.player.IFoodStats;`

## ZenGetter/ZenSetters

| ZenGetter          | ZenSetter          | Tipo         |
| ------------------ | ------------------ | ------------ |
| Livello alimentare | Livello alimentare | int          |
| saturazioneLivello | saturazioneLivello | galleggiante |
| necessitàAlimenti  |                    | boolean      |

## ZenMethods

#### Aggiunta Statistiche

Funzione Del Vuoto. Prende un int e un float come parametri di inserimento.

```zenscript
stats.addStats(int foodValue, float saturationLevel);
```

#### onUpdate

Funzione Del Vuoto. Prende un oggetto [IPlayer](/Vanilla/Players/IPlayer/) come parametro di input.

```zenscript
stats.onUpdate(IPlayer player);
```

#### asNBT

Restituisce un oggetto IData che rappresenta gli alimenti.

```zenscript
stats.asNBT();
statistiche come crafttweaker.data.IData;
```

#### Aggiungi Esaurimento

Void Funtion. prende un float come parametro di input.

```zenscript
stats.addExhaustion(esaurimento galleggiante);
```