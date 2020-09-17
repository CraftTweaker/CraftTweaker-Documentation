# Rappresentanza Trait

Una rappresentazione dei tratti rappresenta un tratto di costruzione di un Tinker.  
È possibile ottenere un tale oggetto sia dal [Trait Builder](/Mods/ContentTweaker/Tinkers_Construct/TraitBuilder/) o dal [Trait Bracket Handler](/Mods/ContentTweaker/Tinkers_Construct/Brackets/Bracket_Trait/).

## Importare la classe

Potrebbe essere necessario importare la classe se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.tconstruct.Trait`

## ZenGetter

| ZenGetter     | Tipo    |
| ------------- | ------- |
| identifier    | stringa |
| commandString | stringa |

## Aggiunta elementi caratteristica

Se si combina l'ingrediente dato con uno strumento nella forgiatura di utensili di un tinker, è possibile applicare il tratto come modificatore.

```zenscript
//myTrait.addModifierItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(1) int amountMatched));
myTrait.addModifierItem(<item:minecraft:iron_pickaxe>);
myTrait.addModifierItem(<item:minecraft:iron_block>, 4, 2);
```

- `elemento` è l'elemento con cui è abbinato. È possibile utilizzare [condizioni articolo](/Vanilla/Items/Item_Conditions/) ma nessun trasformatore. 
- `amountNeeded` is the amount of items that is matched in. È possibile dividerli su tutti gli slot forniti dalla toolforge, che consente anche di andare al di sopra di 64. Nell'esempio di cui sopra, avete bisogno di 4 blocchi di ferro per aggiunta. Predefiniti a 1.
- `amountMatched` is the amount of trait points added per `amountNeeded`. Nell'esempio sopra quattro blocchi di ferro danno due punti di tratto. Predefiniti a 1.

## Accesso Ai Dati Trait

I dati di traffico sono i dati che appartengono a un tratto ed è itemBound. Come tale, puoi fornire l' [IItemStack](/Vanilla/Items/IItemStack/) e recuperare l'oggetto [TraitDataRepresentation](/Mods/ContentTweaker/Tinkers_Construct/TraitDataRepresentation/).

    val myTraitData = myTrait.getData(itemWithTrait);