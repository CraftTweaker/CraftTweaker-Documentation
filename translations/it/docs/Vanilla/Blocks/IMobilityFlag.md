# Bandiera IMobiltà

L'interfaccia IMobilityFlag ti permette di ottenere una [IBlockState](/Vanilla/Blocks/IBlockState/) possibile mobilityFlags.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import crafttweaker.block.IMobilityFlag;`

## ZenMethods

#### Partite

Puoi controllare se due oggetti IMobilityFlag sono uguali:  
Restituisce un bool.

```zenscript
flagOne.matches(altro);
```

## Enumerazioni

L'interfaccia di MobilityFlag ha 5 Metodi statici, ciascuno restituendo l'oggetto IMobilityFlag dato.

```zenscript
crafttweaker.block.MobilityFlag.normal()
crafttweaker.block.MobilityFlag.destroy()
crafttweaker.block.MobilityFlag.block()
crafttweaker.block.MobilityFlag.ignore()
crafttweaker.block.MobilityFlag.pushOnly()
```