# Usare questa wiki

Questa wiki ha lo scopo di fornire un quadro su quali tipi esistono in crafttweaker e quali sono i loro usi.  
Ci sono anche alcuni esempi in alcune voci per fornire maggiore chiarezza.

# Termini

Prima di iniziare, ci sono alcuni termini che potresti voler abituarti a:

## ZenGetter

Uno ZenGetter è un modo per recuperare le informazioni da un determinato oggetto. Per esempio [IItemStack](/Vanilla/Items/IItemStack/) ha un ZenGetter chiamato "displayName".  
Usiamo ZenGetter così:

```zenscript
//object.zenGetter;
<minecraft:iron_ingot>.displayName;
```

Un ZenGetter restituirà sempre qualcosa, in questo caso una stringa che rappresenta il nome dell'oggetto ("Iron Ingot").

## ZenSetter

Un ZenSetter funziona quasi allo stesso modo di un ZenGetter fa, l'unica differenza è che un set ZenSetter ottiene, un ZenGetter ottiene.  
Rimaniamo con il nostro [IItemStack](/Vanilla/Items/IItemStack/), dato che ha anche un ZenSetter chiamato "displayName". Sappiamo dalla voce che è di tipo stringa.

Usiamo lo ZenSetter così:

```zenscript
//object.zenSetter = newValue;
<minecraft:iron_ingot>.displayName = "Unsuspecting Ingot";
```

Un ZenSetter non restituirà mai qualcosa, dal momento che è destinato a impostare, non per ottenere.

## Assegna operatori

Se un oggetto ha entrambi, ZenGetter e ZenSetter con lo stesso nome (ad es. [IItemStack](/Vanilla/Items/IItemStack/) "displayName"), è possibile utilizzare operatori diversi da `=`:

A seconda del tipo che puoi utilizzare: `&=`, `<unk> =`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
Vediamo cosa fanno:

```zenscript
//Poiché abbiamo uno ZenGetter e uno ZenSetter con lo stesso nome, il primo fa lo stesso come il secondo:
//object. enSetter += valore;
//object. enSetter = object.zenGetter + value;

<minecraft:iron_ingot>.displayName += " di Doom";
<minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " di Doom";
```