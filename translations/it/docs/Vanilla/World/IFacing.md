# IFacing

L'Interfaccia IFacing ti permette di ottenere le direzioni di [IBlockPos's](/Vanilla/World/IBlockPos/) possibili.

## Importing the package

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import crafttweaker.world.IFacing;`

## Enumerations

L'interfaccia di fronte ha 6 metodi statici che restituiscono la suddetta direzione.  
Ha anche un altro che prende la direzione come input String (es. `"NORTH"`)

```zenscript
crafttweaker.world.IFacing.north()
crafttweaker.world.IFacing.east()
crafttweaker.world.IFacing.south()
crafttweaker.world.IFacing.west()
crafttweaker.world.IFacing.down()
crafttweaker.world.IFacing.up()


crafttweaker.world.IFacing.fromString(String name);
```

## ZenGetters/ZenMethods without parameters

| ZenGetter | ZenMethod  | Return Type |
| --------- | ---------- | ----------- |
| name      | getName()  | string      |
| rotateY   | rotateY()  | IFacing     |
| opposto   | opposito() | IFacing     |

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