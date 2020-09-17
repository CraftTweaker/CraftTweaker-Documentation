# Loom

## Pacchetto
```zenscript
import mods.terrafirmacraft.Telaio;
```

## Addizione

```zenscript
Loom.addRecipe(String registryName, IIngredient input, IItemStack output, int steps, String loomTexture);
```
- passi è il numero di passaggi necessari per completare la ricetta. È il numero di volte che il giocatore deve fare clic sul telaio, ogni movimento del ciclo avanza un passo. All'interno di TFC, questo è lo stesso del numero di elementi necessari per la ricetta, ma non è tenuto ad essere così.
- loomTexture è un percorso (`ResourceLocation`) a un file di texture, da usare per visualizzare sul telaio del mondo. Ad esempio, "minecraft:textures/blocks/wool_colored_white.png" fa riferimento alla texture vanilla per la lana bianca). Se stai usando delle texture personalizzate, hai bisogno di una forma di caricamento dati/risorse (leggi: un pacchetto di risorse) per poter fare riferimento alla tua texture in modo corretto.

## Rimozione

```zenscript
Loom.removeRecipe(IItemStack output);
Loom.removeRecipe(String registryName);
```

## Esempio
```zenscript
Loom.addRecipe("burlap_cloth", <tfc:crop/product/jute_disc>, <tfc:crop/product/burlap_cloth>, "tfc:textures/blocks/devices/loom/product/burlap.png");
```