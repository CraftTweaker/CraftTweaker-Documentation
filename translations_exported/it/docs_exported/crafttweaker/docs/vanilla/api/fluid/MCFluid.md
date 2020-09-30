# MCFluid

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.fluid.MCFluid
```

## Interfacce Implementate
MCFluid implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### makeStack

Crea un nuovo [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) con la quantità data di fluido.

 Restituisce: `un nuovo (immutabile) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

Tipo di restituzione: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myMCFluid.makeStack(amount as int);
myMCFluid.makeStack(1000);
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| amount    | int  | Nessuna descrizione fornita |



## Properties

| Name          | Type   | Ha Getter | Ha Setter |
| ------------- | ------ | --------- | --------- |
| commandString | String | true      | false     |

## Operators
### MUL

Crea un nuovo [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) con la quantità data di fluido.

 Restituisce: `un nuovo (immutabile) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

```zenscript
myMCFluid * amount as int
myMCFluid * 1000
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| amount    | int  | Nessuna descrizione fornita |

