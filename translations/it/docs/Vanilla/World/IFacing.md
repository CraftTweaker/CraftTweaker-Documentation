# IFacing

L'Interfaccia IFacing ti permette di ottenere le direzioni di [IBlockPos's](/Vanilla/World/IBlockPos/) possibili.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import crafttweaker.world.IFacing;`

## Enumerazioni

Il fronte Interface ha 7 Metodi statici, ciascuno che restituisce la suddetta direzione.  
L'ultimo prende la direzione come input String (es. `"NORTH"`)

```zenscript
crafttweaker.world.Facing.north()
crafttweaker.world.Facing.east()
crafttweaker.world.Facing.south()
crafttweaker.world.Facing.west()
crafttweaker.world.Facing.down()
crafttweaker.world.Facing.up()


crafttweaker.world.Facing.fromString(String name);
```

## ZenGetters/ZenMethods senza parametri

| ZenGetter | ZenMethod  | Tipo Di Reso |
| --------- | ---------- | ------------ |
| nome      | getName()  | stringa      |
| rotateY   | rotateY()  | IFacing      |
| opposto   | opposito() | IFacing      |

## Altri metodi

### Confronto tra due facce

Puoi confrontare due facce usando lo standart che confronta gli Operatori `== ! < > <= >=`  
In alternativa, è possibile utilizzare la funzione, anche se la funzione restituisce un int che è 0 se sono uguali.

```zenscript
//Restituisce true o false
facingOne == facingTwo;

//Restituisce 0 se sono uguali
facingOne.compare(facingTwo);
```