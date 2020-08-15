# Funzioni Ricetta

# IRecipeFunction

Alcune ricette supportano funzioni personalizzate per determinare programmaticamente il loro output.  
Questo può essere particolarmente utile se hai bisogno di alcune informazioni sull'elemento di input, come il valore del danno.  
Questo è un cosiddetto IRecipeFunction.

## Esempio di riparazione di un piccone

```zenscript
val diaPick = <minecraft:diamond_pickaxe>;

//iniziamo normale, scrivendo l'output
recipes.addShapeless("pickrepair",diaPick,

//seguito dall'array di input. Un cambiamento però - segniamo il piccone di diamante, in modo da poterlo usare nella funzione più tardi
[diaPick. nyDamage().marked("mark"),<minecraft:diamond>],

//ora iniziamo a dichiarare la funzione. 
//Ha bisogno di 3 parametri, uno per l'output, uno per gli ingressi e uno per le informazioni di creazione. 
//Avremo bisogno solo del parametro di input, però.
function(out, ins, cInfo){

    //now we return the pickaxe with either 0 DMG or Current damage -10, whatever is higher. Questo è per prevenire i valori di danno negativo.
    return ins.mark.withDamage(max(0,ins.mark.damage - 10));
}, 
//Non abbiamo bisogno di una recipeAction qui quindi basta impostarla su null
null);
```

## Come impostare un IRecipeFunction

Come potreste aver visto nell'esempio sopra, c'è una funzione con 3 Parametri:  
Non devi chiamarli in questo modo, possono avere alcun nome.

`out` è l'output della ricetta e un oggetto IItemStack.  
`ins` è una mappa con i segni come chiavi e gli input contrassegnati come valori.  
`cInfo` è un oggetto ICraftingInfo

La funzione deve restituire l'IItemStack che la ricetta dovrebbe emettere.

Puoi invalidare una ricetta restituendo `null` in modo che non possa essere creata in determinate condizioni.

Modificare il `ins` qui è una cattiva idea, questa funzione attiva per ogni cambiamento nella griglia di creazione, non quando si estrae effettivamente il risultato.

# IRecipeAction

Ma CraftTweaker va oltre il semplice calcolo dei vostri output utilizzando funzioni.  
Con una funzione IRecipeAction puoi anche determinare cosa dovrebbe accadere quando un utente crea l'oggetto.  
Un oggetto IRecipeAction viene dopo un IRecipeFunction!

```zenscript
val stone = <minecraft:stone>;

recipes.addShapeless("experiencestone",pietra,[pietra,pietra,pietra],
//IrecipeFunction, basta restituire l'output, non ci interessa questa volta.
function(out,ins,cInfo){
    return out;
},
//IRecipeAction
function(out,cInfo,player){
    player.xp += 1;
});
```

Questo dà il giocatore che esegue il livello di ricetta 1 ogni volta che il crafting è completato. Di nuovo, abbiamo una funzione con 3 Parametri:  
`out` è l'output della ricetta e un oggetto IItemStack.  
`cInfo` è un oggetto ICraftingInfo Object  
`giocatore` è il giocatore che esegue la ricetta e un [IPlayer](/Vanilla/Players/IPlayer/) oggetto.