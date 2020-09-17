# IFluidStack

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.fluid.IFluidStack
```

## Interfacce Implementate
IFluidStack implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metodi
### copia

Copia la pila. Necessario solo quando sono coinvolti pile mutevoli.

 Restituisce: `Una nuova pila, che contiene le stesse informazioni di questa`

Tipo di restituzione: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.copy();
```

### mutabile

Rende questo stack mutabile

 Restituisce: `Una nuova pila, che è mutevole.`

Tipo di restituzione: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.mutable();
```

### setAmount

Imposta la quantità di fluido in MilliBuckets (MB)

 Restituisce: `Una nuova pila, o questa pila, a seconda che questa pila sia mutabile`

Tipo di restituzione: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.setAmount(amount as int);
myIFluidStack.setAmount(1000);
```

| Parametro | Tipo | Descrizione                            |
| --------- | ---- | -------------------------------------- |
| importo   | int  | L'importo per moltiplicare questa pila |



## Proprietà

| Nome          | Tipo                                                         | Ha Getter | Ha Setter |
| ------------- | ------------------------------------------------------------ | --------- | --------- |
| commandString | Stringa                                                      | vero      | falso     |
| fluido        | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid) | vero      | falso     |

## Operatori
### MUL

Imposta la quantità di fluido in MilliBuckets (MB)

 Restituisce: `Una nuova pila, o questa pila, a seconda che questa pila sia mutabile`

```zenscript
myIFluidStack * amount as int
myIFluidStack * 1000
```

| Parametro | Tipo | Descrizione                            |
| --------- | ---- | -------------------------------------- |
| importo   | int  | L'importo per moltiplicare questa pila |

