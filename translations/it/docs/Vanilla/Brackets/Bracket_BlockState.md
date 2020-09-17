# Gestore Parentesi BlockState

Il BlockState Bracket Handler ti dà accesso ai BlockStates nel gioco. È possibile ottenere BlockStates registrati nel gioco, quindi l'aggiunta o la rimozione di mod può causare problemi se si fa riferimento agli stati bloccati della mod in un Gestore parentesi della Fortezza di Blocco.

BlockStates sono referenziati nel BlockState Bracket Handler in questo modo:

```zenscript
<blockstate:modid:blockname>
```

Con il `modid` è la modid della mod che il blocco è definito in, e `il nome del blockname` è il nome del blocco. Questo restituirà il BlockState predefinito per il blocco specificato.

Per ottenere uno specifico stato di blocco con il BlockState Bracket Handler, puoi opzionalmente specificarne le proprietà in questo modo:

```zenscript
<blockstate:modid:blockname:properties>
```

Dove `properties` è un insieme separato da virgole di `name=value` coppie per qualsiasi proprietà che si desidera specificare sul blockstate. Tutte le proprietà che non sono specificate hanno gli stessi valori del blockstate predefinito.

Questo restituirà un oggetto IBlockstate. Per ulteriori informazioni fare riferimento a [la rispettiva voce wiki](/Vanilla/Blocks/IBlockState/)

Nota che questo gestore parentesi creerà un riferimento a uno specifico stato di blocco. Se vuoi essere in grado di abbinare contro più stati di blocco, fai riferimento a [la voce wiki IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher).

## Esempi

Un esempio di BlockState Bracket Handler potrebbe essere:

```zenscript
//block of dirt
<blockstate:minecraft:dirt>

//roak log, vertical
<blockstate:minecraft:log>
<blockstate:minecraft:log:variant=oak,axis=y>

//abete tronco, orizzontale lungo l'asse x
<blockstate:minecraft:log:variant=spruce,axis=x>
```