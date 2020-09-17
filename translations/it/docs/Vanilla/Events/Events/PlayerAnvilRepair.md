# PlayerAnvilRepair

Il PlayerAnvilRepair Event viene sparato ogni volta che un giocatore artigianale qualcosa nell'incudine.  
Puoi cambiare la possibilità che l'incudine sia danneggiata.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerAnvilRepairEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

PlayerAnvilRepair Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter        | ZenSetter     | Tipo Di Reso                             |
| ---------------- | ------------- | ---------------------------------------- |
| `giocatore`      |               | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `itemInput`      |               | [IItemStack](/Vanilla/Items/IItemStack/) |
| `itemIngredient` |               | [IItemStack](/Vanilla/Items/IItemStack/) |
| `itenResult`     |               | [IItemStack](/Vanilla/Items/IItemStack/) |
| `breakChance`    | `breakChance` | galleggiante                             |