# Types de variables

Comme vous avez sûrement déjà eu un peu de variables et de valeurs, vous devez vous demander, comment CraftTweaker sait si elle traite avec un entier, un élément ou une entrée oreDic ?

La façon la plus simple de déclarer une variable est d'utiliser ```var name = valeur;```. This creates the variable and casts it to the value it thinks is most fitting for the situation.

## Casting d'une variable vers un type spécifique

Des scripts plus complexes peuvent vous obliger à convertir une variable en un type spécifique. Par exemple, cela échouerait :

```zenscript
test var ;

test = <minecraft:dirt>;
recettes.remove(test);
```

Alors pourquoi cela échoue-t-il ? C'est parce que CT convertit des variables qui n'ont pas de valeur de départ au type IAny . Ce type a été conçu pour faciliter certains gestionnaires de recettes, bien que jamais réellement mis en œuvre, donc il fait parfois plus de mal que de bien. Il a été initialement conçu comme un type qui peut prendre la forme de la plupart des autres types de sorte que vous n'avez pas besoin de changer des variables tout le temps, mais l'interface n'a jamais été implémentée.

Back to the topic: How can we fix this issue? En lançant le test de la variable à ```IItemStack```, qui est le type utilisé pour les éléments. Malheureusement, certains types doivent être importés en premier, et c'est l'un de ceux-ci.

```zenscript
importer crafttweaker.item.IItemStack;
var test as IItemStack;

test = <minecraft:dirt>;
recipes.remove(test);
```

## Liste des types de variables

Voici une liste (incomplète) de la plupart des types de variables

| Nom (Nom en CT)                                    | Explication                                                                                                                                              | Exemple                                                 | Importation                                 |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------- |
| Nombre entier (int)                                | Les entiers sont des nombres entiers (ex. 1,2,3,...), des majuscules à 2 147 483 647                                                                     | `var test = 10 comme int;`                              |                                             |
| [IItemStack](/Vanilla/Items/IItemStack/)           | Éléments simples                                                                                                                                         | `var test = <minecraft:dirt> comme IItemStack;`   | importer crafttweaker.item.IItemStack;      |
| [Ingrédient](/Vanilla/Variable_Types/IIngredient/) | Éléments simples ou multiples (ex : `<minecraft:dirt>`, `<ore:ingotIron>`,...)                                                               | `var test = <minecraft:dirt> comme IIngrédient;`  | Importer crafttweaker.item.IIngredient;     |
| [Entrée IOreDict](/Vanilla/OreDict/IOreDictEntry/) | Éléments multiples d'un OreDict (par exemple `<ore:ingotIron>`, `<ore:ingotGold>`,...)                                                       | `var test = <ore:ingotIron> comme IOreDictEntry;` | Importer crafttweaker.oredict.IOreDictEntry |
| Booléen (bool)                                     | Les booléens sont soit vrais, soit faux.                                                                                                                 | `var test = faux comme bool;`                           |                                             |
| Octet (octet)                                      | Les valeurs de octets sont des nombres entiers de 0 à 255 ()                                                                                             | `var test = 125 byte;`                                  |                                             |
| Point flottant (float)                             | Décimales                                                                                                                                                | `var test = 1.25 en float;`                             |                                             |
| Double précision (double)                          | Comme les points flottants, juste plus précis et avec une plage de numéros plus élevée                                                                   | `var test = 1.25 en double;`                            |                                             |
| Long (long)                                        | Comme Integer, mais avec une plage de numéros plus élevée (généralement int est bon)                                                                     | `var test = 30 aussi long;`                             |                                             |
| Null (nul)                                         | Null, rien, nada. Pas vraiment un type mais toujours utile                                                                                               | `var test = null;`                                      |                                             |
| Courte (courte)                                    | Comme Integer, mais avec une plage de nombres plus petite                                                                                                | `var test = 16 comme abrégé;`                           |                                             |
| Chaîne (chaîne)                                    | Une chaîne est un texte. Ici, vous n'aurez généralement pas besoin du "comme" car quoi que ce soit dans "s est automatiquement une chaîne de caractères. | `var test = "Bonjour le monde!" comme chaîne;`          |                                             |
| Vide (vide)                                        | Même moins que null. Vous n'aurez probablement besoin que du type vide lorsque vous traiterez des fonctions                                              | `test var comme étant annulé ;`                         |                                             |
| [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)     | Identique à IItemStack, uniquement pour les liquides                                                                                                     | `var test = <liquid:water> comme ILiquidStack;`   | importer crafttweaker.liquid.ILiquidStack;  |