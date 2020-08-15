# IItemUtils

L'interfaccia ItemUtils fornisce vari elementi utili.  
È possibile accedere tramite la parola chiave `elementi`.

## Creare Pozioni

La funzione createPotions consente di creare pozioni personalizzate.  
Restituisce la pozione come [IItemStack](/Vanilla/Items/IItemStack/).  
Poiché il parametro per questa funzione è un vararg, puoi fornire un solo oggetto[][] o molti oggetto[].  
In entrambi i casi ogni oggetto[] deve contenere

1. Un [IPotion](/Vanilla/Potions/IPotion/)
2. Un suggerimento che descrive l'effetto amplificatore/forza
3. Un suggerimento che descrive la durata dell'effetto. 

Se un oggetto[] non è di questa lunghezza o non è in questo ordine, verrà ignorato.

```zenscript
//createPotion(Object[]...);
//createPotion([effect,strength,duration],[effect2, strength2,duration2],...);
//createPotion([[effect,strength,duration],[effect2, strength2,duration2],...]);
val poion = itemUtils.createPotion([[[<potion:minecraft:strength>, 1, 1]]);
```

## Ottieni elementi per nome

Queste due funzioni restituiscono entrambe un [IItemStack](/Vanilla/Items/IItemStack/)[] contenente tutti gli elementi corrispondenti.  
Il primo controlla i nomi del registro degli articoli, il secondo usa i nomi non localizzati.

```zenscript
//getItemsByRegexRegistryName(String Regex)
itemUtils.getItemsByRegexRegistryName(".*sword.*"); // tutte le cose che hanno la spada nel nome
itemUtils.getItemsByRegexRegistryName(". thermal.*"); // all thermal espansion/foundation/dynamics items

//getItemsByRegexUnlocalizedName(String Regex)
itemUtils.getItemsByRegexUnlocalizedName(".*pink.*"); // pink things!! <3
```

## Imitare il gestore parentesi oggetto

Questo metodo fa lo stesso del [Item Bracket Handler](/Vanilla/Brackets/Bracket_Item/).  
A differenza di BH però, è necessario fornire il meta come parametro opzionale.  
Se vuoi usare il meta wildcard, usa `32767`.

    //getItem(location, @Optional meta);
    itemUtils.getItem("minecraft:iron_ingot"); //<minecraft:iron_ingot>
    itemUtils.getItem("minecraft:dye", 1); //<minecraft:dye:1>
    itemUtils.getItem("minecraft:wool", 32767); //<minecraft:wool:*>
    

## Crea uovo di Uovo

La funzione createSpawnEgg consente di creare uova di spawn di mod personalizzate.  
Il customNBT è FACOLTATIVO e può sovrascrivere il tag dell'entità.  
Restituisce lo spawn eff come [IItemStack](/Vanilla/Items/IItemStack/).

```zenscript
//createSpawnEgg(entity, @optional customNBT)
//NBT sovrascrive l'entità (questo crea un uovo creeper!)
val egg = itemUtils.createSpawnEgg(<entity:minecraft:sheep>, {EntityTag:{id:"minecraft:creeper",NoAI:1 come byte,PersistenceRequired:1 come byte}});
```