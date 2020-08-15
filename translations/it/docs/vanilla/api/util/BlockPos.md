# BlockPos

Rappresenta una posizione di un blocco nel mondo

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.util.BlockPos
```

## Costruttori
```zenscript
new crafttweaker.api.util.BlockPos(x as int, y as int, z as int);
```
| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| x         | int  | Nessuna descrizione fornita |
| y         | int  | Nessuna descrizione fornita |
| z         | int  | Nessuna descrizione fornita |



## Metodi
### aggiungi

Aggiunge due posizioni insieme e restituisce il risultato.

Restituisce [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).add(new BlockPos(3, 2, 1));
```

| Parametro | Tipo                                                         | Descrizione                   |
| --------- | ------------------------------------------------------------ | ----------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | altra posizione da aggiungere |



Aggiunge i valori dati a questa posizione e restituisce una nuova posizione con i nuovi valori.

Restituisce [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(x as double, y as double, z as double);
new BlockPos(0, 1, 2).add(50.21, -20.8, -25.2);
```

| Parametro | Tipo   | Descrizione            |
| --------- | ------ | ---------------------- |
| x         | doppia | x valore da aggiungere |
| y         | doppia | valore y da aggiungere |
| z         | doppia | valore z da aggiungere |


### crossProduct

Crea un nuovo BlockPos in base al prodotto trasversale di questa posizione e alla posizione data

Restituisce [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).crossProduct(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).crossProduct(new BlockPos(5, 8, 2););
```

| Parametro | Tipo                                                         | Descrizione                         |
| --------- | ------------------------------------------------------------ | ----------------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos per incrociare il prodotto |


### distanzaSq

Ottiene la distanza quadrata di questa posizione al BlockPos, usando il centro del BlockPos

Restituzioni doppie

```zenscript
new BlockPos(0, 1, 2).distanceSq(to as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10););
```

| Parametro | Tipo                                                         | Descrizione             |
| --------- | ------------------------------------------------------------ | ----------------------- |
| a         | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos da controllare |



Ottiene la distanza quadrata di questa posizione al BlockPos specificato

Restituzioni doppie

```zenscript
new BlockPos(0, 1, 2).distanceSq(to as crafttweaker.api.util.BlockPos, useCenter as boolean);
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10);, true);
```

| Parametro | Tipo                                                         | Descrizione                                                                   |
| --------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| a         | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos da controllare                                                       |
| useCenter | boolean                                                      | si dovrebbe usare il centro della coordinata? (aggiunge 0,5 a ciascun valore) |



Ottiene la distanza quadrata di questa posizione alle coordinate specificate

Restituzioni doppie

```zenscript
new BlockPos(0, 1, 2).distanceSq(x as double, y as double, z as double, useCenter as boolean);
new BlockPos(0, 1, 2).distanceSq(500.25, 250.75, 100.20, false);
```

| Parametro | Tipo    | Descrizione                                                                   |
| --------- | ------- | ----------------------------------------------------------------------------- |
| x         | doppia  | x posizione da controllare                                                    |
| y         | doppia  | y position to check against                                                   |
| z         | doppia  | posizione z da controllare                                                    |
| useCenter | boolean | si dovrebbe usare il centro della coordinata? (aggiunge 0,5 a ciascun valore) |


### giù

Crea un nuovo BlockPos basato su questo BlockPos che è un blocco inferiore a questo BlockPos

 Restituisce: `un nuovo BlockPos che è un blocco inferiore a questo BlockPos`

Restituisce net.minecraft.util.math.BlockPos

```zenscript
nuovo BlockPos(0, 1, 2).down();
```

### est

Crea un nuovo BlockPos basato su questo BlockPos che è un blocco ad est di questo BlockPos

 Restituisce: `un nuovo BlockPos che è un blocco ad est di questo BlockPos`

Restituisce net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).east();
```


Crea un nuovo BlockPos basato su questo BlockPos che è n BlockPos ad est di questo BlockPos

 Restituisce: `un nuovo BlockPos che è n blocco(i) ad est di questo BlockPos`

Restituisce net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).east(n as int);
new BlockPos(0, 1, 2).east(2);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| n         | int  | Nessuna descrizione fornita |


### manhattanDistanza

Ottiene la distanza di Manhattan di questo pos rispetto a una posizione diversa

Restituisce un intero

```zenscript
new BlockPos(0, 1, 2).manhattanDistance(other as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).manhattanDistance(new BlockPos(4, 5, 6));
```

| Parametro | Tipo                                                         | Descrizione                                 |
| --------- | ------------------------------------------------------------ | ------------------------------------------- |
| altri     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | altra posizione per ottenere la distanza da |


### nord

Crea un nuovo BlockPos basato su questo BlockPos che è un blocco a nord di questo BlockPos

 Restituisce: `un nuovo BlockPos che è un blocco a nord di questo BlockPos`

Restituisce net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).north();
```


Crea un nuovo BlockPos basato su questo BlockPos che è n BlockPos a nord di questo BlockPos

 Restituisce: `un nuovo BlockPos che è n blocco(i) a nord di questo BlockPos`

Restituisce net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).north(n as int);
new BlockPos(0, 1, 2).north(10);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| n         | int  | Nessuna descrizione fornita |


### offset

Crea un nuovo BlockPos basato su questo BlockPos che è un blocco di offset di questo BlockPos basato sul dato [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

 Restituisce: `un nuovo BlockPos che è 1 blocco di offset di questo BlockPos`

Restituisce [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).offset(direction as crafttweaker.api.util.Direction);
new BlockPos(0, 1, 2).offset(<direction:east>);
```

| Parametro | Tipo                                                           | Descrizione                 |
| --------- | -------------------------------------------------------------- | --------------------------- |
| direzione | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | Nessuna descrizione fornita |



Crea un nuovo BlockPos basato su questo BlockPos che è n block(s) offset di questo BlockPos in base al dato [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

 Restituisce: `un nuovo BlockPos che è n block(s) offset di questo BlockPos`

Restituisce [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).offset(direction as crafttweaker.api.util.Direction, n as int);
new BlockPos(0, 1, 2).offset(<direction:south>, 3);
```

| Parametro | Tipo                                                           | Descrizione                 |
| --------- | -------------------------------------------------------------- | --------------------------- |
| direzione | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | Nessuna descrizione fornita |
| n         | int                                                            | Nessuna descrizione fornita |


### sud

Crea un nuovo BlockPos basato su questo BlockPos che è un blocco a sud di questo BlockPos

 Restituisce: `un nuovo BlockPos che è un blocco a sud di questo BlockPos`

Restituisce net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).south();
```


Crea un nuovo BlockPos basato su questo BlockPos che è n blocchi a sud di questo BlockPos

 Restituisce: `un nuovo BlockPos che è n blocchi a sud di questo BlockPos`

Restituisce net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).south(n as int);
new BlockPos(0, 1, 2).south(12);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| n         | int  | Nessuna descrizione fornita |


### sottrai

Sottrae due posizioni insieme e restituisce il risultato.

Restituisce [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).sottra(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).sottract(new BlockPos(2, 1, 3));
```

| Parametro | Tipo                                                         | Descrizione                  |
| --------- | ------------------------------------------------------------ | ---------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | altra posizione da rimuovere |


### su

Crea un nuovo BlockPos basato su questo BlockPos che è un blocco più alto di questo BlockPos

 Restituisce: `un nuovo BlockPos che è un blocco superiore a questo BlockPos`

Restituisce net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).up();
```


Crea un nuovo BlockPos basato su questo BlockPos che è n BlockPos superiore a questo BlockPos

 Restituisce: `un nuovo BlockPos che è n blocchi più alti di questo BlockPos`

Restituisce net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).up(n as int);
new BlockPos(0, 1, 2).up(45);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| n         | int  | Nessuna descrizione fornita |


### ovest

Crea un nuovo BlockPos basato su questo BlockPos che è un blocco ad ovest di questo BlockPos

 Restituisce: `un nuovo BlockPos che è un blocco ad ovest di questo BlockPos`

Restituisce net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).west();
```


Crea un nuovo BlockPos basato su questo BlockPos che è n BlockPos ad ovest di questo BlockPos

 Restituisce: `un nuovo BlockPos che è n blocco(i) ad ovest di questo BlockPos`

Restituisce net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).west(n as int);
new BlockPos(0, 1, 2).west(120);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| n         | int  | Nessuna descrizione fornita |


### withinDistanza

Controlla se il BlockPos dato è entro la distanza specificata di questo BlockPos (questo usa il centro del BlockPos)

Restituisce un booleano

```zenscript
new BlockPos(0, 1, 2).withinDistance(pos as crafttweaker.api.util.BlockPos, distance as double);
new BlockPos(0, 1, 2).withinDistance(new BlockPos(80, 75, 54);, 10);
```

| Parametro | Tipo                                                         | Descrizione                                     |
| --------- | ------------------------------------------------------------ | ----------------------------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos per controllare se è entro la distanza |
| distanza  | doppia                                                       | distanza da controllare all'interno             |



## Proprietà

| Nome | Tipo | Ha Getter | Ha Setter |
| ---- | ---- | --------- | --------- |
| x    | int  | vero      | falso     |
| y    | int  | vero      | falso     |
| z    | int  | vero      | falso     |

## Operatori
### AGGIUNGI

Aggiunge due posizioni insieme e restituisce il risultato.

```zenscript
new BlockPos(0, 1, 2) + pos as crafttweaker.api.util.BlockPos
new BlockPos(0, 1, 2) + new BlockPos(3, 2, 1)
```

| Parametro | Tipo                                                         | Descrizione                   |
| --------- | ------------------------------------------------------------ | ----------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | altra posizione da aggiungere |
### SUB

Sottrae due posizioni insieme e restituisce il risultato.

```zenscript
new BlockPos(0, 1, 2) - pos as crafttweaker.api.util.BlockPos
new BlockPos(0, 1, 2) - new BlockPos(2, 1, 3)
```

| Parametro | Tipo                                                         | Descrizione                  |
| --------- | ------------------------------------------------------------ | ---------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | altra posizione da rimuovere |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| lungo          | falso     |

