# Acciaierie

L'acciaieria è una macchina che converte un elemento di ingresso e fluido in un oggetto di uscita utilizzando vapore.

## Chiamata

È possibile chiamare il pacchetto Steelworks utilizzando `mods.steamagerevolution.Steelworks`.

## Rimozione

Questa funzione rimuove la prima ricetta che trovano con l'output [IItemStack](/Vanilla/Items/IItemStack/) `dato`:

```java
mods.steamagerevolution.Steelworks.removeRecipe(IItemStack output);

// Esempi
mods.steamagerevolution.Steelworks.removeRecipe(<ore:ingotSteel>.firstItem);
```

Questa funzione rimuove *tutte le* ricette attualmente definite per gli Acciai:

```java
mods.steamagerevolution.Steelworks.removeAll();
```

## Aggiunta

Questa funzione viene utilizzata per aggiungere nuove ricette per le acciaierie:

```java
mods.steamagerevolution.Steelworks.addRecipe(ingresso ILiquidStack, ingresso IIngredient 2, uscita IItemStack, int craftTime, int steamCost);

// Esempi
mods.steamagerevolution.Steelworks.addRecipe(<liquid:iron>, <ore:coal>, <ore:ingotSteel>.firstItem, 200, 200);
```
