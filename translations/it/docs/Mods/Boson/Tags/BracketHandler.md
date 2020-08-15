# Il Gestore Delle Parentesi

Il Bracket Handler è l'unico modo per ottenere un tag.

## Sintassi
La sintassi di questo gestore di parentesi è estremamente facile da seguire, e allo stesso tempo permette una grande varietà di possibilità in cui tag dovrebbe essere restituito dal gestore staffa.

```zenscript
<tag-TYPE:NAMESPACE:NAME>
```

Nella snippet di codice sopra, le parti in tutti i tappi sono i bit che sono personalizzabili dallo sviluppatore e rappresentano il target che verrà restituito.

`TIPO` identifica il [tipo di tag](/Mods/Boson/Tags/TagType/) che verrà creato. Il tipo deve essere uno dei mnemonici che identificano un tipo di tag. Fare riferimento alla pagina collegata per un elenco di tipi di tag validi.

`NAMESPACE` identifica lo spazio del nome di un tag, cioè l'ID della mod che possiede il tag. Nella maggior parte dei casi, lo spazio dei nomi sarà o `forge` o `minecraft`, ma è anche possibile usare altri spazi di nome, e. . per i tag specifici per mod.

`NOME` rappresenta il nome del tag che dovrebbe essere ottenuto.

Fare riferimento alla sezione Comportamento per sapere cosa restituisce questo gestore staffa.

## Comportamento
A differenza di altri gestori di staffe che sono presenti in CraftTweaker, il comportamento di questo gestore di parentesi differisce in base al quale il caricatore sta elaborando lo script in cui si trova il gestore di parentesi.

### Il caricatore `tags`
Se il gestore della parentesi è referenziato in uno script caricato dai tag [`` loader](/Mods/Boson/Loaders/Tags/), esso restituirà un [`Tag`](/Mods/Boson/Tags/Tag/). Ciò consente di manipolare gli elementi contenuti nel tag stesso. Consultare la documentazione della classe per ulteriori informazioni.

### Il caricatore `preinit`
Se il gestore parentesi è referenziato in uno script caricato dal caricatore `preinit` , lancerà un'eccezione, dal momento che i tag sono caricati più tardi nel ciclo di vita di Minecraft, vale a dire poco prima che le ricette siano registrate.

### Ogni altro caricatore
Se il gestore della staffa è referenziato in uno script caricato da uno qualsiasi degli altri caricatori, incluso il predefinito `recipeevent` , quindi restituirà un [`TagIngredient`](/Mods/Boson/Tags/TagIngredient/). Questo non consente di manipolare il contenuto del tag, ma permette di usare il tag nelle ricette e in altre invocazioni di metodo che richiedono un'istanza di [`IIngredient`](/Vanilla/Variable_Types/IIngredient/) come parametro.

## Esempio di utilizzo

Questo primo esempio mostra l'uso di un `TagIngredient` per aggiungere una nuova ricetta. Nota l'utilizzo del tipo `items` tag :

```zenscript
val tagIngredient = <tag-items:forge:ingots/iron>;
recipes.addShapelessRecipe("test", <minecraft:iron_ingot> * 3, [tagIngredient, tagIngredient, tagIngredient]);
```

Questo secondo esempio mostra la manipolazione di un `Tag` di tipo `blocchi`:

```zenscript
#loader tags
val tag = <tag-blocks:minecraft:enderman_holdable>;
tag.add("minecraft:iron_block" come NameSpacedString);
```
