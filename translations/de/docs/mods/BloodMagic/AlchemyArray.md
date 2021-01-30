::requiredMod[Blood Magic]{buildIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/blood-magic}

# Blood Magic Alchemie Array

Das Alchemie-Array ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager's zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript fügt ein Rezept hinzu, das einen Diamanten ausgibt, wenn Erde und Glas einem Alchemie-Array übergeben werden. Wenn die Erde gegeben wird, wird das Alchemie-Array die Textur eines Diamanten verwenden.

```zenscript
// <recipetype:bloodmagic:array>.addRecipe(String name, IItemStack output, IIngredient baseInput, IIngredient addedInput, ResourceLocation texture)
<recipetype:bloodmagic:array>.addRecipe("alchemy_array_test", <item:minecraft:diamond>, <item:minecraft:dirt>, <item:minecraft:glass>, <resource:textures/item/diamond.png>)
```

Die `ResourceLocation-Textur` kann jede Textur im Spiel sein und wird verwendet, wenn der `baseInput</ß> dem Alchemie Array hinzugefügt wurde.</p>

<p spaces-before="0">Die Standardwerte, die Blood Magic selbst verwenden, sind folgende:</p>

<pre><code class="zenscript"><resource:bloodmagic:textures/models/alchemyarrays/airsigil.png>
<resource:bloodmagic:textures/models/alchemyarrays/bindingarray.png>
<resource:bloodmagic:textures/models/alchemyarrays/bouncearray.png>
<resource:bloodmagic:textures/models/alchemyarrays/divinationsigil.png>
<resource:bloodmagic:textures/models/alchemyarrays/fastminersigil.png>
<resource:bloodmagic:textures/models/alchemyarrays/growthsigil.png>
<resource:bloodmagic:textures/models/alchemyarrays/lavasigil.png>
<resource:bloodmagic:textures/models/alchemyarrays/lightsigil.png>
<resource:bloodmagic:textures/models/alchemyarrays/magnetismsigil.png>
<resource:bloodmagic:textures/models/alchemyarrays/moonarray.png>
<resource:bloodmagic:textures/models/alchemyarrays/movementarray.png>
<resource:bloodmagic:textures/models/alchemyarrays/sightsigil.png>
<resource:bloodmagic:textures/models/alchemyarrays/spikearray.png>
<resource:bloodmagic:textures/models/alchemyarrays/sunarray.png>
<resource:bloodmagic:textures/models/alchemyarrays/updraftarray.png>
<resource:bloodmagic:textures/models/alchemyarrays/voidsigil.png>
<resource:bloodmagic:textures/models/alchemyarrays/watersigil.png>
`</pre>


#### Remove Recipes

Das folgende Skript wird alle Rezepte aus dem Alchemie-Array entfernen, die ein Göttliches Siegel ausgeben.

```zenscript
//<recipetype:bloodmagic:array>.removeRecipe(IItemStack output);
<recipetype:bloodmagic:array>.removeRecipe(<item:bloodmagic:divinationsigil>);
```