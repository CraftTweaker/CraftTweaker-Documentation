# MCWeightedItemStack

Un ItemStack con una possibilità, di solito usato per gli output delle ricette. <p> Attenzione, se lo stack che è stato utilizzato per creare il WeightedStack era mutabile, allora il setter di dimensioni muterà anche lo stack originale!

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.item.MCWeightedItemStack
```

## Interfacce Implementate
MCWeightedItemStack implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Costruttori
Crea manualmente il weightedItemStack. Di solito è possibile utilizzare l'operatore o il metodo `.weight(weight)` di IItemStack, anche se
```zenscript
new crafttweaker.api.item.MCWeightedItemStack(itemStack as crafttweaker.api.item.IItemStack, weight as double);
new crafttweaker.api.item.MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Parametro | Tipo                                                              | Descrizione                           |
| --------- | ----------------------------------------------------------------- | ------------------------------------- |
| itemStack | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La Pila                               |
| peso      | doppia                                                            | La possibilità, tra 0 (0%) e 1 (100%) |



## Metodi
### peso

Crea una nuova pila ponderata con il peso dato

 Restituisce: `Un nuovo pesi oggettoStack`

Tipo di restituzione: [crafttweaker.api.item.MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:bedrock>.weight(0.5D).weight(newWeight as double);
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```

| Parametro | Tipo   | Descrizione    |
| --------- | ------ | -------------- |
| NuovoPeso | doppia | La percentuale |



## Proprietà

| Nome          | Tipo                                                              | Ha Getter | Ha Setter |
| ------------- | ----------------------------------------------------------------- | --------- | --------- |
| commandString | Stringa                                                           | vero      | falso     |
| pila          | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | vero      | falso     |
| peso          | doppia                                                            | vero      | falso     |

## Operatori
### MUL

Imposta l'importo dell'oggettoStack. <p> Se lo Stack originale era mutabile, muta anche la dimensione dello stack originale.

 Restituisce: `Un nuovo pesi oggettoStack`

```zenscript
<item:minecraft:bedrock>.weight(0.5D) * newAmount as int
<item:minecraft:bedrock>.weight(0.5D) * 5
```

| Parametro    | Tipo | Descrizione                     |
| ------------ | ---- | ------------------------------- |
| nuovoImporto | int  | La nuova dimensione dello stack |
### MOD

Crea una nuova pila ponderata con la percentuale data

 Restituisce: `Un nuovo pesi oggettoStack`

```zenscript
<item:minecraft:bedrock>.weight(0.5D) % newWeight as int
<item:minecraft:bedrock>.weight(0.5D) % 75
```

| Parametro | Tipo | Descrizione    |
| --------- | ---- | -------------- |
| NuovoPeso | int  | La percentuale |

