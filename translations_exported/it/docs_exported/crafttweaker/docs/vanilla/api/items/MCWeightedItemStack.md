# MCWeightedItemStack

Un ItemStack con una possibilità, di solito usato per gli output delle ricette. <p> Attenzione, se lo stack che è stato utilizzato per creare il WeightedStack era mutabile, allora il setter di dimensioni muterà anche lo stack originale!

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCWeightedItemStack;
```


## Interfacce Implementate
MCWeightedItemStack implementa le seguenti interfacce. That means all methods defined in these interfaces are also available in MCWeightedItemStack

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
## Constructors

Crea manualmente il weightedItemStack. Di solito è possibile utilizzare l'operatore o il metodo `.weight(weight)` di IItemStack, anche se
```zenscript
new MCWeightedItemStack(itemStack as IItemStack, weight as double) as MCWeightedItemStack
new MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Parameter | Type                                        | Description                           |
| --------- | ------------------------------------------- | ------------------------------------- |
| itemStack | [IItemStack](/vanilla/api/items/IItemStack) | La Pila                               |
| weight    | double                                      | La possibilità, tra 0 (0%) e 1 (100%) |


## Methods

### weight

Crea una nuova pila ponderata con il peso dato

Return Type: [MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
MCWeightedItemStack.weight(newWeight as double) as MCWeightedItemStack
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```
| Parameter | Type   | Description    |
| --------- | ------ | -------------- |
| NuovoPeso | double | La percentuale |


## Operators

### MOD

Creates a new Weighted Stack with the given percentage

```zenscript
myMCWeightedItemStack % newWeight as int
<item:minecraft:bedrock>.weight(0.5D) % 75
```


### MUL

Imposta l'importo dell'oggettoStack. <p> Se lo Stack originale era mutabile, muta anche la dimensione dello stack originale.

```zenscript
myMCWeightedItemStack * newAmount as int
<item:minecraft:bedrock>.weight(0.5D) * 5
```



## Properties

| Name   | Type                                        | Ha Getter | Ha Setter |
| ------ | ------------------------------------------- | --------- | --------- |
| stack  | [IItemStack](/vanilla/api/items/IItemStack) | true      | false     |
| weight | double                                      | true      | false     |

