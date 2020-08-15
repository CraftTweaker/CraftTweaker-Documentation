# Mekanism

Mekanism CraftTweaker supporto è stato integrato direttamente nel Mekanism ora ([link](https://github.com/aidancbrady/Mekanism/tree/master/src/main/java/mekanism/common/integration/crafttweaker))

Mekanism aggiunge supporto staffa-handler per definire **gas** -- uno stato materiale speciale diverso da forgiare [**liquidi**](/Vanilla/Liquids/ILiquidStack/)

```zenscript
<gas:oxygen>
<gas:water> *
```

*Notando che `<gas:water>` è diverso da `<liquid:water>`*

A partire dal Mekanism 9.7.0 è ora possibile visualizzare tutti i gas registrati (compresi quelli provenienti da altre mod) tramite il comando `/ct gas`

E 'anche possibile a partire da Mekanism 9.7.1 per ottenere un gestore di stack / staffa di gas da stringa. Usa `mods.mekanism.MekanismHelper.getGas(string);`

## Esempio

```zenscript
import mod.mekanism.gas.IGasStack;

var oxygen = <gas:oxygen>.withAmount(500) as IGasStack;
var oxygen2 = <gas:oxygen> * 500;
```

## ZenGetters

Come LiquidStacks, IGasStacks supporta anche alcuni ZenGetters.  
Si chiama ZenGetters utilizzando `gas.Getter` (E.g. `<gas:water>.name`)

| ZenGetter   | Descrizione                                    | Tipo Di Reso    |
| ----------- | ---------------------------------------------- | --------------- |
| definizione | Restituisce la definizione di gas              | IGasDefinizione |
| NOME        | Restituisce il nome del gas                    | stringa         |
| displayName | Restituisce il gas' displayName                | stringa         |
| importo     | Restituisce la quantità di gas in millibuckets | int             |

## Impostazione dell'importo dell'oggetto

È possibile impostare la quantità dell'oggetto (volume di gas in Millibucket) in due modi, che entrambi fanno esattamente lo stesso:

```zenscript
var gas_amount_multiply = <gas:water> * 500;
var gas_amount_zenMethod = <gas:water>.withAmount(500);
```

## IGasDefinizione

Un oggetto IGasDefinition contiene informazioni su un gas.  
È possibile ottenere un tale oggetto utilizzando `gasStack.definition` (controllare la tabella sopra)

| ZenGetter   | Descrizione                              | Tipo Di Reso |
| ----------- | ---------------------------------------- | ------------ |
| NOME        | Restituisce il nome del gas indicato     | stringa      |
| displayName | Restituisce il nome visualizzato del gas | stringa      |

È possibile moltiplicare una definizione di gas per restituire un nuovo IGasStack con la quantità data in millibucket:

```zenscript
var gas_definition = <gas:water>.definition;
var gas_bucket = gas_definition * 1000;
```