# Gestore Staffa Liquida

Il Bracket Handler liquido consente di accedere ai liquidi presenti nel gioco. È possibile ottenere solo liquidi registrati nel gioco, quindi l'aggiunta o la rimozione di mod può causare problemi se si fa riferimento ai liquidi del mod in un Gestore a staffa liquido.

I liquidi sono referenziati nel liquido-staffa Handler in questo modo:

```zenscript
<liquid:liquidname> O <fluid:liquidname>

<liquid:lava> O <fluid:lava>
```

Se il liquido viene trovato, questo restituirà un oggetto ILiquidStack. Si prega di fare riferimento alla voce [Wiki](/Vanilla/Liquids/ILiquidStack/) per ulteriori informazioni su ciò che si può fare con questi.

# Ottenere tutti i liquidi registrati

È possibile utilizzare il seguente comando per inviare tutti i liquidi registrati nel registro di CraftTweaker

    /ct liquids
    /crafttweaker liquids