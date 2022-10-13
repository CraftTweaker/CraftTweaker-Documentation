# Migration des scripts vers CraftTweaker 7.1

La version 7.1 de CraftTweaker comporte quelques modifications qui brisent la rétrocompatibilité.  
Ces modifications majeures concernent l'API utilisée par les modules complémentaires ainsi que les types utilisés par les scripts.  
Ce document devrait donner un aperçu des modifications les plus importantes et de la manière dont les développeurs peuvent faire fonctionner à nouveau leurs scripts.


## MCTag devient MCTag&LT;T&GT;

Nous avons remplacé les Tags par un système générique plus extensible et qui fonctionnera mieux avec les futures mises à jour.  
Ce changement cassera les scripts existants de deux manières :

1) Les méthodes d'ajout et de suppression spécialisées ont été supprimées. <br>Vous utilisez maintenant `add` et `remove` au lieu de `addItems`, `addFluids` et autres. 2) La syntaxe du Bracket handlers requiert désormais le type de balise comme paramètre supplémentaire. <br>Alors `<tag:forge:gems>` devient `<tag:items:forge:gems>`

Les commandes `/ct dump tags` et `/ct hand` ont été mises à jour pour refléter ce changement.  
Si vous devez utiliser l'une des méthodes d'expansion de I'ingredient à partir d'une balise d'élément, vous devez d'abord écrire `.asIIngredient()`.

Exemple de mgration
```zenscript
import crafttweaker.api.tag.MCTag;
import crafttweaker.api.item.MCItemDefinition;
import crafttweaker.api.fluid.MCFluid;

var fluidTagOld = <tag:minecraft:water> as MCTag;
var itemTagOld = <tag:forge:gems> as MCTag;

var fluidTagNew = <tag:fluids:minecraft:water> as MCTag<MCFluid>;
var itemTagNew = <tag:items:forge:gems> as MCTag<MCItemDefinition>;

//Comment intéragir
var myGemTagOld = <tag:forge:gems>;
myGemTagOld.addItems(<item:minecraft:bedrock>);
myGemTagOld.removeItems(<item:minecraft:diamond>);

var myGemTagNew = <tag:items:forge:gems>;
myGemTagNew.add(<item:minecraft:bedrock>);
myGemTagNew.remove(<item:minecraft:diamond>);


//Expansions d'ingrédients
var reuseOld = <tag:forge:gems>.reuse();
var reuseNew = <tag:items:forge:gems>.asIIngredient().reuse();
```


## Les types de conteneur deviennent des types vanilla

Nous avons changé certains travaux internes de CraftTweaker pour utiliser directement les types de minecraft.  
Ce changement ne doit pas affecter directement vos scripts existants, mais va casser certaines des intégrations ajoutées par d'autres mods.

Les classes cassées seront enregistrées dans les logs de crafttweaker Si vous trouvez que certains de vos scripts sont cassés, vérifiez s'ils utilisent une des classes cassées.


## Méthode pour enregister le changement de signature pour EventHandlers

Event listeners no longer have the consumer in a custom constructor.  
Instead, the registitration method was changed to be generic.

Exemple de migration :
```zenscript
import crafttweaker.api.events.CTEventManager;
import crafttweaker.api.event.entity.player.MCAnvilRepairEvent;

//Ancienne façon :
CTEventManager. egister(new MCAnvilRepairEvent((event) => {
     var player = event. layer;
     var result = event.itemResult;
     println("Joueur '" + player.name + "' crafted " + result.commandString);
 }));


//Nouvelle façon :
CTEventManager. egister<MCAnvilRepairEvent>((événement) => {
     var player = event. layer;
     var result = event.itemResult;
     println("Joueur '" + player.name + "' crafted " + result.commandString);
});
```


## ZenCode : Les balises de stockage ont disparu

We removed Storage tags from the ZenCode language Specifications for now.  
They are not required for CraftTweaker and made debugging harder.  
Most people did not need to use storage tags so we don't expect you to need to pursue this migration step.

Exemple de migration :
```zenscript
var before = {} as string`static[string`static]`unique

var after = {} as string[string];

function funcBefore(argument as string`borrow) as string`unique {
    return argument + "!";
}

function funcAfter(argument as string) as string {
    return argument + "!";
}
```
